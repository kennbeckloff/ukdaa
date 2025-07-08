import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Utensils, Sparkles, Plane } from 'lucide-react';

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: <Waves className="text-accent" size={48} />,
    title: 'Infinity Pool',
    description: 'Multiple infinity pools cascading into the ocean with private cabanas and poolside service.'
  },
  {
    icon: <Waves className="text-accent" size={48} />,
    title: 'Private Beach',
    description: 'Exclusive access to pristine white sand beaches with crystal clear waters and water sports.'
  },
  {
    icon: <Utensils className="text-accent" size={48} />,
    title: 'Fine Dining',
    description: 'World-class restaurants featuring Michelin-starred chefs and exquisite culinary experiences.'
  },
  {
    icon: <Sparkles className="text-accent" size={48} />,
    title: 'Luxury Spa',
    description: 'Award-winning spa offering holistic treatments, wellness programs, and rejuvenation therapies.'
  },
  {
    icon: <Plane className="text-accent" size={48} />,
    title: 'Helicopter Service',
    description: 'Private helicopter transfers and scenic tours for the ultimate luxury travel experience.'
  },
  {
    icon: <Sparkles className="text-accent" size={48} />,
    title: 'Concierge',
    description: '24/7 personalized concierge service to fulfill every request and create bespoke experiences.'
  }
];

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
            Luxury Amenities
          </h2>
          <p className="font-lora text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in unparalleled luxury with our world-class amenities designed to exceed every expectation.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/10 rounded-full mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300"
              >
                {amenity.icon}
              </motion.div>
              
              <h3 className="font-playfair text-2xl font-bold mb-4">
                {amenity.title}
              </h3>
              
              <p className="font-lora text-primary-foreground/80 leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-lora text-lg text-primary-foreground/80 mb-6">
            Ready to experience the ultimate in luxury hospitality?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-primary font-lora font-semibold px-8 py-4 rounded-lg hover:shadow-gold transition-all duration-300"
          >
            Reserve Your Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};