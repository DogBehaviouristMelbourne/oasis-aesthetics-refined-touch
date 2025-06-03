
import React, { useState, useEffect } from 'react';
import { BookingSystem } from '../components/BookingSystem';
import { ServiceCards } from '../components/ServiceCards';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { ParallaxHero } from '../components/ParallaxHero';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { InteractiveTestimonials } from '../components/InteractiveTestimonials';
import { TransformationStories } from '../components/TransformationStories';
import { TrustBadges } from '../components/TrustBadges';
import { Header } from '../components/Header';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add meta tags and schema markup
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert brow sculpting & waxing with a personal touch in Melbourne. Experience gentle, precise treatments in a relaxing, spa-like environment.');
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'brow sculpting, eyebrow waxing, Melbourne, Oasis Aesthetics, beauty treatments, spa';
    document.head.appendChild(metaKeywords);

    // Add Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Oasis Aesthetics - Empowering Your Natural Beauty';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Expert brow sculpting & waxing with a personal touch in Melbourne';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    // Add LocalBusiness schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Oasis Aesthetics",
      "url": window.location.origin,
      "description": "Expert brow sculpting & waxing with a personal touch in Melbourne. Experience gentle, precise treatments in a relaxing, spa-like environment.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressCountry": "AU"
      },
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png"
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    // Add Google Analytics (placeholder)
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);

    const gaConfig = document.createElement('script');
    gaConfig.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(gaConfig);

    return () => {
      // Cleanup meta tags on unmount
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
      document.head.removeChild(schemaScript);
      document.head.removeChild(gaScript);
      document.head.removeChild(gaConfig);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleNav();
    }
  };

  return (
    <div className="min-h-screen bg-oasis-base font-inter relative overflow-x-hidden">
      {/* Organic background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-oasis-taupe/10 to-oasis-clay/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-oasis-warm-taupe/10 to-oasis-contrast/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-oasis-clay/5 to-oasis-taupe/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <Header 
        isNavOpen={isNavOpen} 
        toggleNav={toggleNav} 
        handleKeyDown={handleKeyDown} 
        scrollY={scrollY} 
      />

      <main>
        {/* Parallax Hero Section */}
        <ParallaxHero scrollY={scrollY} />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Service Cards */}
        <div id="services" className="scroll-mt-20">
          <ServiceCards />
        </div>

        {/* Transformation Stories */}
        <TransformationStories />

        {/* Gallery */}
        <Gallery />

        {/* Booking System */}
        <div id="booking" className="scroll-mt-20">
          <BookingSystem />
        </div>

        {/* Interactive Testimonials */}
        <InteractiveTestimonials />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form */}
        <ContactForm />

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
