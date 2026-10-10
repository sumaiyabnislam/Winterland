export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const CART_KEY = "winterland-cart";

function readCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCart(cart: CartItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart(): CartItem[] {
  return readCart();
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const cart = readCart();
  const existing = cart.find((entry) => entry.slug === item.slug);

  const nextCart = existing
    ? cart.map((entry) =>
        entry.slug === item.slug
          ? { ...entry, quantity: entry.quantity + 1 }
          : entry,
      )
    : [...cart, { ...item, quantity: 1 }];

  writeCart(nextCart);
  return nextCart;
}

export function updateQuantity(slug: string, quantity: number) {
  const cart = readCart();
  const nextCart = cart
    .map((item) => ({ ...item, quantity: item.slug === slug ? Math.max(quantity, 0) : item.quantity }))
    .filter((item) => item.quantity > 0);

  writeCart(nextCart);
  return nextCart;
}

export function removeFromCart(slug: string) {
  const nextCart = readCart().filter((item) => item.slug !== slug);
  writeCart(nextCart);
  return nextCart;
}

export function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}
