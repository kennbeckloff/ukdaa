import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Isabella Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    review: 'Azure Haven exceeded every expectation. The presidential villa with its private infinity pool was absolutely breathtaking. The staff anticipated our every need, making our anniversary truly unforgettable.',
    date: 'November 2024'
  },
  {
    name: 'James & Victoria Chen',
    location: 'Singapore',
    rating: 5,
    review: 'The attention to detail is extraordinary. From the moment we arrived, we felt like royalty. The beachfront villa and private dining experiences created memories that will last a lifetime.',
    date: 'October 2024'
  },
  {
    name: 'Alexander Thompson',
    location: 'London, UK',
    rating: 5,
    review: 'I have stayed at luxury resorts worldwide, but Azure Haven sets a new standard. The combination of pristine natural beauty and impeccable service is truly unmatched.',
    date: 'September 2024'
  },
  {
    name: 'Sofia Andersson',
    location: 'Stockholm, Sweden',
    rating: 5,
    review: 'Perfect honeymoon destination. The ocean view suite was magical, and the spa treatments were divine. Every moment felt like a dream come true.',
    date: 'August 2024'
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-primary mb-6">
            Guest Reviews
          </h2>
          <p className="font-lora text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what makes Azure Haven an unforgettable experience through the words of our treasured guests.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-background shadow-luxury border-0 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Quote Icon */}
                  <Quote className="text-accent mx-auto mb-6" size={48} />
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-current" size={20} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="font-lora text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].review}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center">
                    <h4 className="font-playfair text-xl font-bold text-primary">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="font-lora text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </p>
                    <p className="font-lora text-sm text-muted-foreground mt-1">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};