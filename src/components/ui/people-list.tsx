import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Person {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const people: Person[] = [
  {
    id: '1',
    name: 'Darren Walker',
    title: 'President',
    department: 'Leadership',
    bio: 'Darren Walker is president of the United Kingdom International Development Aid For Africa, a $16 billion international social justice philanthropy.',
    image: '/api/placeholder/300/300',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Maria Gonzalez',
    title: 'Vice President of Programs',
    department: 'Programs',
    bio: 'Maria leads our global programming efforts, focusing on inequality and democratic values.',
    image: '/api/placeholder/300/300',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'James Chen',
    title: 'Director of Technology & Society',
    department: 'Technology',
    bio: 'James oversees our work at the intersection of technology and social justice.',
    image: '/api/placeholder/300/300',
    twitter: '#'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    title: 'Director of Arts & Culture',
    department: 'Creativity',
    bio: 'Sarah leads our support for artists and cultural workers advancing social justice.',
    image: '/api/placeholder/300/300',
    linkedin: '#',
    twitter: '#'
  }
];

export const PeopleList = () => {
  return (
    <section id="people" className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our People
          </h2>
          <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders and staff who guide our mission to build a more just and equitable world.
          </p>
        </motion.div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-muted flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-inter font-bold text-primary">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-inter font-medium">
                      {person.department}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-inter text-xl font-bold text-foreground mb-2">
                    {person.name}
                  </h3>
                  
                  <p className="font-inter text-primary font-medium mb-4">
                    {person.title}
                  </p>
                  
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">
                    {person.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    {person.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="p-2"
                        aria-label={`${person.name} LinkedIn profile`}
                      >
                        <Linkedin size={16} />
                      </Button>
                    )}
                    {person.twitter && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="p-2"
                        aria-label={`${person.name} Twitter profile`}
                      >
                        <Twitter size={16} />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-2"
                      aria-label={`View ${person.name} full profile`}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold"
          >
            View All Staff & Leadership
          </Button>
        </motion.div>
      </div>
    </section>
  );
};