import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Briefcase, CheckCircle, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const hiringSteps = [
    'Application Review - We thoroughly review your application and qualifications',
    'Initial Screening - Phone or video call to discuss your background and interests',
    'Technical Assessment - Role-specific evaluation of your skills and expertise',
    'Panel Interview - Meet with team members and potential colleagues',
    'Final Interview - Discussion with senior leadership about vision and fit',
    'Reference Check - Verification of your professional background',
    'Offer and Onboarding - Welcome to the team and integration process'
  ];

  const jobOpenings = [
    {
      title: "Drivers",
      positions: 6,
      location: "Various locations across Africa",
      type: "Full-time",
      description: "We are seeking experienced drivers to support our field operations and program implementation across various African countries.",
      requirements: [
        "Minimum 5 years of professional driving experience",
        "Valid driver's license for heavy and light vehicles",
        "Clean driving record with no major violations",
        "Experience driving in challenging terrains and weather conditions",
        "Basic vehicle maintenance knowledge",
        "Ability to work flexible hours and travel extensively"
      ],
      responsibilities: [
        "Transport staff, equipment, and supplies to project sites",
        "Maintain vehicle safety and cleanliness standards",
        "Assist with loading and unloading of materials",
        "Report vehicle maintenance needs promptly",
        "Ensure compliance with traffic laws and safety regulations"
      ]
    },
    {
      title: "Human Resource Manager",
      positions: 2,
      location: "Nairobi, Kenya / Lagos, Nigeria",
      type: "Full-time",
      description: "Lead our human resources function to attract, develop, and retain top talent across our African operations.",
      requirements: [
        "Bachelor's degree in Human Resources, Business Administration, or related field",
        "7+ years of HR management experience, preferably in NGO/nonprofit sector",
        "Professional HR certification (CHRP, SHRM, or equivalent)",
        "Experience with African labor laws and regulations",
        "Strong leadership and communication skills",
        "Fluency in English and local languages preferred"
      ],
      responsibilities: [
        "Develop and implement HR policies and procedures",
        "Oversee recruitment, onboarding, and talent management",
        "Manage employee relations and conflict resolution",
        "Ensure compliance with local employment laws",
        "Lead performance management and professional development programs",
        "Coordinate training and capacity building initiatives"
      ]
    },
    {
      title: "Project Manager",
      positions: 4,
      location: "Various African countries",
      type: "Full-time",
      description: "Lead and manage development projects focused on poverty alleviation, health, and education initiatives across Africa.",
      requirements: [
        "Master's degree in Development Studies, International Relations, or related field",
        "5+ years of project management experience in development sector",
        "PMP or equivalent project management certification",
        "Experience working in African contexts",
        "Strong analytical and problem-solving skills",
        "Proficiency in project management tools and methodologies"
      ],
      responsibilities: [
        "Plan, implement, and monitor development projects",
        "Coordinate with local partners and stakeholders",
        "Manage project budgets and timelines",
        "Prepare regular progress reports for donors",
        "Ensure project compliance with donor requirements",
        "Lead project evaluation and learning activities"
      ]
    },
    {
      title: "Program Officer",
      positions: 3,
      location: "Remote (Africa-based preferred)",
      type: "Full-time, Remote",
      description: "Support program development and implementation while working remotely to advance our mission across African communities.",
      requirements: [
        "Bachelor's degree in relevant field (Development, Public Health, etc.)",
        "3+ years of experience in program management or development",
        "Strong research and analytical skills",
        "Excellent written and verbal communication skills",
        "Experience with remote collaboration tools",
        "Knowledge of African development challenges and contexts"
      ],
      responsibilities: [
        "Support program design and proposal development",
        "Conduct research and analysis on development issues",
        "Monitor and evaluate program activities remotely",
        "Prepare reports and presentations for stakeholders",
        "Coordinate with field teams and partners virtually",
        "Assist in grant writing and fundraising activities"
      ]
    },
    {
      title: "Regional Coordinators",
      positions: 8,
      location: "East, West, Central, and Southern Africa",
      type: "Full-time",
      description: "Coordinate regional activities and partnerships to ensure effective program implementation across assigned African regions.",
      requirements: [
        "Master's degree in relevant field preferred",
        "5+ years of experience in regional coordination or management",
        "Deep understanding of assigned regional context",
        "Strong networking and relationship-building skills",
        "Multilingual capabilities preferred",
        "Willingness to travel extensively within the region"
      ],
      responsibilities: [
        "Coordinate program activities across multiple countries",
        "Build and maintain relationships with regional partners",
        "Represent the organization at regional forums and meetings",
        "Monitor regional trends and opportunities",
        "Facilitate knowledge sharing across countries",
        "Support country-level program implementation"
      ]
    },
    {
      title: "Finance Manager",
      positions: 2,
      location: "Nairobi, Kenya / Accra, Ghana",
      type: "Full-time",
      description: "Oversee financial management and ensure fiscal responsibility across our African operations.",
      requirements: [
        "Bachelor's degree in Accounting, Finance, or related field",
        "CPA or equivalent professional certification",
        "7+ years of financial management experience in NGO sector",
        "Experience with donor compliance and reporting",
        "Knowledge of African financial regulations",
        "Advanced Excel and financial software proficiency"
      ],
      responsibilities: [
        "Manage organizational budgets and financial planning",
        "Ensure compliance with donor financial requirements",
        "Oversee accounts payable and receivable",
        "Prepare financial reports for management and donors",
        "Manage banking relationships and cash flow",
        "Coordinate annual audits and tax compliance"
      ]
    },
    {
      title: "Communications Specialist",
      positions: 2,
      location: "Nairobi, Kenya / Cape Town, South Africa",
      type: "Full-time",
      description: "Develop and implement communication strategies to promote our work and engage stakeholders across Africa.",
      requirements: [
        "Bachelor's degree in Communications, Journalism, or related field",
        "4+ years of communications experience in nonprofit sector",
        "Excellent writing and editing skills",
        "Social media and digital marketing expertise",
        "Photography and basic video editing skills",
        "Understanding of African media landscape"
      ],
      responsibilities: [
        "Develop content for websites, newsletters, and social media",
        "Manage media relations and press releases",
        "Create compelling stories about program impact",
        "Coordinate with regional teams on communications",
        "Manage organizational brand and messaging",
        "Support fundraising and advocacy communications"
      ]
    },
    {
      title: "Monitoring & Evaluation Specialist",
      positions: 3,
      location: "Various locations",
      type: "Full-time",
      description: "Design and implement monitoring and evaluation systems to measure program impact and effectiveness.",
      requirements: [
        "Master's degree in Statistics, Economics, or related field",
        "5+ years of M&E experience in development sector",
        "Strong quantitative and qualitative research skills",
        "Proficiency in statistical software (SPSS, R, Stata)",
        "Experience with impact evaluation methodologies",
        "Knowledge of donor M&E requirements"
      ],
      responsibilities: [
        "Design monitoring and evaluation frameworks",
        "Conduct baseline and endline surveys",
        "Analyze program data and prepare evaluation reports",
        "Train staff on M&E systems and tools",
        "Support evidence-based program improvements",
        "Manage external evaluation consultants"
      ]
    },
    {
      title: "Receptionist/Front Desk",
      positions: 3,
      location: "Kenya and South Africa offices",
      type: "Full-time",
      description: "Provide excellent customer service and administrative support as the first point of contact for visitors and callers at our Kenya and South Africa offices.",
      requirements: [
        "High school diploma or equivalent; additional certification in office administration preferred",
        "2+ years of experience in reception or customer service roles",
        "Excellent communication and interpersonal skills",
        "Professional appearance and demeanor",
        "Proficiency in Microsoft Office Suite",
        "Fluency in English and local languages",
        "Strong organizational and multitasking abilities"
      ],
      responsibilities: [
        "Welcome visitors and direct them to appropriate personnel",
        "Answer and route incoming phone calls professionally",
        "Manage appointment schedules and meeting room bookings",
        "Handle incoming and outgoing mail and deliveries",
        "Maintain visitor logs and security protocols",
        "Provide general administrative support to staff",
        "Maintain reception area cleanliness and organization"
      ]
    },
    {
      title: "Office Administrator",
      positions: 2,
      location: "Kenya office only",
      type: "Full-time",
      description: "Oversee daily office operations and provide comprehensive administrative support to ensure smooth functioning of our Kenya office.",
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "3+ years of office administration experience",
        "Strong organizational and project management skills",
        "Proficiency in office software and database management",
        "Experience with procurement and vendor management",
        "Knowledge of local regulations and compliance requirements",
        "Excellent written and verbal communication skills"
      ],
      responsibilities: [
        "Oversee daily office operations and administrative procedures",
        "Manage office supplies, equipment, and vendor relationships",
        "Coordinate travel arrangements and accommodation bookings",
        "Maintain filing systems and document management",
        "Support HR activities including staff onboarding",
        "Ensure compliance with local regulations and policies",
        "Prepare reports and presentations for management"
      ]
    },
    {
      title: "IT Specialist",
      positions: 3,
      location: "Kenya / South Africa / Remote",
      type: "Full-time",
      description: "Provide comprehensive IT support and maintain technology infrastructure to ensure seamless operations across our offices and remote teams.",
      requirements: [
        "Bachelor's degree in Information Technology, Computer Science, or related field",
        "4+ years of experience in IT support and system administration",
        "Strong knowledge of Windows and Linux operating systems",
        "Experience with network administration and cybersecurity",
        "Proficiency in cloud platforms (AWS, Azure, Google Cloud)",
        "Knowledge of database management and backup systems",
        "Excellent troubleshooting and problem-solving skills"
      ],
      responsibilities: [
        "Maintain and troubleshoot computer systems and networks",
        "Provide technical support to staff across multiple locations",
        "Implement and manage cybersecurity measures",
        "Oversee software installations and updates",
        "Manage data backup and recovery systems",
        "Coordinate with vendors for hardware procurement and maintenance",
        "Train staff on new technologies and software applications"
      ]
    },
    {
      title: "Data Analysis Specialist",
      positions: 2,
      location: "Nairobi, Kenya / Cape Town, South Africa",
      type: "Full-time",
      description: "Analyze program data and generate insights to inform strategic decision-making and improve program effectiveness across our African operations.",
      requirements: [
        "Master's degree in Statistics, Data Science, Economics, or related field",
        "3+ years of experience in data analysis and visualization",
        "Proficiency in statistical software (R, Python, SPSS, Stata)",
        "Experience with data visualization tools (Tableau, Power BI)",
        "Strong analytical and critical thinking skills",
        "Knowledge of database management and SQL",
        "Experience working with large datasets and survey data"
      ],
      responsibilities: [
        "Analyze program data to measure impact and effectiveness",
        "Create dashboards and visualizations for stakeholders",
        "Conduct statistical analysis and predictive modeling",
        "Prepare data-driven reports and presentations",
        "Support monitoring and evaluation activities",
        "Collaborate with program teams to identify key metrics",
        "Maintain data quality and ensure accuracy of analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 px-4 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build a career that makes a difference. Help us fund and shape pathbreaking approaches 
              to alleviating poverty, disease, and inequity around the world.
            </p>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl">What We Look For</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our employees come to us from many professional backgrounds—from business and tech to academia, 
                  medicine, government, and nonprofits. They are drawn to our foundation by the opportunity to 
                  fund and shape pathbreaking approaches to alleviating poverty, disease, and inequity around the world. 
                  Many have never worked for a philanthropy before.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="border-2 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Users className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Deep Expertise & Generalists</h3>
                          <p className="text-muted-foreground">
                            We hire both deep subject-matter experts and big-picture generalists who can 
                            navigate complex global challenges.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-secondary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Briefcase className="h-6 w-6 text-secondary mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Collaborative Experience</h3>
                          <p className="text-muted-foreground">
                            We value people who understand the nuances of working with governments, 
                            multilateral organizations, corporations, public health agencies, universities, and other donors.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Hiring Process */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl">Our Hiring Process</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Our hiring process allows us to understand your background and experience, 
                  as well as what interests you and inspires you about working here.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hiringSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-foreground font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Job Openings */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl">Current Job Openings</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Join our team and help make a lasting impact across Africa. We offer competitive compensation, professional development opportunities, and the chance to work on meaningful projects.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {jobOpenings.map((job, index) => (
                    <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {job.positions} {job.positions === 1 ? 'Position' : 'Positions'}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4">{job.description}</p>
                            
                            <div className="flex flex-wrap gap-4 mb-4 text-sm">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">{job.type}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 lg:mt-0 lg:ml-6">
                            <Button className="w-full lg:w-auto">
                              Apply Now
                            </Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              Requirements
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-primary" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {job.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Instructions */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl">How to Apply</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-lg text-foreground mb-3">Application Requirements</h4>
                  <p className="text-muted-foreground mb-4">
                    Eligible candidates should send their curriculum vitae and cover letter to:{" "}
                    <a href="mailto:careers@ukdaa.org" className="text-primary font-medium hover:underline">
                      careers@ukdaa.org
                    </a>
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Only successful candidates will be contacted via our official email and contacts.
                  </p>
                  <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                     <p className="text-foreground font-medium">
                       <strong>Application Deadline:</strong> 1st October 2025
                     </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card>
              <CardContent className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Don't See a Perfect Match?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals who share our passion for creating positive change across Africa. Submit a general application and we'll keep you in mind for future opportunities.
                </p>
                <Button size="lg" className="mr-4">
                  View All Positions
                </Button>
                <Button variant="outline" size="lg">
                  Submit General Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;