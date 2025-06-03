
import React from 'react';
import { Star, Award, Shield, Users } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      title: "5-Star Rated",
      subtitle: "by 200+ clients"
    },
    {
      icon: Award,
      title: "Certified Expert",
      subtitle: "Professional training"
    },
    {
      icon: Shield,
      title: "Hygiene Certified",
      subtitle: "Strict safety protocols"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      subtitle: "Since 2020"
    }
  ];

  return (
    <section className="py-12 px-4 lg:px-6 bg-white border-b border-oasis-taupe/10">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-oasis-taupe to-oasis-clay rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300">
                <badge.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-oasis-espresso mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-oasis-hover">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
