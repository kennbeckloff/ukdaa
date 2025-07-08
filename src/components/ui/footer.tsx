import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-bold text-accent mb-4">
              Azure Haven
            </h3>
            <p className="font-lora text-primary-foreground/80 leading-relaxed mb-6">
              Where luxury meets paradise. Experience unparalleled hospitality and create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-xl font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-lora">
              {[
                { label: 'Suites & Villas', href: '#suites' },
                { label: 'Dining', href: '#dining' },
                { label: 'Spa & Wellness', href: '#spa' },
                { label: 'Activities', href: '#activities' },
                { label: 'Gallery', href: '#gallery' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-xl font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2 font-lora text-primary-foreground/80">
              <li>Concierge Service</li>
              <li>Airport Transfers</li>
              <li>Private Dining</li>
              <li>Helicopter Tours</li>
              <li>Water Sports</li>
              <li>Event Planning</li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-xl font-bold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-accent flex-shrink-0" size={20} />
                <div className="font-lora text-primary-foreground/80">
                  <p>Paradise Island</p>
                  <p>Maldives, 20026</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <div className="font-lora text-primary-foreground/80">
                  <p>+1 (555) 123-AZURE</p>
                  <p>+1 (555) 123-2987</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <div className="font-lora text-primary-foreground/80">
                  <p>info@azurehaven.com</p>
                  <p>reservations@azurehaven.com</p>
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
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-primary-foreground/10"
      >
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-lora text-primary-foreground/60">
            <p>© {currentYear} Azure Haven Resort & Spa. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};