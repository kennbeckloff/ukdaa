import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { SuitesSection } from '@/components/ui/suites-section';
import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { AmenitiesSection } from '@/components/ui/amenities-section';
import { BookingSection } from '@/components/ui/booking-section';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SuitesSection />
      <TestimonialsSection />
      <AmenitiesSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;