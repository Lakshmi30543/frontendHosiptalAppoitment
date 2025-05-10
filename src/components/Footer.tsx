import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-green-400" />
              <span className="ml-2 text-xl font-bold">MediCare</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare services with compassion and expertise since 2005. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/signin" className="text-gray-300 hover:text-green-400 transition-colors">Patient Portal</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-green-400 transition-colors">Primary Care</li>
              <li className="text-gray-300 hover:text-green-400 transition-colors">Cardiology</li>
              <li className="text-gray-300 hover:text-green-400 transition-colors">Pediatrics</li>
              <li className="text-gray-300 hover:text-green-400 transition-colors">Neurology</li>
              <li className="text-gray-300 hover:text-green-400 transition-colors">Orthopedics</li>
              <li className="text-gray-300 hover:text-green-400 transition-colors">Mental Health</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">123 Medical Center Blvd, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@medicare-health.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Monday - Friday: 8am - 8pm</p>
                  <p>Saturday: 9am - 5pm</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MediCare Health Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;