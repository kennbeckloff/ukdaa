import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-inter text-4xl lg:text-6xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              Dedicated to defending and promoting human rights, advancing education, 
              and addressing basic needs that empower individuals and communities to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Mission Statement */}
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <h2 className="font-inter text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h2>
                <p className="font-inter text-foreground leading-relaxed mb-6">
                  At the UKDAA, we are dedicated to defending and promoting human rights, advancing education, 
                  and addressing basic needs that empower individuals and communities to thrive. Our mission is 
                  to create a just and equitable society where everyone has the opportunity to live with dignity, 
                  access quality education, and enjoy fundamental rights.
                </p>
                <p className="font-inter text-foreground leading-relaxed">
                  We believe that every person deserves respect, fairness, and the chance to succeed, regardless 
                  of their background or circumstances. Through advocacy, community programs, and partnerships, 
                  we strive to break down barriers and build lasting solutions to the challenges faced by 
                  vulnerable populations.
                </p>
              </div>

              {/* Good Neighbor Committee */}
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <h2 className="font-inter text-2xl font-bold text-primary mb-4">
                  Good Neighbor Committee
                </h2>
                <p className="font-inter text-foreground leading-relaxed mb-6">
                  Since 2011, the foundation's Good Neighbor Committee has supported organizations and activities 
                  near our headquarters, in Birmingham city of the UK, that contribute to the neighborhood's 
                  civic spirit and vitality. The committee's work strengthens our ties to our immediate neighbors 
                  and connects us to local organizations working on problems related to our mission.
                </p>
                <p className="font-inter text-foreground leading-relaxed">
                  This program has been so successful that some of our regional offices in Asia, Africa, 
                  and Latin America have formed their own Good Neighbor Committees.
                </p>
              </div>

              {/* Grants Program */}
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <h2 className="font-inter text-2xl font-bold text-primary mb-4">
                  Grant Opportunities
                </h2>
                <p className="font-inter text-foreground leading-relaxed mb-6">
                  In addition to our ongoing projects, we are committed to supporting meaningful change by 
                  providing grants. These grants are made available at different times throughout the year 
                  to organizations, community groups, and individuals who share our vision of a better future.
                </p>
                <p className="font-inter text-foreground leading-relaxed">
                  We encourage applicants to check our website regularly for announcements and how to apply.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h2 className="font-inter text-2xl font-bold text-primary mb-4">
                  Together We Make a Difference
                </h2>
                <p className="font-inter text-foreground leading-relaxed text-lg">
                  Together, we can make a difference—one person, one community at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;