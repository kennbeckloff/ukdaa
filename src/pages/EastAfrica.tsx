import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const EastAfrica = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              East Africa
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                East Africa is among the world's fastest-growing regions, home to a large youth population, 
                abundant natural resources, thriving urban hubs, a vibrant technology sector, rich media and 
                cultural traditions, evolving public institutions, and dynamic social movements. Between 2022 
                and 2025, the region has received more grants than in previous years, reflecting growing 
                recognition of its potential and the need to support its progress.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We have actively worked in and partnered with the following countries: Burundi, Comoros, 
                Djibouti, Eritrea, Ethiopia, Kenya, Madagascar, Malawi, Mauritius, Mozambique, and Rwanda.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                As the region moves closer to greater prosperity, it remains essential to promote open civic 
                space, strengthen civil society, and encourage constructive public dialogue with government. 
                This will help ensure that millions of people in Kenya, Uganda, and Tanzania—the countries 
                where we operate—can actively shape their societies and access opportunities that should be 
                open to all.
              </p>
            </div>

            {/* Grant Opportunities */}
            <div className="bg-secondary/50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Grant Opportunities</h2>
              <p className="text-muted-foreground mb-4">
                We highly encourage communities and organizations from the following countries to apply for our grants:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Uganda
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Tanzania
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Sudan
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  South Sudan
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Zambia
                </li>
              </ul>
            </div>

            {/* Strategy */}
            <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Strategy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to advancing the principles of open government and supporting civil society 
                organizations that advocate for greater transparency and accountability to combat systemic 
                corruption. Our long-standing work includes strengthening critical democratic institutions, 
                such as national and regional judiciaries. We have fostered the growth of East African 
                philanthropy and continue to enhance the financial resilience of organizations through 
                innovative approaches, including impact investing. Throughout our efforts, we place gender 
                equality, youth empowerment, and disability rights at the forefront—recognizing them not 
                only as areas of inequality but also as key drivers of positive transformation in East Africa.
              </p>
            </div>

            {/* Partners Section */}
            <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Our Partners</h2>
              <p className="text-muted-foreground text-center mb-8">
                The following partners have been able to support us achieve different projects in Africa.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                <div className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-medium text-foreground">OPM</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Oxford Policy Management</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-medium text-foreground">WEDC</span>
                    </div>
                    <p className="text-xs text-muted-foreground">WEDC</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-medium text-foreground">KIT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">KIT</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-medium text-foreground">EDT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Education Development Trust</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-medium text-foreground">SCOM</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Safaricom Kenya</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-medium text-foreground">MC</span>
                    </div>
                    <p className="text-xs text-muted-foreground">MasterCard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Button 
                onClick={() => navigate('/funding-criteria')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 text-lg"
              >
                Make Applications
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EastAfrica;