import test from 'node:test';
import assert from 'node:assert/strict';

import { addCartItem, buildWhatsAppCartMessage, sanitizeCartData } from '../src/utils/cart.js';

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

test('WhatsApp cart message includes the selected pack size and price', () => {
  const message = buildWhatsAppCartMessage([
    {
      id: 'vangi-bath-powder',
      name: 'Vangi Bath Powder',
      weight: '1kg',
      price: 829,
      quantity: 1,
    },
  ]);

  assert.match(message, /Vangi Bath Powder \(1kg\) × 1 — ₹829/);
  assert.match(message, /Total: ₹829/);
});
