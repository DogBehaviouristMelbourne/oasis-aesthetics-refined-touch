import React from "react";
import "../styles/hero.css";

export const Hero: React.FC = () => (
  <section className="hero relative" aria-label="Hero section">
    <picture>
      <source media="(min-width: 768px)" srcSet="/hero-desktop.jpg" />
      <img src="/hero-mobile.jpg" alt="Precision brow sculpting" className="hero-image" width="800" height="600" />
    </picture>
    <div className="hero-content">
      <h1>Enhance Your Natural Beauty</h1>
      <p className="subhead">Precision Brow Sculpting & Waxing</p>
      <p className="body">Expert treatments in a tranquil boutique studio. Soft, gentle, and tailored for Melbourne’s best brows.</p>
      <div className="hero-cta">
        <button className="btn-primary">Book Now</button>
        <button className="btn-secondary">View Services</button>
      </div>
    </div>
  </section>
);
