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
    name: 'Dr. Caren Pearl',
    title: 'UKDAA President',
    department: 'Leadership',
    bio: 'Dr. Caren Pearl leads the United Kingdom International Development Aid For Africa, guiding our mission to build a more just and equitable world across the African continent.',
    image: '/lovable-uploads/4356e551-57fa-4aa2-8a9e-63ccb06f0055.png',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Catherine Vunga',
    title: 'Programmes Director',
    department: 'Programs',
    bio: 'Catherine oversees our global programming efforts, focusing on sustainable development and capacity building across African communities.',
    image: '/lovable-uploads/2e28758f-3991-4b16-9cf0-7383607744b3.png',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Derick Jackson',
    title: 'Project Officer - African Desk',
    department: 'Projects',
    bio: 'Derick manages our on-ground projects across Africa, ensuring effective implementation and community engagement in all our initiatives.',
    image: '/lovable-uploads/2291e2cb-f6f4-4c5b-ae3d-19402964c830.png',
    twitter: '#'
  },
  {
    id: '4',
    name: 'Thomas Harper',
    title: 'Grants Manager',
    department: 'Funding',
    bio: 'Thomas oversees our grant-making processes, ensuring strategic funding allocation to maximize impact across our development programs.',
    image: '/lovable-uploads/7ade24ee-c690-4f65-ada5-3d413e0b70d1.png',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '5',
    name: 'Rev. George Markins',
    title: 'Head of Monitoring and Evaluation',
    department: 'M&E',
    bio: 'Rev. George Markins leads our monitoring and evaluation efforts, ensuring accountability and measuring the impact of our development programs across Africa.',
    image: '/lovable-uploads/5f46a304-8fa3-4a8c-9d65-5409bd2c9c61.png',
    linkedin: '#'
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
                  <div className="w-full h-64 bg-muted overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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