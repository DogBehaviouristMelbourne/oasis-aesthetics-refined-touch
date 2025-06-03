
import React from 'react';
import { Clock, Star } from 'lucide-react';

const transformations = [
  {
    title: "Sarah's Brow Journey",
    duration: "3 months",
    description: "From sparse brows to perfectly sculpted arches",
    beforeImage: "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&q=80",
    testimonial: "I can't believe the difference! My confidence has completely transformed.",
    rating: 5
  },
  {
    title: "Emma's Confidence Boost",
    duration: "6 weeks",
    description: "Professional eyebrow shaping for a natural, polished look",
    beforeImage: "https://images.unsplash.com/photo-1594824047049-fbd5187f0cfb?auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1616394157316-4e7b0e6a8f9c?auto=format&fit=crop&w=400&q=80",
    testimonial: "The results exceeded my expectations. Vean truly understands face shapes.",
    rating: 5
  }
];

export const TransformationStories = () => {
  return (
    <section className="py-20 px-4 lg:px-6 bg-gradient-to-r from-oasis-base via-oasis-contrast to-oasis-base relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-oasis-taupe/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-oasis-clay/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4">
            Transformation Stories
          </h3>
          <p className="text-lg text-oasis-hover max-w-2xl mx-auto">
            See the incredible transformations our clients have experienced
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {transformations.map((story, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-oasis-taupe/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-oasis-taupe to-oasis-clay"></div>
              
              {/* Before/After Images */}
              <div className="relative mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img 
                        src={story.beforeImage} 
                        alt="Before transformation"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-oasis-espresso">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img 
                        src={story.afterImage} 
                        alt="After transformation"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-oasis-clay/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Timeline indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-oasis-taupe rounded-full p-2 shadow-lg">
                  <Clock className="w-4 h-4 text-oasis-taupe" />
                </div>
              </div>

              {/* Story content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-playfair font-semibold text-oasis-espresso">
                    {story.title}
                  </h4>
                  <span className="text-sm text-oasis-taupe bg-oasis-taupe/10 px-3 py-1 rounded-full">
                    {story.duration}
                  </span>
                </div>

                <p className="text-oasis-hover leading-relaxed">
                  {story.description}
                </p>

                <div className="border-l-4 border-oasis-clay pl-4 py-2">
                  <div className="flex mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-oasis-taupe fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-oasis-espresso italic">
                    "{story.testimonial}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
