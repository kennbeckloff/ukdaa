import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-community-impact.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community members working together on social impact initiatives"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8"
          >
            United Kingdom International
            <span className="block text-accent">Development Aid For Africa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-inter text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 text-white/90 max-w-3xl"
          >
            For more than 80 years, we've been committed to reducing inequality and strengthening democratic values around the world. Join us in creating lasting change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold px-8 py-4 text-lg transition-all duration-300 group"
              onClick={() => document.querySelector('#our-work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-inter font-semibold transition-all duration-300"
              onClick={() => document.querySelector('#grants')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find Grants
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-white/30 mx-auto mb-4" />
        <div className="text-white/70 text-sm font-inter">Scroll to explore</div>
      </motion.div>
    </section>
  );
};