import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FeaturedPostProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  href: string;
  featured?: boolean;
}

export const FeaturedPostCard: React.FC<FeaturedPostProps> = ({
  title,
  description,
  image,
  category,
  date,
  href,
  featured = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={featured ? 'col-span-full lg:col-span-2' : ''}
    >
      <Card className="group overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-300 border-0 h-full">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              featured ? 'h-64 lg:h-80' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-inter font-medium">
              {category}
            </span>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3 font-inter">
            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
          </div>
          
          <h3 className={`font-inter font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {title}
          </h3>
          
          <p className={`font-inter text-muted-foreground leading-relaxed mb-6 ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {description}
          </p>
          
          <Button
            variant="ghost"
            className="text-primary hover:text-primary/80 font-inter font-medium p-0 h-auto group/button"
            onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read More
            <ArrowRight className="ml-2 group-hover/button:translate-x-1 transition-transform duration-300" size={16} />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};