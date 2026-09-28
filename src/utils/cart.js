export const CART_STORAGE_KEY = 'nalinasKaiRuchiCart';
export const BUSINESS_WHATSAPP = '919980819355';

const isRecord = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export const sanitizeCartData = (rawValue) => {
  if (!Array.isArray(rawValue)) return [];

  const cleaned = [];

  for (const entry of rawValue) {
    if (!isRecord(entry)) continue;

    const id = typeof entry.id === 'string' ? entry.id.trim() : '';
    const name = typeof entry.name === 'string' ? entry.name.trim() || 'Product' : 'Product';
    const kannadaName = typeof entry.kannadaName === 'string' ? entry.kannadaName.trim() : '';
    const weight = typeof entry.weight === 'string' ? entry.weight.trim() : '';
    const image = typeof entry.image === 'string' ? entry.image.trim() : '';
    const priceValue = Number(entry.price);
    const quantityValue = Number(entry.quantity);

    if (!id || !weight || !Number.isFinite(priceValue) || priceValue < 0 || !Number.isFinite(quantityValue) || quantityValue < 1) {
      continue;
    }

    const price = Math.round(priceValue);
    const quantity = Math.round(quantityValue);

    const existingIndex = cleaned.findIndex((item) => item.id === id && item.weight === weight);
    if (existingIndex >= 0) {
      cleaned[existingIndex].quantity += quantity;
      cleaned[existingIndex].price = price;
      continue;
    }

    cleaned.push({
      id,
      name,
      kannadaName,
      weight,
      price,
      quantity,
      image,
    });
  }

  return cleaned;
};

export const addCartItem = (cartItems, product) => {
  const safeCart = Array.isArray(cartItems) ? cartItems : [];

  if (!isRecord(product)) {
    return safeCart;
  }

  const id = typeof product.id === 'string' ? product.id.trim() : '';
  const weight = typeof product.weight === 'string' ? product.weight.trim() : '';
  const name = typeof product.name === 'string' ? product.name.trim() || 'Product' : 'Product';
  const kannadaName = typeof product.kannadaName === 'string' ? product.kannadaName.trim() : '';
  const image = typeof product.image === 'string' ? product.image.trim() : '';
  const price = Math.round(Number(product.price) || 0);

  if (!id || !weight || price < 0) {
    return safeCart;
  }

  const nextCart = safeCart.map((item) => ({ ...item }));
  const matchIndex = nextCart.findIndex((item) => item.id === id && item.weight === weight);

  if (matchIndex >= 0) {
    nextCart[matchIndex].quantity += 1;
    nextCart[matchIndex].price = price;
    return nextCart;
  }

  nextCart.push({
    id,
    name,
    kannadaName,
    weight,
    price,
    quantity: 1,
    image,
  });

  return nextCart;
};

export const updateCartQuantity = (cartItems, itemId, weight, delta) => {
  if (!Array.isArray(cartItems)) return [];

  return cartItems
    .map((item) => {
      if (item.id !== itemId || item.weight !== weight) return item;
      const nextQuantity = (Number(item.quantity) || 0) + delta;
      return {
        ...item,
        quantity: nextQuantity > 0 ? nextQuantity : 0,
      };
    })
    .filter((item) => item.quantity > 0);
};

export const removeCartItem = (cartItems, itemId, weight) => {
  if (!Array.isArray(cartItems)) return [];
  return cartItems.filter((item) => !(item.id === itemId && item.weight === weight));
};

export const clearCartItems = () => [];

export const getCartTotals = (cartItems) => {
  const safeCart = Array.isArray(cartItems) ? cartItems : [];
  const count = safeCart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const total = safeCart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0), 0);

  return { count, total };
};

export const formatCurrency = (value) => `₹${Number(value || 0).toLocaleString('en-IN')}`;

export const buildWhatsAppCartMessage = (cartItems) => {
  const safeCart = Array.isArray(cartItems) ? cartItems : [];
  const { total } = getCartTotals(safeCart);

  const lines = [
    "Hello Nalina's Kai Ruchi,",
    '',
    'I would like to place an order:',
    '',
  ];

  safeCart.forEach((item, index) => {
    const name = item.name || 'Product';
    const quantity = Number(item.quantity) || 1;
    const subtotal = (Number(item.price) || 0) * quantity;
    lines.push(`${index + 1}. ${name} (${item.weight}) × ${quantity} — ${formatCurrency(subtotal)}`);
  });

  lines.push('', `Total: ${formatCurrency(total)}`);
  lines.push('', 'Please confirm the order and delivery details.');

  return lines.join('\n');
};
