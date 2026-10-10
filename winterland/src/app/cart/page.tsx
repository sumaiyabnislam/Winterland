"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getCart, removeFromCart, updateQuantity, type CartItem } from "@/lib/cart";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(() => getCart());

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const refreshCart = () => setItems(getCart());

  return (
    <main className="cart-page-shell">
      <header className="mini-header">
        <Link href="/">← Back to shop</Link>
      </header>

      <section className="cart-page">
        <div className="cart-header-row">
          <h1>Your cart</h1>
          <span>{items.length} item{items.length === 1 ? "" : "s"}</span>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Start with a pair that matches your next adventure.</p>
            <Link className="primary-btn cart-empty-btn" href="/">Shop now</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.slug}>
                  <div
                    className="cart-item-image"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />

                  <div className="cart-item-copy">
                    <div className="cart-item-topline">
                      <h2>{item.name}</h2>
                      <button type="button" onClick={() => { removeFromCart(item.slug); refreshCart(); }}>
                        Remove
                      </button>
                    </div>

                    <div className="cart-item-controls">
                      <div className="quantity-box">
                        <button
                          type="button"
                          aria-label={`Decrease quantity for ${item.name}`}
                          onClick={() => {
                            const quantity = item.quantity - 1;
                            updateQuantity(item.slug, quantity);
                            refreshCart();
                          }}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity for ${item.name}`}
                          onClick={() => {
                            updateQuantity(item.slug, item.quantity + 1);
                            refreshCart();
                          }}
                        >
                          +
                        </button>
                      </div>

                      <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="summary-box">
              <h3>Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>
              <button className="primary-btn summary-checkout-btn" type="button">
                Proceed to checkout
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
