"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { addToCart } from "@/lib/cart";

type ProductDetail = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  old_price: number | null;
  badge: string | null;
  image: string;
  description: string | null;
};

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params?.slug) {
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

    fetch(`${apiUrl}/api/products/${params.slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((payload) => {
        setProduct(payload.data);
        setError("");
      })
      .catch(() => {
        setError("This product could not be loaded right now.");
      })
      .finally(() => setLoading(false));
  }, [params?.slug]);

  if (loading) {
    return <main className="product-detail-state">Loading product...</main>;
  }

  if (error || !product) {
    return (
      <main className="product-detail-state">
        <p>{error || "Product not found."}</p>
        <Link href="/">← Go back home</Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <main className="product-page-shell">
      <header className="mini-header">
        <Link href="/">← Continue shopping</Link>
        <Link href="/cart">Cart</Link>
      </header>

      <section className="product-detail-layout">
        <div className="product-gallery">
          <div
            className="product-detail-image"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
        </div>

        <div className="product-detail-info">
          <span className="product-detail-badge">{product.badge ?? "New arrival"}</span>
          <h1>{product.name}</h1>
          <div className="detail-pricing">
            <strong>₹{Number(product.price).toLocaleString("en-IN")}</strong>
            {product.old_price ? <del>₹{Number(product.old_price).toLocaleString("en-IN")}</del> : null}
          </div>
          <p className="product-detail-copy">{product.description ?? "Crafted for everyday comfort and long-lasting style."}</p>

          <div className="color-row" aria-label="Available colors">
            <span style={{ backgroundColor: "#b18a5d" }} />
            <span style={{ backgroundColor: "#5c5b43" }} />
            <span style={{ backgroundColor: "#3a3a3a" }} />
          </div>

          <div className="product-actions">
            <button className="primary-btn" type="button" onClick={handleAddToCart}>
              Add to cart
            </button>
            <Link className="secondary-btn product-link-btn" href="/cart">
              View cart
            </Link>
          </div>

          <ul className="detail-features">
            <li>Premium comfort cushioning</li>
            <li>Weather-ready everyday finish</li>
            <li>Built for long walks and outdoor days</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
