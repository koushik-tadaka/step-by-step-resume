
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                EduSpark
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">
              EduSpark is a leading global online learning platform that offers anyone, anywhere, access to online courses from world-class universities and companies.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>
          
          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <FooterLink href="/categories/development">Development</FooterLink>
              <FooterLink href="/categories/business">Business</FooterLink>
              <FooterLink href="/categories/finance">Finance & Accounting</FooterLink>
              <FooterLink href="/categories/it">IT & Software</FooterLink>
              <FooterLink href="/categories/design">Design</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EduSpark. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 border border-gray-700 rounded py-2 px-4 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <Link to={href} className="hover:text-indigo-400 transition-colors">
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="bg-gray-800 hover:bg-indigo-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
