import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { GrantFilter } from '@/components/ui/grant-filter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const ApplyGrants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Grant Application Portal
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover funding opportunities and submit your grant applications. 
              We support initiatives that drive positive change across Africa.
            </p>
          </div>
        </section>

        {/* Download Application Form */}
        <section className="py-8 px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Grant Application Form</h3>
                  <p className="text-muted-foreground text-center">
                    Download our official grant application form to get started with your funding request.
                  </p>
                  <Button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/files/Ukdaa-Grant Application Form.docx';
                      link.download = 'UKDAA-Grant-Application-Form.docx';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Application Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Grant Opportunities - Replica from home page */}
        <section className="py-16">
          <GrantFilter />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyGrants;