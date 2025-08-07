import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, Users, Globe } from 'lucide-react';

const FundingCriteria = () => {
  const requiredDocuments = [
    "Registration Certificate",
    "Audited Accounts for the last financial year",
    "Constitution or Memorandum and Articles of Association",
    "Annual Report",
    "Organisation's Financial Policy & Procedures"
  ];

  const eligibleGroups = [
    "Local NGO's",
    "Community Based Organizations",
    "Faith Based Organisations",
    "Local churches",
    "Self help groups",
    "Groups of people with disabilities (PWD)",
    "Women groups"
  ];

  // African countries we've worked with (prioritizing mentioned ones)
  const countriesWorkedWith = [
    // Priority countries mentioned
    { name: "Kenya", x: 72, y: 45 },
    { name: "South Africa", x: 58, y: 82 },
    { name: "Nigeria", x: 42, y: 38 },
    { name: "Tanzania", x: 68, y: 52 },
    { name: "Uganda", x: 68, y: 45 },
    { name: "Rwanda", x: 65, y: 48 },
    { name: "Lesotho", x: 58, y: 85 },
    { name: "Mozambique", x: 70, y: 68 },
    { name: "Angola", x: 48, y: 58 },
    { name: "DRC Congo", x: 55, y: 48 },
    // Additional African countries to reach 36
    { name: "Ghana", x: 35, y: 35 },
    { name: "Ethiopia", x: 75, y: 35 },
    { name: "Morocco", x: 38, y: 15 },
    { name: "Egypt", x: 65, y: 15 },
    { name: "Algeria", x: 42, y: 22 },
    { name: "Libya", x: 52, y: 22 },
    { name: "Tunisia", x: 48, y: 18 },
    { name: "Sudan", x: 68, y: 28 },
    { name: "Mali", x: 35, y: 28 },
    { name: "Niger", x: 42, y: 28 },
    { name: "Chad", x: 52, y: 28 },
    { name: "Cameroon", x: 48, y: 35 },
    { name: "Central African Republic", x: 55, y: 35 },
    { name: "Gabon", x: 48, y: 42 },
    { name: "Zambia", x: 58, y: 58 },
    { name: "Zimbabwe", x: 62, y: 68 },
    { name: "Botswana", x: 55, y: 75 },
    { name: "Namibia", x: 48, y: 72 },
    { name: "Malawi", x: 68, y: 58 },
    { name: "Madagascar", x: 85, y: 68 },
    { name: "Senegal", x: 28, y: 28 },
    { name: "Guinea", x: 32, y: 35 },
    { name: "Sierra Leone", x: 28, y: 35 },
    { name: "Liberia", x: 32, y: 38 },
    { name: "Ivory Coast", x: 35, y: 38 },
    { name: "Burkina Faso", x: 38, y: 32 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Funding Criteria</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn about our funding requirements and eligibility criteria for grants across Africa
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Funding Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Funding Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The United Kingdom International Development Aid For Africa is a UK registered charity and as such is strictly regulated by the British Charity Commission. We are only able to donate to projects under our funding categories.
              </p>
              <p className="text-muted-foreground">
                We only fund registered charities, well known NGO's, groups and CBO's recommended by partner countries or groups. <strong>We do not fund individuals or give travel grants.</strong>
              </p>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Required Documents:</h4>
                <ul className="space-y-2">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Reporting Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Reporting Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Once a charity has received funding, part of your commitment to us will be to provide:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">6-monthly progress reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Full end of year 12-month project report with photos (JPEG format)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Shorter version summary report</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Short video for website publication (if possible)</span>
                </li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Important:</strong> We are occasionally asked to provide proof by the Charities Commission regarding expenditure overseas. Failure to submit these reports may result in an investigation as to how your charity is using/has used these funds.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Who Can Apply */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Who Can Apply
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our grants are open to the following groups in all African countries:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {eligibleGroups.map((group, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {group}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* African Map */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Countries We've Worked With</CardTitle>
            <p className="text-center text-muted-foreground">
              We have successfully supported projects across 36 African countries
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative w-full max-w-5xl mx-auto">
              {/* Enhanced SVG Map of Africa with detailed country shapes */}
              <svg viewBox="0 0 800 700" className="w-full h-auto border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                {/* Ocean background */}
                <rect width="800" height="700" fill="url(#oceanGradient)" />
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#bae6fd" />
                  </linearGradient>
                  <filter id="countryShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3"/>
                  </filter>
                </defs>

                {/* Country paths with different colors and working countries highlighted */}
                
                {/* Morocco */}
                <path d="M280 80 L320 75 L350 85 L340 110 L300 120 L270 100 Z" fill={countriesWorkedWith.find(c => c.name === "Morocco") ? "#22c55e" : "#fbbf24"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Algeria */}
                <path d="M320 75 L420 70 L450 85 L440 150 L380 160 L340 140 L340 110 Z" fill={countriesWorkedWith.find(c => c.name === "Algeria") ? "#22c55e" : "#f59e0b"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Tunisia */}
                <path d="M420 70 L445 65 L450 85 L440 100 L425 95 Z" fill={countriesWorkedWith.find(c => c.name === "Tunisia") ? "#22c55e" : "#ef4444"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Libya */}
                <path d="M445 65 L520 60 L530 120 L480 130 L450 85 Z" fill={countriesWorkedWith.find(c => c.name === "Libya") ? "#22c55e" : "#8b5cf6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Egypt */}
                <path d="M520 60 L580 55 L590 110 L560 120 L530 120 Z" fill={countriesWorkedWith.find(c => c.name === "Egypt") ? "#22c55e" : "#06b6d4"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Sudan */}
                <path d="M530 120 L590 110 L600 180 L550 190 L520 170 Z" fill={countriesWorkedWith.find(c => c.name === "Sudan") ? "#22c55e" : "#ec4899"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Ethiopia */}
                <path d="M590 150 L640 145 L650 200 L620 210 L600 180 Z" fill={countriesWorkedWith.find(c => c.name === "Ethiopia") ? "#22c55e" : "#10b981"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Somalia */}
                <path d="M650 200 L690 195 L700 250 L670 260 L650 230 Z" fill="#84cc16" stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Kenya */}
                <path d="M620 210 L650 200 L660 240 L630 250 L610 230 Z" fill={countriesWorkedWith.find(c => c.name === "Kenya") ? "#22c55e" : "#f97316"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Uganda */}
                <path d="M600 210 L620 210 L615 235 L595 235 Z" fill={countriesWorkedWith.find(c => c.name === "Uganda") ? "#22c55e" : "#3b82f6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Tanzania */}
                <path d="M600 235 L630 230 L640 280 L610 285 Z" fill={countriesWorkedWith.find(c => c.name === "Tanzania") ? "#22c55e" : "#a855f7"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Rwanda */}
                <path d="M595 235 L605 235 L603 245 L597 245 Z" fill={countriesWorkedWith.find(c => c.name === "Rwanda") ? "#22c55e" : "#ef4444"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* DRC Congo */}
                <path d="M520 190 L580 185 L590 260 L550 280 L500 270 L480 230 Z" fill={countriesWorkedWith.find(c => c.name === "DRC Congo") ? "#22c55e" : "#14b8a6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Central African Republic */}
                <path d="M520 170 L570 165 L580 185 L530 190 Z" fill={countriesWorkedWith.find(c => c.name === "Central African Republic") ? "#22c55e" : "#f59e0b"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Chad */}
                <path d="M480 130 L520 125 L530 170 L490 175 Z" fill={countriesWorkedWith.find(c => c.name === "Chad") ? "#22c55e" : "#8b5cf6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Niger */}
                <path d="M380 160 L480 155 L490 175 L420 180 L380 175 Z" fill={countriesWorkedWith.find(c => c.name === "Niger") ? "#22c55e" : "#06b6d4"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Nigeria */}
                <path d="M350 180 L420 175 L430 210 L370 215 Z" fill={countriesWorkedWith.find(c => c.name === "Nigeria") ? "#22c55e" : "#10b981"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Cameroon */}
                <path d="M430 210 L470 205 L480 240 L450 245 Z" fill={countriesWorkedWith.find(c => c.name === "Cameroon") ? "#22c55e" : "#f97316"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Gabon */}
                <path d="M450 245 L470 240 L475 265 L455 270 Z" fill={countriesWorkedWith.find(c => c.name === "Gabon") ? "#22c55e" : "#3b82f6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Angola */}
                <path d="M480 280 L520 275 L530 340 L490 345 Z" fill={countriesWorkedWith.find(c => c.name === "Angola") ? "#22c55e" : "#a855f7"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Zambia */}
                <path d="M530 300 L570 295 L580 340 L540 345 Z" fill={countriesWorkedWith.find(c => c.name === "Zambia") ? "#22c55e" : "#ef4444"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Malawi */}
                <path d="M580 320 L595 315 L600 350 L585 355 Z" fill={countriesWorkedWith.find(c => c.name === "Malawi") ? "#22c55e" : "#14b8a6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Mozambique */}
                <path d="M600 320 L630 315 L650 400 L620 405 Z" fill={countriesWorkedWith.find(c => c.name === "Mozambique") ? "#22c55e" : "#f59e0b"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Zimbabwe */}
                <path d="M570 345 L600 340 L610 375 L580 380 Z" fill={countriesWorkedWith.find(c => c.name === "Zimbabwe") ? "#22c55e" : "#8b5cf6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Botswana */}
                <path d="M530 380 L570 375 L580 420 L540 425 Z" fill={countriesWorkedWith.find(c => c.name === "Botswana") ? "#22c55e" : "#06b6d4"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Namibia */}
                <path d="M490 400 L530 395 L540 450 L500 455 Z" fill={countriesWorkedWith.find(c => c.name === "Namibia") ? "#22c55e" : "#ec4899"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* South Africa */}
                <path d="M500 455 L580 450 L600 500 L520 505 Z" fill={countriesWorkedWith.find(c => c.name === "South Africa") ? "#22c55e" : "#10b981"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Lesotho */}
                <path d="M550 475 L565 470 L570 485 L555 490 Z" fill={countriesWorkedWith.find(c => c.name === "Lesotho") ? "#22c55e" : "#f97316"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Madagascar */}
                <path d="M680 380 L710 375 L720 450 L690 455 Z" fill={countriesWorkedWith.find(c => c.name === "Madagascar") ? "#22c55e" : "#3b82f6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Mali */}
                <path d="M280 160 L380 155 L385 190 L300 195 Z" fill={countriesWorkedWith.find(c => c.name === "Mali") ? "#22c55e" : "#a855f7"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Burkina Faso */}
                <path d="M320 180 L370 175 L375 195 L325 200 Z" fill={countriesWorkedWith.find(c => c.name === "Burkina Faso") ? "#22c55e" : "#ef4444"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Ghana */}
                <path d="M300 200 L340 195 L345 220 L305 225 Z" fill={countriesWorkedWith.find(c => c.name === "Ghana") ? "#22c55e" : "#14b8a6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Ivory Coast */}
                <path d="M280 210 L320 205 L325 230 L285 235 Z" fill={countriesWorkedWith.find(c => c.name === "Ivory Coast") ? "#22c55e" : "#f59e0b"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Liberia */}
                <path d="M260 230 L285 225 L290 245 L265 250 Z" fill={countriesWorkedWith.find(c => c.name === "Liberia") ? "#22c55e" : "#8b5cf6"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Sierra Leone */}
                <path d="M240 220 L265 215 L270 235 L245 240 Z" fill={countriesWorkedWith.find(c => c.name === "Sierra Leone") ? "#22c55e" : "#06b6d4"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Guinea */}
                <path d="M220 210 L260 205 L265 225 L225 230 Z" fill={countriesWorkedWith.find(c => c.name === "Guinea") ? "#22c55e" : "#ec4899"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />
                
                {/* Senegal */}
                <path d="M180 180 L230 175 L235 200 L185 205 Z" fill={countriesWorkedWith.find(c => c.name === "Senegal") ? "#22c55e" : "#10b981"} stroke="#ffffff" strokeWidth="1" filter="url(#countryShadow)" />

                {/* Country labels for major countries */}
                <text x="350" y="200" textAnchor="middle" className="fill-white text-xs font-semibold drop-shadow-sm">NIGERIA</text>
                <text x="590" y="180" textAnchor="middle" className="fill-white text-xs font-semibold drop-shadow-sm">ETHIOPIA</text>
                <text x="630" y="225" textAnchor="middle" className="fill-white text-xs font-semibold drop-shadow-sm">KENYA</text>
                <text x="550" y="475" textAnchor="middle" className="fill-white text-xs font-semibold drop-shadow-sm">SOUTH AFRICA</text>
                <text x="550" y="320" textAnchor="middle" className="fill-white text-xs font-semibold drop-shadow-sm">ZAMBIA</text>
                <text x="620" y="250" textAnchor="middle" className="fill-white text-xs font-semibold drop-shadow-sm">TANZANIA</text>
                
                {/* Legend */}
                <g transform="translate(50, 550)">
                  <rect x="0" y="0" width="200" height="80" fill="rgba(255,255,255,0.9)" stroke="#e5e7eb" strokeWidth="1" rx="5" />
                  <text x="10" y="20" className="fill-gray-800 text-sm font-semibold">Legend</text>
                  <circle cx="20" cy="35" r="8" fill="#22c55e" />
                  <text x="35" y="40" className="fill-gray-700 text-xs">Countries we've worked with</text>
                  <circle cx="20" cy="55" r="8" fill="#f59e0b" />
                  <text x="35" y="60" className="fill-gray-700 text-xs">Other African countries</text>
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-8 p-4 bg-accent/20 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Please be aware that we are a small charity with limited resources and not all applications can be successful.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FundingCriteria;