
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star } from 'lucide-react';

const services = [
  {
    name: 'Eyebrow Sculpting',
    description: 'Precision shaping and sculpting to enhance your natural brow shape.',
    duration: '45 minutes',
    price: '$65',
    features: ['Consultation', 'Shaping', 'Tweezing', 'Aftercare advice'],
    popular: true
  },
  {
    name: 'Eyebrow Tinting',
    description: 'Semi-permanent coloring to define and enhance your brow color.',
    duration: '30 minutes',
    price: '$35',
    features: ['Color matching', 'Professional tint', 'Styling', 'Touch-up guide']
  },
  {
    name: 'Full Face Wax',
    description: 'Complete facial hair removal for smooth, flawless skin.',
    duration: '60 minutes',
    price: '$85',
    features: ['Upper lip', 'Chin', 'Cheeks', 'Soothing treatment']
  },
  {
    name: 'Brow & Tint Combo',
    description: 'Complete brow transformation with shaping and tinting.',
    duration: '60 minutes',
    price: '$85',
    features: ['Full sculpting', 'Professional tint', 'Styling', 'Maintenance tips'],
    featured: true
  }
];

export const ServiceCards = () => {
  return (
    <section className="py-16 px-4 lg:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-oasis-hover mb-12 max-w-2xl mx-auto">
          Discover our range of professional treatments designed to enhance your natural beauty
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.name}
              className={`relative border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                service.featured ? 'border-oasis-taupe' : 'border-oasis-taupe/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-oasis-taupe text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-playfair text-oasis-espresso">{service.name}</CardTitle>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-oasis-hover">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </span>
                  <span className="text-xl font-semibold text-oasis-espresso">{service.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-oasis-hover leading-relaxed">{service.description}</p>
                
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-oasis-espresso flex items-center">
                      <div className="w-1.5 h-1.5 bg-oasis-taupe rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-oasis-espresso hover:bg-oasis-hover text-white text-sm"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
