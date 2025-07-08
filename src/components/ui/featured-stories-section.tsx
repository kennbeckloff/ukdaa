import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeaturedPostCard } from '@/components/ui/featured-post-card';
import educationImage from '@/assets/education-initiative.jpg';
import socialJusticeImage from '@/assets/social-justice.jpg';
import technologyImage from '@/assets/technology-innovation.jpg';

const featuredStories = [
  {
    title: 'Investing in Educational Equity',
    description: 'How our new $50 million initiative is transforming educational opportunities for underserved communities across the United States.',
    image: educationImage,
    category: 'Education',
    date: '2024-01-15',
    href: '#education-story',
    featured: true
  },
  {
    title: 'Democracy and Technology',
    description: 'Supporting digital rights and ensuring technology serves democratic values in the digital age.',
    image: technologyImage,
    category: 'Technology',
    date: '2024-01-10',
    href: '#tech-story'
  },
  {
    title: 'Building Just Economies',
    description: 'Creating pathways to economic opportunity and addressing systemic barriers to prosperity.',
    image: socialJusticeImage,
    category: 'Economy',
    date: '2024-01-05',
    href: '#economy-story'
  }
];

export const FeaturedStoriesSection = () => {
  return (
    <section id="our-work" className="py-16 lg:py-24 bg-background">
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
            Our Impact Stories
          </h2>
          <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we're working with partners around the world to build a more just, equitable, and sustainable future for all.
          </p>
        </motion.div>

        {/* Featured Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredStories.map((story, index) => (
            <FeaturedPostCard
              key={story.title}
              {...story}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold group"
            onClick={() => document.querySelector('#news')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Stories
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};