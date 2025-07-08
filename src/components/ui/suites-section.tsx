import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Car, Utensils, Waves, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import suiteOcean from '@/assets/suite-ocean-view.jpg';
import suitePresidential from '@/assets/suite-presidential.jpg';
import suiteVilla from '@/assets/suite-villa.jpg';

interface Suite {
  name: string;
  image: string;
  price: string;
  description: string;
  amenities: string[];
  capacity: string;
  size: string;
}

const suites: Suite[] = [
  {
    name: 'Ocean View Suite',
    image: suiteOcean,
    price: '$750',
    description: 'Elegant suite with panoramic ocean views, marble bathroom, and private balcony. Perfect for romantic getaways.',
    amenities: ['Ocean View', 'Marble Bathroom', 'Private Balcony', 'Premium Linens'],
    capacity: '2 Guests',
    size: '650 sq ft'
  },
  {
    name: 'Presidential Villa',
    image: suitePresidential,
    price: '$2,500',
    description: 'Ultimate luxury with private infinity pool, dedicated butler service, and exclusive beach access.',
    amenities: ['Private Pool', 'Butler Service', 'Beach Access', 'Outdoor Dining'],
    capacity: '4 Guests',
    size: '1,800 sq ft'
  },
  {
    name: 'Beachfront Villa',
    image: suiteVilla,
    price: '$1,200',
    description: 'Spacious villa with direct beach access, outdoor shower, and private cabana for ultimate privacy.',
    amenities: ['Beach Access', 'Outdoor Shower', 'Private Cabana', 'Garden Views'],
    capacity: '3 Guests',
    size: '1,200 sq ft'
  }
];

export const SuitesSection = () => {
  return (
    <section id="suites" className="py-20 lg:py-32 bg-background">
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
            Luxury Suites
          </h2>
          <p className="font-lora text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each of our meticulously designed suites offers a unique blend of comfort, elegance, 
            and breathtaking views to create your perfect sanctuary.
          </p>
        </motion.div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden bg-gradient-card shadow-luxury hover:shadow-elevated transition-all duration-500 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full font-lora font-semibold">
                    {suite.price}/night
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                    {suite.name}
                  </h3>
                  
                  <p className="font-lora text-muted-foreground mb-4 leading-relaxed">
                    {suite.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {suite.capacity}
                    </div>
                    <div className="flex items-center gap-1">
                      <Car size={16} />
                      {suite.size}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {suite.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-lora font-semibold transition-all duration-300"
                    onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};