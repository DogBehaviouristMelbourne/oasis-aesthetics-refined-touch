import React from 'react';

export const WhyChooseUs = () => {
  const benefits = [
    { title: "Personal consultations", icon: "👥", delay: "0s" },
    { title: "Premium products", icon: "✨", delay: "0.1s" },
    { title: "Spa atmosphere", icon: "🌿", delay: "0.2s" },
    { title: "Strict hygiene", icon: "🛡️", delay: "0.3s" },
    { title: "Custom treatments", icon: "💎", delay: "0.4s" },
    { title: "Expert techniques", icon: "🎓", delay: "0.5s" }
  ];

  return (
    <section className="py-20 px-4 lg:px-6 bg-gradient-to-br from-oasis-base via-oasis-contrast to-oasis-warm-taupe/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-oasis-taupe/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-oasis-clay/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4 animate-fade-in">
            About
          </h3>
          <p className="text-lg text-oasis-hover max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Unleash your confidence with perfectly sculpted brows and smooth, flawless skin! Book your eyebrow and waxing session today for a polished, beautiful look.<br /><br />
            Can’t find a time that suits your schedule? Don’t hesitate to reach out! Message me, and we’ll arrange a time that’s perfect for you. 🌸✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-oasis-taupe/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in relative overflow-hidden"
              style={{animationDelay: item.delay}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-oasis-taupe/10 to-oasis-clay/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-4xl mb-4 group-hover:scale-125 transition-all duration-500 relative z-10" style={{filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'}}>
                {item.icon}
              </div>
              <span className="text-sm text-oasis-espresso leading-relaxed font-medium relative z-10 group-hover:text-oasis-hover transition-colors duration-300">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
