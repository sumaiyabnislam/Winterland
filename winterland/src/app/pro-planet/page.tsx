import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pro Planet | Woodland",
  description: "A community working toward a better place to live for everyone.",
};

export default function ProPlanetPage() {
  return (
    <main className="proplanet-page">
      <header className="proplanet-page-header">
        <Link className="proplanet-home-link" href="/">← Back to Woodland</Link>
      </header>
      <section className="proplanet-hero">
        <div className="proplanet-hero-copy">
          <h1>Pro Planet</h1>
          <p>A community committed to making our planet a better place to live in. Our ultimate goal is a future where people and nature can thrive together.</p>
        </div>
      </section>
      <section className="proplanet-story">
        <h2>Small steps. A lighter footprint.</h2>
        <p>Pro Planet brings people together to care for the places we explore. We believe that thoughtful choices, shared responsibility, and action in our communities can help protect the outdoors for generations to come.</p>
      </section>
    </main>
  );
}