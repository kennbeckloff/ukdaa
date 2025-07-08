import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { FeaturedStoriesSection } from '@/components/ui/featured-stories-section';
import { ProgramSection } from '@/components/ui/program-section';
import { GrantFilter } from '@/components/ui/grant-filter';
import { PeopleList } from '@/components/ui/people-list';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedStoriesSection />
        <ProgramSection />
        <GrantFilter />
        <PeopleList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;