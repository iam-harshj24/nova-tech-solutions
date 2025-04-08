
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-nitinova-blue">NiTiNova</span>
              <span className="text-sm font-medium text-nitinova-teal">.tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-nitinova-blue hover:text-nitinova-teal transition-colors">
              Home
            </Link>
            <Link to="/services" className="px-3 py-2 text-sm font-medium text-nitinova-blue hover:text-nitinova-teal transition-colors">
              Services
            </Link>
            <Link to="/packages" className="px-3 py-2 text-sm font-medium text-nitinova-blue hover:text-nitinova-teal transition-colors">
              Packages
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-nitinova-blue hover:text-nitinova-teal transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-nitinova-blue hover:text-nitinova-teal transition-colors">
              Contact
            </Link>
            <Button className="ml-4 bg-nitinova-teal hover:bg-nitinova-blue text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-nitinova-blue hover:text-nitinova-teal focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-nitinova-blue hover:text-nitinova-teal"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block px-3 py-2 rounded-md text-base font-medium text-nitinova-blue hover:text-nitinova-teal"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/packages" 
            className="block px-3 py-2 rounded-md text-base font-medium text-nitinova-blue hover:text-nitinova-teal"
            onClick={() => setIsOpen(false)}
          >
            Packages
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-nitinova-blue hover:text-nitinova-teal"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-nitinova-blue hover:text-nitinova-teal"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button className="w-full mt-3 bg-nitinova-teal hover:bg-nitinova-blue text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
