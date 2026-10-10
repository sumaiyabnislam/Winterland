"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = ["Men", "Women", "Woods", "Sale", "Featured", "Track Order", "Khiladi Edition", "Ambassador", "Gift Cards"];

const promotions = [
  { offer: "FIRST ORDER ONLY", deal: "SALE · 10% OFF", code: "USE CODE WELCOME10WDL" },
  { offer: "FIRST ORDER ONLY", deal: "SALE · 5% OFF", code: "USE CODE WELCOME5WDL" },
];

const heroSlides = [
  {
    eyebrow: "KHATRON KE KHILADI × WOODLAND",
    title: "DARE MORE.\nEXPLORE MORE.",
    action: "Shop the collection",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90",
    position: "center 52%",
  },
  {
    eyebrow: "MADE FOR THE OUTSIDE",
    title: "FIND YOUR\nOWN WAY OUT.",
    action: "Explore the outdoors",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2200&q=90",
    position: "center 55%",
  },
  {
    eyebrow: "NEW SEASON. NEW TERRAIN.",
    title: "GO BEYOND\nTHE EVERYDAY.",
    action: "Discover new arrivals",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90",
    position: "center 42%",
  },
];

type ProductCard = {
  name: string;
  price: string;
  oldPrice: string;
  badge: string;
  image: string;
  colors: string[];
  slug?: string;
};

