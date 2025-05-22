
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
                EduSpark
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <div className="relative group">
              <button className="inline-flex items-center text-gray-700 hover:text-indigo-600 px-1 pt-1 text-sm font-medium">
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <NavDropdownLink href="/categories/development">Development</NavDropdownLink>
                <NavDropdownLink href="/categories/business">Business</NavDropdownLink>
                <NavDropdownLink href="/categories/design">Design</NavDropdownLink>
                <NavDropdownLink href="/categories/marketing">Marketing</NavDropdownLink>
              </div>
            </div>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
              Log in
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Sign up
            </Button>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/courses">Courses</MobileNavLink>
            <MobileNavLink href="/categories">Categories</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Button variant="outline" className="w-full text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                Log in
              </Button>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-800">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link 
      to={href} 
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
    >
      {children}
    </Link>
  );
};

const NavDropdownLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link 
      to={href} 
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link 
      to={href} 
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
};

export default Navbar;
