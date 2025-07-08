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
      title: 'Inequality',
      description: 'We tackle the root causes of inequality by supporting movements and organizations that promote economic opportunity and social justice.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      stats: {
        value: '$2.1B',
        label: 'Committed since 2010'
      }
    },
    {
      title: 'Democracy',
      description: 'We strengthen democratic institutions and protect civic space, ensuring everyone has a voice in decisions that affect their lives.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      stats: {
        value: '85+',
        label: 'Countries supported'
      }
    },
    {
      title: 'Technology',
      description: 'We promote responsible technology that serves humanity, protects rights, and reduces inequality rather than deepening it.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      stats: {
        value: '$500M',
        label: 'Tech for good investments'
      }
    },
    {
      title: 'Creativity',
      description: 'We support artists and cultural workers as essential contributors to just and equitable societies.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      stats: {
        value: '1,200+',
        label: 'Artists supported'
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
            We organize our work around four interconnected focus areas that address the root causes of inequality and injustice.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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