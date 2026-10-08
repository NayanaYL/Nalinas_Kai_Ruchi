import React from 'react';
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { BUSINESS_WHATSAPP, buildWhatsAppCartMessage, formatCurrency, getCartTotals } from '../utils/cart';

export const CartDrawer = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClear,
  onContinueShopping,
}) => {
  if (!isOpen) return null;

  const { count, total } = getCartTotals(items);

  const handleCheckout = () => {
    if (!items.length) return;
    const message = encodeURIComponent(buildWhatsAppCartMessage(items));
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[70] flex justify-end bg-black/50 backdrop-blur-[2px]">
      <div className="h-full w-full max-w-[520px] bg-[#fffaf2] text-[#2b1710] shadow-2xl border-l border-[#d8a83e]/40 animate-[slideInRight_0.2s_ease-out]">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-[#e8dbc4] bg-[#4a0d09] px-4 py-4 text-[#fff9ec] sm:px-6">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-[#d8a83e]" />
              <h2 className="font-serif text-[22px] font-bold">Your Cart</h2>
              {count > 0 && (
                <span className="rounded-full bg-[#d8a83e] px-2 py-0.5 text-[11px] font-semibold text-[#2b1710]">
                  {count}
                </span>
              )}
            </div>
            <button
              type="button"
              aria-label="Close cart"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8a83e]/40 text-[#fff9ec] transition-colors hover:bg-white/10 hover:text-[#d8a83e]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 px-4 py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5e7c0] text-[#5a0905]">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-[26px] text-[#2b1710]">Your cart is empty</h3>
                  <p className="text-[14px] leading-relaxed text-[#6d5142]">
                    Add products to your cart and come back here to place a combined order.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onContinueShopping}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#5a0905] px-5 py-2.5 text-[14px] font-semibold text-[#fff9ec] transition-transform hover:scale-[1.01]"
                >
                  Continue Shopping
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4 pb-2">
                {items.map((item) => {
                  const subtotal = (Number(item.price) || 0) * (Number(item.quantity) || 0);

                  return (
                    <div key={`${item.id}-${item.weight}`} className="rounded-xl border border-[#e8dbc4] bg-[#fffdf9] p-3 shadow-sm">
                      <div className="flex gap-3">
                        <img
                          src={item.image || '/images/logo-cook.png'}
                          alt={item.name}
                          className="h-20 w-20 rounded-lg object-cover border border-[#e8dbc4] bg-[#f8f2e6]"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-serif text-[17px] text-[#2b1710]">{item.name}</h3>
                              {item.kannadaName && (
                                <p className="font-['Noto_Serif_Kannada',serif] text-[13px] text-[#6d5142]">{item.kannadaName}</p>
                              )}
                              <p className="mt-1 text-[12px] text-[#6d5142]">{item.weight}</p>
                            </div>
                            <button
                              type="button"
                              aria-label={`Remove ${item.name}`}
                              onClick={() => onRemove(item.id, item.weight)}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#5a0905] transition-colors hover:bg-[#f7e7d6]"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-3">
                            <div className="flex items-center rounded-full border border-[#d8a83e]/40 bg-[#f7f0df]">
                              <button
                                type="button"
                                aria-label={`Decrease quantity for ${item.name}`}
                                onClick={() => onUpdateQuantity(item.id, item.weight, -1)}
                                className="inline-flex h-9 w-9 items-center justify-center text-[#5a0905] transition-colors hover:bg-[#e8dbc4]"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="min-w-[34px] text-center text-[14px] font-semibold text-[#2b1710]">{item.quantity}</span>
                              <button
                                type="button"
                                aria-label={`Increase quantity for ${item.name}`}
                                onClick={() => onUpdateQuantity(item.id, item.weight, 1)}
                                className="inline-flex h-9 w-9 items-center justify-center text-[#5a0905] transition-colors hover:bg-[#e8dbc4]"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="text-right">
                              <div className="text-[12px] text-[#6d5142]">Price</div>
                              <div className="font-serif text-[18px] font-bold text-[#5a0905]">
                                {formatCurrency(Number(item.price) || 0)}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between text-[12px] text-[#6d5142]">
                            <span>Subtotal</span>
                            <span className="font-semibold text-[#2b1710]">{formatCurrency(subtotal)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-t border-[#e8dbc4] bg-[#fffdf9] px-4 py-4 sm:px-6">
            {items.length > 0 ? (
              <>
                <div className="mb-3 flex items-center justify-between text-[15px] text-[#6d5142]">
                  <span>Items</span>
                  <span>{count}</span>
                </div>
                <div className="mb-4 flex items-center justify-between font-serif text-[22px] text-[#2b1710]">
                  <span>Total</span>
                  <span className="text-[#5a0905]">{formatCurrency(total)}</span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={onClear}
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-[#d8a83e]/40 bg-white px-4 py-2 text-[13px] font-semibold text-[#5a0905] transition-colors hover:bg-[#f7e7d6]"
                  >
                    Clear Cart
                  </button>
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#d8a83e] px-4 py-2 text-[14px] font-semibold text-[#2b1710] shadow-md transition-transform hover:scale-[1.01]"
                  >
                    Buy / Place Order
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
