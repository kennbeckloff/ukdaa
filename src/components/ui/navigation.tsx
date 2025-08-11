import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { 
    label: 'Our Work', 
    href: '#our-work',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Inequality', href: '#inequality' },
      { label: 'Democracy', href: '#democracy' },
      { label: 'Technology', href: '#technology' },
      { label: 'Creativity', href: '#creativity' }
    ]
  },
  { 
    label: 'Grants', 
    href: '#grants',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Apply for Grants', href: '#apply' },
      { label: 'Search Grants', href: '#search' },
      { label: 'Funding Criteria', href: '/funding-criteria' },
      { label: 'Grant Database', href: '#database' }
    ]
  },
  { label: 'Ideas', href: '#ideas' },
  { 
    label: 'People', 
    href: '#people',
    hasDropdown: true,
    dropdownItems: [
      { label: 'UKDAA Staff', href: '#staff' }
    ]
  },
  { label: 'News', href: '#news' },
  { label: 'About', href: '/about' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      // Page navigation
      navigate(href);
    } else {
      // Section navigation (only works on home page)
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/ee62cf46-2639-4388-ba46-b8411f6d264d.png" 
              alt="UKDAA Logo" 
              className="h-8 lg:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.hasDropdown ? item.label : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  onClick={() => handleNavigation(item.href)}
                  className="flex items-center gap-1 px-3 py-2 font-inter text-foreground hover:text-primary transition-colors duration-200 relative group"
                  aria-label={`Navigate to ${item.label}`}
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 py-2 bg-background shadow-elevated rounded-lg border border-border min-w-48"
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => handleNavigation(dropdownItem.href)}
                          className="block w-full text-left px-4 py-2 font-inter text-foreground hover:bg-secondary hover:text-primary transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-4"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium">
                Donate
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left font-inter text-foreground hover:text-primary transition-colors duration-200 px-4 py-3"
                    >
                      {item.label}
                    </button>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="pl-8 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="block w-full text-left font-inter text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2 text-sm"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium">
                    Donate
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};