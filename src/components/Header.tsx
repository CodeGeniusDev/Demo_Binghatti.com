"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { LeftSidebar } from './LeftSidebar';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left side - Menu Button */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-white hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <span className="ml-2 text-sm font-medium text-gray-300 hidden sm:inline-block">Menu</span>
            </div>
            
            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <Link 
                href="/" 
                className="block transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="https://binghattiweb.imgix.net/logo.svg" 
                  alt="Binghatti" 
                  width={160} 
                  height={40}
                  className={`transition-all duration-300 ${scrolled ? 'h-9' : 'h-10'}`}
                  priority
                />
              </Link>
            </div>
            
            {/* Right side - Placeholder for other actions */}
            <div className="w-10">
              {/* This empty div helps center the logo */}
            </div>
          </div>
        </div>
      </header>
      
      {/* Add padding to account for fixed header */}
      <div className={`h-18 transition-all duration-300 ${scrolled ? 'h-16' : ''}`} />
      
      {/* Left Sidebar */}
      <LeftSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;