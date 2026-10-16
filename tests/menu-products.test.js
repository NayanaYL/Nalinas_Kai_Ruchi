import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { MENU_CATEGORIES } from '../src/data/menuData.js';

const products = Object.fromEntries(
  MENU_CATEGORIES.flatMap((category) => category.items.map((item) => [item.id, item]))
);

test('menu navigation exposes the four requested product categories', () => {
  assert.deepEqual(
    MENU_CATEGORIES.map((category) => category.title),
    ['Masala Powders', 'Chutney Pudis', 'Traditional Snacks', 'Traditional Sweets']
  );
  assert.equal(Object.keys(products).length, 19);
});

test('every catalog product has an existing promotional image and Kannada name', () => {
  for (const item of Object.values(products)) {
    assert.ok(item.kannadaName, `${item.id} should have a Kannada name`);
    assert.ok(item.image, `${item.id} should have a product poster`);
    assert.ok(
      existsSync(resolve('public', item.image.replace(/^\/+/, ''))),
      `${item.id} image should exist at ${item.image}`
    );
  }
});

test('catalogue prices for bath powders, chutney pudis, and snacks are preserved', () => {
  const expectedPrices = {
    'vangi-bath-powder': [411, 829],
    'bisi-bele-bath': [419, 840],
    'puliogare-powder': [411, 819],
    'sambar-huli-pudi': [620, 1200],
    'mysore-rasam-powder': [620, 1200],
    'kadale-bele-chutney-pudi': [411, 819],
    'shenga-chutney-pudi': [411, 819],
    'karibevina-chutney-pudi': [411, 819],
    'hurali-kaalu-pudi': [411, 819],
    'moringa-chutney-pudi': [940, 1799],
    'thogari-bele-pudi': [419, 829],
    'kai-chakkuli': [410, 799],
    nippattu: [399, 781],
    kodubale: [399, 781],
  };

  for (const [id, [price500g, price1kg]] of Object.entries(expectedPrices)) {
    assert.equal(products[id].prices['500g'], price500g, `${id} 500g price`);
    assert.equal(products[id].prices['1kg'], price1kg, `${id} 1kg price`);
    assert.ok(products[id].weights.includes('500g'), `${id} should offer 500g`);
    assert.ok(products[id].weights.includes('1kg'), `${id} should offer 1kg`);
  }
});

test('existing sweet variants remain unchanged and Kajjaya is not added without catalogue pricing', () => {
  assert.deepEqual(products['bele-holige'].prices, {
    'Pack of 1': 34,
    'Pack of 5': 170,
    'Pack of 10': 340,
  });
  assert.deepEqual(products['kaayi-holige'].prices, {
    'Pack of 1': 37,
    'Pack of 5': 185,
    'Pack of 10': 370,
  });
  assert.deepEqual(products['besan-laddu'].prices, { '250g': 230, '500g': 450, '1kg': 890 });
  assert.deepEqual(products['shankara-poli'].prices, { '100g': 65, '250g': 129, '500g': 276, '1kg': 599 });
  assert.deepEqual(products.kharjikaayi.prices, { 'Pack of 1': 14, 'Pack of 5': 70, 'Pack of 10': 140 });
  assert.equal(products.kajjaya, undefined);
});
