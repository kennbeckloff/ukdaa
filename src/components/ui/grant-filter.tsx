import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface Grant {
  id: string;
  title: string;
  description: string;
  focusArea: string;
  location: string;
  amount: string;
  deadline: string;
  eligibility: string;
}

const grants: Grant[] = [
  {
    id: '1',
    title: 'Community Leadership Development',
    description: 'Supporting grassroots leaders working to advance economic opportunity in their communities.',
    focusArea: 'Inequality',
    location: 'United States',
    amount: '$50,000 - $200,000',
    deadline: '2024-03-15',
    eligibility: 'Community organizations'
  },
  {
    id: '2',
    title: 'Technology for Social Justice',
    description: 'Funding innovative tech solutions that promote equity and protect civil rights.',
    focusArea: 'Technology',
    location: 'Global',
    amount: '$100,000 - $500,000',
    deadline: '2024-04-01',
    eligibility: 'Tech nonprofits'
  },
  {
    id: '3',
    title: 'Arts and Cultural Expression',
    description: 'Supporting artists and cultural workers addressing social and political issues.',
    focusArea: 'Creativity',
    location: 'Latin America',
    amount: '$25,000 - $100,000',
    deadline: '2024-02-28',
    eligibility: 'Artists and cultural organizations'
  }
];

export const GrantFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFocus, setSelectedFocus] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredGrants, setFilteredGrants] = useState(grants);

  const handleFilter = () => {
    let filtered = grants;

    if (searchTerm) {
      filtered = filtered.filter(grant =>
        grant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grant.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFocus) {
      filtered = filtered.filter(grant => grant.focusArea === selectedFocus);
    }

    if (selectedLocation) {
      filtered = filtered.filter(grant => grant.location === selectedLocation);
    }

    setFilteredGrants(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFocus('');
    setSelectedLocation('');
    setFilteredGrants(grants);
  };

  return (
    <section id="grants" className="py-16 lg:py-24 bg-background">
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
            Grant Opportunities
          </h2>
          <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find funding opportunities that align with your organization's mission and our focus areas.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg shadow-card mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search grants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedFocus} onValueChange={setSelectedFocus}>
              <SelectTrigger>
                <SelectValue placeholder="Focus Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Inequality">Inequality</SelectItem>
                <SelectItem value="Democracy">Democracy</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Creativity">Creativity</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Global">Global</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Latin America">Latin America</SelectItem>
                <SelectItem value="Africa">Africa</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Button onClick={handleFilter} className="flex-1">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              <Button variant="outline" onClick={clearFilters}>
                Clear
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Grants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGrants.map((grant, index) => (
            <motion.div
              key={grant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-inter font-medium">
                      {grant.focusArea}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-1" />
                      Due: {new Date(grant.deadline).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="font-inter text-xl font-bold text-foreground mb-3">
                    {grant.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                    {grant.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={16} className="mr-2 flex-shrink-0" />
                      {grant.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign size={16} className="mr-2 flex-shrink-0" />
                      {grant.amount}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Eligibility:</strong> {grant.eligibility}
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium">
                      Learn More & Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredGrants.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="font-inter text-muted-foreground text-lg">
              No grants found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};