
import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Vean is a true artist! My brows have never looked better. The attention to detail is incredible.",
    author: "Sarah M.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b691?auto=format&fit=crop&w=150&q=80",
    treatment: "Eyebrow Sculpting"
  },
  {
    quote: "Professional, gentle, and always a relaxing experience. I wouldn't go anywhere else for my treatments.",
    author: "Emily R.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    treatment: "Full Face Wax"
  },
  {
    quote: "Vean's expertise is unmatched. My brows have never looked better and the whole experience is so calming!",
    author: "Sarah T.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    treatment: "Brow & Tint Combo"
  },
  {
    quote: "A truly relaxing, professional environment. The results speak for themselves. Highly recommend!",
    author: "Olivia P.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    treatment: "Eyebrow Tinting"
  }
];

export const InteractiveTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-oasis-contrast via-oasis-base to-oasis-contrast px-4 lg:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-oasis-taupe/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-oasis-clay/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-oasis-hover max-w-2xl mx-auto">
            Discover why our clients love their experience at Oasis Aesthetics
          </p>
        </div>
        
        {/* Main testimonial display */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-oasis-taupe/20 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-oasis-taupe to-oasis-clay"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Client photo */}
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-oasis-taupe/30 shadow-lg">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-oasis-clay p-2 rounded-full shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-oasis-taupe fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg lg:text-xl text-oasis-espresso leading-relaxed mb-4 italic font-medium">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
                <cite className="text-lg text-oasis-hover font-semibold not-italic">
                  — {testimonials[activeTestimonial].author}
                </cite>
                <span className="text-sm text-oasis-taupe bg-oasis-taupe/10 px-3 py-1 rounded-full inline-block mt-2 lg:mt-0">
                  {testimonials[activeTestimonial].treatment}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial navigation */}
        <div className="flex justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`group transition-all duration-300 ${
                index === activeTestimonial ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'border-oasis-clay shadow-lg' 
                  : 'border-oasis-taupe/30 hover:border-oasis-taupe/60'
              }`}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
