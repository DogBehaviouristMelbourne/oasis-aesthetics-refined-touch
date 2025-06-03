import React from 'react';
import { Home, CalendarCheck, UserCheck, ShieldCheck } from 'lucide-react';

export const TrustBadges = () => {
  // All badges are highlighted
  const badges = [
    {
      icon: Home,
      title: 'Locally Owned',
      subtitle: 'Melbourne boutique studio',
    },
    {
      icon: CalendarCheck,
      title: 'Flexible Booking',
      subtitle: 'Easy online scheduling',
    },
    {
      icon: UserCheck,
      title: 'Expert Brow Artist',
      subtitle: 'Certified & highly trained',
    },
    {
      icon: ShieldCheck,
      title: 'Premium Hygiene',
      subtitle: 'Strict safety protocols',
    },
  ];

  return (
    <section className="py-12 px-4 lg:px-6 bg-white border-b border-oasis-taupe/10">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={
                'flex flex-col items-center text-center p-4 group hover:scale-105 transition-all duration-300 rounded-xl ring-2 ring-oasis-taupe/80 shadow-lg bg-oasis-contrast/60'
              }
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
