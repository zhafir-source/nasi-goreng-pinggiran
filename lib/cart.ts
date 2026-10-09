import type { MenuItem } from "@/data/menu";

export type CartItem = MenuItem & {
  quantity: number;
};

export function getCartTotal(cart: CartItem[]) {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

export function getCartCount(cart: CartItem[]) {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );
}