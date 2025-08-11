import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  const quickLinks = [
    { label: 'Our Work', href: '#our-work' },
    { label: 'Grants', href: '#grants' },
    { label: 'Ideas', href: '#ideas' },
    { label: 'People', href: '#people' },
    { label: 'News', href: '#news' },
    { label: 'About', href: '#about' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="font-inter text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected
            </h3>
            <p className="font-inter text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest news, insights, and opportunities delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold whitespace-nowrap"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="font-inter text-2xl font-bold mb-4">
              UKDAA
            </h4>
            <p className="font-inter text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              We are a social justice philanthropy committed to reducing inequality and strengthening democratic values around the world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  href={social.href}
                  className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="font-inter text-lg font-semibold mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-inter text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="font-inter text-lg font-semibold mb-4">
              Contact Us
            </h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <div className="font-inter text-primary-foreground/80 text-sm">
                  <p>Alpha Tower, Suffolk Street Queensway</p>
                  <p>Birmingham, B1 1TT, UK</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <div className="font-inter text-primary-foreground/80 text-sm">
                  <p>+44 121 234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <div className="font-inter text-primary-foreground/80 text-sm">
                  <p>info@ukdaa.org</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-accent flex-shrink-0" size={18} />
                <div className="font-inter text-primary-foreground/80 text-sm">
                  <a 
                    href="https://wa.me/447796115923" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    +44 7796 115923
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-accent flex-shrink-0" size={18} />
                <div className="font-inter text-primary-foreground/80 text-sm">
                  <a 
                    href="https://wa.me/447832619068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    +44 7832 619068
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-primary-foreground/10"
      >
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-inter text-primary-foreground/60">
            <p>© 2025 UKDAA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Use
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};