const productCards: ProductCard[] = [
  { name: "Camel casual slip-on shoes for men", price: "₹4,995", oldPrice: "", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85", colors: ["#b18a5d", "#5c5b43"] },
  { name: "Camel boots for men", price: "₹5,996", oldPrice: "₹7,995", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85", colors: ["#9b6036", "#545653"] },
  { name: "Camel nubuck outdoor sandals", price: "₹4,995", oldPrice: "", badge: "EXCLUSIVE", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85", colors: ["#9b7b45", "#64705d", "#353535"] },
  { name: "Grey sneakers for men", price: "₹5,246", oldPrice: "₹6,995", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85", colors: ["#424641"] },
  { name: "Snaype sandal for men", price: "₹4,995", oldPrice: "", badge: "EXCLUSIVE", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85", colors: ["#292a27", "#aa7938", "#725644"] },
  { name: "Leather trail shoes in tan", price: "₹4,295", oldPrice: "", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", colors: ["#ab7949", "#313437"] },
  { name: "Rugged ankle boots", price: "₹6,495", oldPrice: "₹7,995", badge: "EXCLUSIVE", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85", colors: ["#87613e", "#3e4544"] },
  { name: "Everyday outdoor sneakers", price: "₹3,795", oldPrice: "", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85", colors: ["#565950", "#b38e65"] },
];

const bestsellerCards = [
  { name: "Woodland CAMEL casual shoes", price: "₹3,117", oldPrice: "₹5,195", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", colors: ["#c6a268", "#65513e", "#343a3d", "#695c46"] },
  { name: "Cashew Brown Boots for men", price: "₹2,850", oldPrice: "₹6,195", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85", colors: ["#99613c", "#4d4938"] },
  { name: "Woodland CAMEL casual boots", price: "₹2,647", oldPrice: "₹5,295", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85", colors: ["#9b7051", "#39454b"] },
  { name: "Woodland Men's Classic Tan shoes", price: "₹3,006", oldPrice: "₹4,295", badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=85", colors: ["#aa7954", "#272d2d"] },
  { name: "Khaki casual leather shoes", price: "₹2,347", oldPrice: "₹4,695", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85", colors: ["#786342", "#60533d", "#c2944f", "#322c25"] },
  { name: "Classic leather walking shoes", price: "₹3,495", oldPrice: "₹5,495", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85", colors: ["#9b7051", "#303333"] },
  { name: "Lightweight trail sneakers", price: "₹3,299", oldPrice: "₹4,995", badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85", colors: ["#53564b", "#b39167"] },
  { name: "Outdoor leather sandals", price: "₹2,795", oldPrice: "₹3,995", badge: "GRAND KHILADI SALE", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85", colors: ["#55493c", "#a87943"] },
];

const newArrivalCards = [
  { name: "New Terrain hiking boots", price: "₹6,495", oldPrice: "", badge: "NEW ARRIVAL", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85", colors: ["#9b6036", "#545653"] },
  { name: "City-to-trail sneakers", price: "₹4,295", oldPrice: "", badge: "NEW ARRIVAL", image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85", colors: ["#424641", "#b18a5d"] },
  { name: "Everyday leather slip-ons", price: "₹3,995", oldPrice: "", badge: "NEW ARRIVAL", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85", colors: ["#b18a5d", "#5c5b43"] },
  { name: "Trail-ready sandals", price: "₹3,495", oldPrice: "", badge: "JUST IN", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85", colors: ["#9b7b45", "#64705d"] },
  { name: "Ridge leather ankle boots", price: "₹6,995", oldPrice: "", badge: "NEW ARRIVAL", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85", colors: ["#9b7051", "#39454b"] },
  { name: "Weekend explorer shoes", price: "₹4,595", oldPrice: "", badge: "JUST IN", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85", colors: ["#292a27", "#aa7938"] },
  { name: "Light trek low-tops", price: "₹3,795", oldPrice: "", badge: "NEW ARRIVAL", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85", colors: ["#81705c", "#313b3c"] },
  { name: "All-day comfort sneakers", price: "₹4,195", oldPrice: "", badge: "JUST IN", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", colors: ["#b23a34", "#34383b"] },
];

const categoryTiles = [
  {
    title: "Boots",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85",
    position: "center",
    className: "category-feature",
  },
  {
    title: "Men's Apparel",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    position: "center 35%",
    className: "",
  },
  {
    title: "Women's Apparel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    position: "center 35%",
    className: "",
  },
  {
    title: "Sneakers",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
    position: "center",
    className: "",
  },
  {
    title: "Backpacks",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    position: "center",
    className: "",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState<ProductCard[]>(productCards);
  const exclusiveTrack = useRef<HTMLDivElement>(null);
  const bestsellerTrack = useRef<HTMLDivElement>(null);
  const arrivalsTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

    fetch(`${apiUrl}/api/products`)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("API unavailable")))
      .then((payload) => {
        const list = Array.isArray(payload?.data) ? payload.data : [];

        if (list.length > 0) {
          setFeaturedProducts(list.map((product: {
            name: string;
            slug?: string;
            price: number;
            old_price?: number | null;
            badge?: string | null;
            image: string;
          }) => ({
            name: product.name,
            slug: product.slug,
            price: `₹${Number(product.price).toLocaleString("en-IN")}`,
            oldPrice: product.old_price ? `₹${Number(product.old_price).toLocaleString("en-IN")}` : "",
            badge: product.badge ?? "NEW ARRIVAL",
            image: product.image,
            colors: ["#b18a5d", "#5c5b43", "#353535"],
          })));
        }
      })
      .catch(() => {
        setFeaturedProducts(productCards);
      });
  }, []);

  function scrollProducts(track: HTMLDivElement | null, direction: number) {
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(".product-card");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 12;
    const scrollDistance = (firstCard?.getBoundingClientRect().width ?? track.clientWidth) + gap;

    track.scrollBy({ left: direction * scrollDistance, behavior: "smooth" });
  }

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(carouselTimer);
  }, []);

  return (
    <main className="woodland-page">
      <div className="top-strip">
        <div className="promo-track" aria-label="First order sale offers">
          {[0, 1].map((copy) => (
            <div className="promo-group" key={copy} aria-hidden={copy === 1}>
              {promotions.map((promotion) => (
                <span className="promo-item" key={`${copy}-${promotion.code}`}>
                  <strong>{promotion.offer}</strong>
                  <span>{promotion.deal}</span>
                  <span className="promo-code">{promotion.code}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className="main-header">
        <div className="brand-lockup">
          <a href="#top" className="brand-mark" aria-label="Woodland home">W</a>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={item === "Track Order" ? "#products" : "#categories"} className={`nav-link${item === "Sale" ? " sale-nav-link" : ""}`}>{item}</a>
          ))}
        </nav>

        <div className="header-icons" aria-label="Account actions">
          <button type="button" aria-label="Search">⌕</button>
          <button type="button" aria-label="Wishlist">♡</button>
          <button type="button" aria-label="Account">♙</button>
          <Link href="/cart" aria-label="Shopping bag">♧</Link>
        </div>
      </header>

      <section className="hero-banner" aria-label="Featured promotion">
        <div className="hero-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {heroSlides.map((slide) => (
            <article className="hero-slide" key={slide.eyebrow}>
              <div className="hero-slide-image" style={{ backgroundImage: `url("${slide.image}")`, backgroundPosition: slide.position }} />
              <div className="hero-slide-shade" />
              <div className="hero-content">
                <span className="hero-badge">{slide.eyebrow}</span>
                <h1>{slide.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
                <a href="#products" className="primary-btn">{slide.action}</a>
              </div>
            </article>
          ))}
        </div>
        <div className="hero-pagination" aria-label="Choose featured image">
          {heroSlides.map((slide, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={activeSlide === index ? "active" : ""}
              key={slide.eyebrow}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </section>

      <section className="stats-row" aria-label="Shop highlights">
        <div><strong>10,000+</strong><span>happy explorers</span></div>
        <div><strong>120+</strong><span>new arrivals</span></div>
        <div><strong>4.9/5</strong><span>customer rating</span></div>
        <div><strong>Free</strong><span>delivery above ₹1999</span></div>
      </section>

      <section className="category-block" id="categories">
        <div className="section-header">
          <h2 className="category-heading">Top Categories</h2>
        </div>

        <div className="category-grid">
          {categoryTiles.map((tile) => (
            <a aria-label={`Shop ${tile.title}`} className={`category-tile ${tile.className}`} href="#products" key={tile.title}>
              <div className="category-photo" style={{ backgroundImage: `url("${tile.image}")`, backgroundPosition: tile.position }} />
              <div className="tile-content">
                <span>{tile.title}</span>
                <small>Shop now</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="product-block exclusive-section" id="products">
        <div className="section-header exclusive-heading">
          <h2 className="category-heading">Our Exclusives</h2>
          <a className="section-see-more" href="#campaign">See more <span aria-hidden="true">›</span></a>
        </div>

        <div className="carousel-shell">
          <button aria-label="Scroll exclusive products left" className="carousel-arrow carousel-arrow-left" onClick={() => scrollProducts(exclusiveTrack.current, -1)} type="button">‹</button>
          <div aria-label="Exclusive products" className="product-grid exclusive-grid" ref={exclusiveTrack}>
            {featuredProducts.map((product) => {
              const slug = product.slug ?? product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

              return (
                <Link className="product-card-link" href={`/product/${slug}`} key={product.name}>
                  <article className="product-card">
                    <div className="exclusive-product-image" style={{ backgroundImage: `url('${product.image}')` }}>
                      <span className={`exclusive-badge${product.badge === "EXCLUSIVE" ? " exclusive-badge-plain" : ""}`}>{product.badge}</span>
                    </div>
                    <div aria-label="Available colours" className="product-swatches">
                      {product.colors.map((color) => <span key={color} style={{ backgroundColor: color }} />)}
                    </div>
                    <div className="product-meta exclusive-product-meta">
                      <h3>{product.name}</h3>
                      <div className="exclusive-prices">
                        <strong>{product.price}</strong>
                        {product.oldPrice && <del>{product.oldPrice}</del>}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
          <button aria-label="Scroll exclusive products right" className="carousel-arrow carousel-arrow-right" onClick={() => scrollProducts(exclusiveTrack.current, 1)} type="button">›</button>
        </div>
      </section>

      <section aria-label="Woodland outdoor campaign" className="campaign-banner" id="campaign">
        <div className="campaign-image" />
        <div className="campaign-shade" />
        <div className="campaign-copy">
          <span>WOODLAND · OUT THERE TOGETHER</span>
          <a href="#categories">Explore the collection <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="bestsellers-section" id="bestsellers">
        <div className="bestsellers-inner">
          <div className="section-header bestseller-heading">
            <h2 className="category-heading">Bestsellers</h2>
            <a className="section-see-more" href="#bestseller-campaign">See more <span aria-hidden="true">›</span></a>
          </div>
          <div className="carousel-shell bestseller-carousel-shell">
            <button aria-label="Scroll bestsellers left" className="carousel-arrow carousel-arrow-left" onClick={() => scrollProducts(bestsellerTrack.current, -1)} type="button">‹</button>
            <div aria-label="Bestselling products" className="product-grid exclusive-grid bestseller-grid" id="bestseller-cards" ref={bestsellerTrack}>
              {bestsellerCards.map((product) => (
                <article key={product.name} className="product-card">
                  <div className="exclusive-product-image" style={{ backgroundImage: `url('${product.image}')` }}>
                    <span className={`exclusive-badge${product.badge === "BESTSELLER" ? " exclusive-badge-plain" : ""}`}>{product.badge}</span>
                  </div>
                  <div aria-label="Available colours" className="product-swatches">
                    {product.colors.map((color, index) => <span aria-label={`Colour ${index + 1}`} key={`${product.name}-${color}`} style={{ backgroundColor: color }} />)}
                  </div>
                  <div className="product-meta exclusive-product-meta">
                    <h3>{product.name}</h3>
                    <div className="exclusive-prices bestseller-prices">
                      <strong>{product.price}</strong>
                      {product.oldPrice && <del>{product.oldPrice}</del>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button aria-label="Scroll bestsellers right" className="carousel-arrow carousel-arrow-right" onClick={() => scrollProducts(bestsellerTrack.current, 1)} type="button">›</button>
          </div>
        </div>
      </section>

      <section aria-label="Explore Woodland's latest collection" className="campaign-banner bestseller-campaign" id="bestseller-campaign">
        <div className="campaign-image bestseller-campaign-image" />
        <div className="campaign-shade" />
        <div className="campaign-copy">
          <span>NEW SEASON · NEW STORIES</span>
          <a href="#categories">Explore what&apos;s new <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="product-block exclusive-section new-arrivals-section" id="new-arrivals">
        <div className="section-header exclusive-heading">
          <h2 className="category-heading">New Arrivals</h2>
          <a className="section-see-more" href="#new-arrival-cards">See more <span aria-hidden="true">›</span></a>
        </div>
        <div className="carousel-shell">
          <button aria-label="Scroll new arrivals left" className="carousel-arrow carousel-arrow-left" onClick={() => scrollProducts(arrivalsTrack.current, -1)} type="button">‹</button>
          <div aria-label="New arrivals" className="product-grid exclusive-grid" id="new-arrival-cards" ref={arrivalsTrack}>
            {newArrivalCards.map((product) => (
              <article key={product.name} className="product-card">
                <div className="exclusive-product-image" style={{ backgroundImage: `url('${product.image}')` }}>
                  <span className="exclusive-badge">{product.badge}</span>
                </div>
                <div aria-label="Available colours" className="product-swatches">
                  {product.colors.map((color, index) => <span aria-label={`Colour ${index + 1}`} key={`${product.name}-${color}`} style={{ backgroundColor: color }} />)}
                </div>
                <div className="product-meta exclusive-product-meta">
                  <h3>{product.name}</h3>
                  <div className="exclusive-prices">
                    <strong>{product.price}</strong>
                    {product.oldPrice && <del>{product.oldPrice}</del>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button aria-label="Scroll new arrivals right" className="carousel-arrow carousel-arrow-right" onClick={() => scrollProducts(arrivalsTrack.current, 1)} type="button">›</button>
        </div>
      </section>

      <section aria-label="Pro Planet" className="proplanet-section">
        <a aria-label="Learn about Pro Planet" className="proplanet-banner" href="/pro-planet">
          <div className="proplanet-image" />
          <div className="proplanet-shade" />
          <div className="proplanet-copy">
            <h2>Pro Planet</h2>
            <p>Proplanet is a community that is committed to make our planet a better place to live in. Our ultimate goal...</p>
          </div>
        </a>
      </section>

      <footer className="woodland-footer">
        <div className="footer-social-row">
          <nav aria-label="Social media" className="footer-social-icons">
            <a aria-label="Instagram" className="social-instagram" href="https://www.instagram.com/woodlandexploremore/" rel="noreferrer" target="_blank">ig</a>
            <a aria-label="Facebook" className="social-facebook" href="https://www.facebook.com/woodlandadventure" rel="noreferrer" target="_blank">f</a>
            <a aria-label="YouTube" className="social-youtube" href="https://www.youtube.com/@woodland" rel="noreferrer" target="_blank">▶</a>
            <a aria-label="X" className="social-x" href="https://twitter.com/Woodland" rel="noreferrer" target="_blank">X</a>
            <a aria-label="LinkedIn" className="social-linkedin" href="https://www.linkedin.com/company/woodland/" rel="noreferrer" target="_blank">in</a>
          </nav>
          <div className="app-store-links">
            <a aria-label="Get it on Google Play" href="https://play.google.com/store/apps/details?id=com.woodlandworldwide.app" rel="noreferrer" target="_blank"><span>▶</span><small>GET IT ON<strong>Google Play</strong></small></a>
            <a aria-label="Download on the App Store" href="https://apps.apple.com/in/app/woodland/id6529542414" rel="noreferrer" target="_blank"><span>●</span><small>Download on the<strong>App Store</strong></small></a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <nav aria-label="Footer links" className="footer-site-links">
            <a href="/about">About Us</a>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#refund">Refund Policy</a>
            <a href="#shipping">Shipping Policy</a>
            <a href="#track-order">Track Order</a>
            <a href="#outlet">Outlet</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact Us</a>
            <a href="#compliance">Regulatory Compliance</a>
            <a href="#ambassador">Ambassador</a>
          </nav>
          <p className="footer-copyright">Copyright 2026, Woodland (Aero Club)<br />Private Limited</p>
        </div>
      </footer>
    </main>
  );
}
