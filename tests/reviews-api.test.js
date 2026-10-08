import assert from 'node:assert/strict';
import test from 'node:test';
import reviewsApi from '../api/reviews.js';

test('clients fetch shared approved reviews and submission methods are disabled', async () => {
  const records = [
    { id: 'approved-1', name: 'Customer A', rating: 5, comment: 'Excellent product!', status: 'approved' },
    { id: 'pending-1', name: 'Pending customer', rating: 4, comment: 'Waiting for approval', status: 'pending' },
    { id: 'rejected-1', name: 'Rejected customer', rating: 1, comment: 'Not public', status: 'rejected' }
  ];
  const originalFetch = globalThis.fetch;
  let databaseRequests = 0;
  globalThis.fetch = async (url, options = {}) => {
    assert.equal(options.headers.apikey, 'server-only-test-key');
    assert.equal(options.headers.Authorization, undefined);
    const parsedUrl = new URL(url);
    assert.equal(parsedUrl.pathname, '/rest/v1/reviews');
    assert.equal(parsedUrl.searchParams.get('status'), 'eq.approved');
    assert.equal(options.method || 'GET', 'GET');
    databaseRequests += 1;
    return new Response(JSON.stringify(records.filter((review) => review.status === 'approved')), { status: 200 });
  };

  const env = {
    SUPABASE_URL: 'https://db.example.test',
    SUPABASE_SECRET_KEY: 'server-only-test-key'
  };

  async function request(method, url = '/api/reviews') {
    const response = {
      headers: {},
      setHeader(name, value) { this.headers[name] = value; },
      status(code) { this.code = code; return this; },
      json(payload) { this.payload = payload; return this; }
    };
    await reviewsApi({ method, url }, response, env);
    return response;
  }

  try {
    const browserA = await request('GET');
    const browserB = await request('GET');
    const browserBRefresh = await request('GET');
    assert.equal(browserA.code, 200);
    assert.equal(browserA.payload.reviews[0].comment, 'Excellent product!');
    assert.equal(browserA.payload.reviews.some((review) => review.status !== 'approved'), false);
    assert.equal(browserB.payload.reviews[0].name, 'Customer A');
    assert.equal(browserBRefresh.payload.reviews.length, 1);
    assert.equal(databaseRequests, 3);
    assert.equal((await request('POST')).code, 405);
    assert.equal((await request('PATCH')).code, 405);
    assert.equal(databaseRequests, 3);
  } finally {
    globalThis.fetch = originalFetch;
  }
});