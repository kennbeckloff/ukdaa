import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    suiteType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.checkIn || !formData.checkOut || !formData.guests || !formData.firstName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });

    // Reset form
    setFormData({
      checkIn: '',
      checkOut: '',
      guests: '',
      suiteType: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };

  return (
    <section id="booking" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-primary mb-6">
            Reserve Your Stay
          </h2>
          <p className="font-lora text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Begin your journey to paradise. Our reservation specialists are ready to create your perfect getaway.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-card shadow-luxury border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-3xl text-primary">
                  Booking Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dates and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="checkIn" className="font-lora font-medium">
                        Check-in Date *
                      </Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut" className="font-lora font-medium">
                        Check-out Date *
                      </Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="font-lora font-medium">
                        Guests *
                      </Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5+">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Suite Type */}
                  <div>
                    <Label htmlFor="suiteType" className="font-lora font-medium">
                      Preferred Suite
                    </Label>
                    <Select value={formData.suiteType} onValueChange={(value) => handleInputChange('suiteType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose your suite" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ocean-view">Ocean View Suite</SelectItem>
                        <SelectItem value="presidential">Presidential Villa</SelectItem>
                        <SelectItem value="beachfront">Beachfront Villa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="font-lora font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-lora font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="font-lora font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-lora font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="specialRequests" className="font-lora font-medium">
                      Special Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="mt-1"
                      rows={4}
                      placeholder="Please let us know about any special occasions, dietary requirements, or preferences..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-gold text-primary font-lora font-semibold py-3 text-lg hover:shadow-gold transition-all duration-300"
                  >
                    Submit Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-primary text-primary-foreground shadow-luxury border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">
                  Contact Our Concierge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-accent" size={20} />
                  <div>
                    <p className="font-lora font-medium">Direct Reservations</p>
                    <p className="text-primary-foreground/80">+1 (555) 123-AZURE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={20} />
                  <div>
                    <p className="font-lora font-medium">Email</p>
                    <p className="text-primary-foreground/80">reservations@azurehaven.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={20} />
                  <div>
                    <p className="font-lora font-medium">Location</p>
                    <p className="text-primary-foreground/80">Paradise Island, Maldives</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-luxury border-0">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-4">
                  Booking Benefits
                </h3>
                <ul className="space-y-2 font-lora text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Best Rate Guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Complimentary Airport Transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    24/7 Concierge Service
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Flexible Cancellation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};