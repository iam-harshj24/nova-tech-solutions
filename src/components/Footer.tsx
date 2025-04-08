
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nitinova-blue text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">NiTiNova<span className="text-nitinova-teal">.tech</span></h3>
            <p className="mb-4 text-sm text-gray-300">
              Your end-to-end digital transformation partner, capable of supporting businesses at every stage of their digital journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-nitinova-teal">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-nitinova-teal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-nitinova-teal">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-nitinova-teal">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#digital-foundation" className="text-gray-300 hover:text-nitinova-teal">
                  Digital Foundation Services
                </Link>
              </li>
              <li>
                <Link to="/services#web-presence" className="text-gray-300 hover:text-nitinova-teal">
                  Web Presence Development
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="text-gray-300 hover:text-nitinova-teal">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#business-operations" className="text-gray-300 hover:text-nitinova-teal">
                  Business Operations Software
                </Link>
              </li>
              <li>
                <Link to="/services#custom-dev" className="text-gray-300 hover:text-nitinova-teal">
                  Custom Application Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-nitinova-teal">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-nitinova-teal">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-nitinova-teal">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-nitinova-teal">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-nitinova-teal">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-nitinova-teal" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-nitinova-teal" />
                <span className="text-gray-300">info@nitinova.tech</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-nitinova-teal" />
                <span className="text-gray-300">
                  123 Tech Boulevard, Innovation District,<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-nitinova-teal/30 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} NiTiNova.tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
