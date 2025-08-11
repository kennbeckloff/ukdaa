import React from 'react';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: {
    label: string;
    value: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card p-8 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 group"
    >
      <div className="text-primary mb-6 group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="font-inter text-xl font-bold text-foreground mb-4">
        {title}
      </h3>
      
      <p className="font-inter text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      {stats && (
        <div className="border-t border-border pt-4">
          <div className="text-2xl font-inter font-bold text-primary mb-1">
            {stats.value}
          </div>
          <div className="text-sm font-inter text-muted-foreground">
            {stats.label}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const ProgramSection = () => {
  const programs = [
    {
      title: 'Health',
      description: 'We offer grants to only recognized health institutions to improve healthcare access and quality across communities.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      stats: {
        value: '£500M+',
        label: 'Invested in health sector'
      }
    },
    {
      title: 'Agriculture',
      description: 'We support grassroot communities and groups trying to change lives through grants and farming equipment. Successful projects in Kenya, Thailand, South Africa, Nigeria and other countries.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      stats: {
        value: '15+',
        label: 'Countries impacted'
      }
    },
    {
      title: 'Environmental Conservation',
      description: 'We promote sustainable practices and environmental protection initiatives to preserve our planet for future generations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      stats: {
        value: '200+',
        label: 'Projects funded'
      }
    },
    {
      title: 'Entrepreneurship',
      description: 'We empower local entrepreneurs and small businesses to create sustainable economic opportunities in their communities.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      stats: {
        value: '5,000+',
        label: 'Entrepreneurs supported'
      }
    },
    {
      title: 'Faith Based Centred Projects',
      description: 'We help churches achieve their various projects all aimed at giving back to the community and strengthening social bonds.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      stats: {
        value: '300+',
        label: 'Faith organizations supported'
      }
    },
    {
      title: 'Anti Female Genital Mutilation',
      description: 'We have helped groups fight FGM and protect women and girls across Africa, making significant impact in communities.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      stats: {
        value: '£340M',
        label: 'Already disbursed'
      }
    },
    {
      title: 'Education',
      description: 'We have sponsored and offered educational grants to schools and individuals across many African countries including Tanzania, South Africa, Kenya, Uganda, Rwanda, Lesotho, Mozambique, Angola, and DRC Congo.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      stats: {
        value: '10+',
        label: 'African countries supported'
      }
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-section">
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
            Our Focus Areas
          </h2>
          <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We organize our work around seven interconnected focus areas that address the root causes of inequality and injustice across Africa and beyond.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
};