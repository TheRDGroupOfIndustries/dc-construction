import React from 'react';
import Link from 'next/link';
// Import Lucide icons for consistency
import { Facebook, Instagram, Linkedin } from 'lucide-react';

// --- Data for Footer Links ---
const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const servicesLinks = [
  'Residential Projects',
  'Commercial Projects',
  'Renovations',
  'Interior Design',
  'Project Management',
];

const socialLinks = [
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Linkedin, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info & Socials */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-pacifico mb-4">
              D & R Constructions
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Building Dreams, Designing Futures in Varanasi. We combine traditional craftsmanship with modern innovation to create exceptional spaces.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} legacyBehavior>
                    <a className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            D & R Constructions and Design – Building with Trust in Varanasi
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
             © {new Date().getFullYear()} D & R Constructions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;