const TABLE = 'reviews';
const REVIEW_COLUMNS = 'id,name,rating,comment,created_at,location,product,verified,status';

const json = (res, status, body) => {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json(body);
};

function databaseConfig(env) {
  const url = env.SUPABASE_URL?.replace(/\/+$/, '');
  const secretKey = env.SUPABASE_SECRET_KEY;
  const legacyServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;
  const key = secretKey || legacyServiceRoleKey;
  if (!url || !key) throw new Error('Review database is not configured');
  return { url, key, isLegacyKey: !secretKey };
}

async function databaseFetch(env, path, options = {}) {
  const { url, key, isLegacyKey } = databaseConfig(env);
  const headers = {
    apikey: key,
    'Content-Type': 'application/json',
    ...options.headers
  };
  if (isLegacyKey) headers.Authorization = `Bearer ${key}`;

  return fetch(`${url}/rest/v1/${TABLE}${path}`, {
    ...options,
    headers
  });
}

export default async function handler(req, res, env = process.env) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return json(res, 405, { error: 'Method not allowed' });
  }

  try {
    const response = await databaseFetch(env, `?select=${REVIEW_COLUMNS}&status=eq.approved&order=created_at.desc&limit=1000`);
    if (!response.ok) throw new Error(`Review read failed (${response.status})`);
    return json(res, 200, { reviews: await response.json() });
  } catch (error) {
    console.error('Review API request failed:', error);
    const notConfigured = error.message === 'Review database is not configured';
    return json(res, notConfigured ? 503 : 502, {
      error: notConfigured
        ? 'The shared review database is not configured yet.'
        : 'The review service is temporarily unavailable.'
    });
  }
}