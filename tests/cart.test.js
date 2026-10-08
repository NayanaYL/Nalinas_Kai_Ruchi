import test from 'node:test';
import assert from 'node:assert/strict';

import { addCartItem, sanitizeCartData } from '../src/utils/cart.js';

test('addCartItem merges duplicate product rows by same product and weight', () => {
  const cart = [
    {
      id: 'vangi-bath-powder',
      name: 'Vangi Bath Powder',
      kannadaName: 'ವಾಂಗಿ ಬಾತ್ ಪುಡಿ',
      weight: '250g',
      price: 211,
      quantity: 1,
      image: '/images/spice-powders.jpg',
    }
  ];

  const updated = addCartItem(cart, {
    id: 'vangi-bath-powder',
    name: 'Vangi Bath Powder',
    kannadaName: 'ವಾಂಗಿ ಬಾತ್ ಪುಡಿ',
    weight: '250g',
    price: 211,
    image: '/images/spice-powders.jpg',
  });

  assert.equal(updated.length, 1);
  assert.equal(updated[0].quantity, 2);
});

test('sanitizeCartData ignores corrupted localStorage payloads', () => {
  const sanitized = sanitizeCartData({ broken: true, items: 'nope' });
  assert.deepEqual(sanitized, []);
});
