import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-oceanfront-resort.jpg';

export const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#suites');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Azure Haven Resort Oceanfront View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Azure Haven
          <span className="block text-accent font-lora text-2xl lg:text-4xl font-light mt-2">
            Resort & Spa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-lora text-xl lg:text-2xl mb-8 leading-relaxed text-background/90"
        >
          Experience unparalleled luxury where the ocean meets paradise.
          Indulge in exclusive amenities and create unforgettable memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-gold text-primary font-semibold px-8 py-4 text-lg hover:shadow-gold transition-all duration-300 font-lora"
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Stay
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-background text-background hover:bg-background hover:text-primary px-8 py-4 text-lg transition-all duration-300 font-lora"
            onClick={() => document.querySelector('#suites')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Suites
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          className="text-background hover:text-accent transition-colors duration-300 animate-float"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};