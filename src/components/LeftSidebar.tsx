"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/constants/data';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeftSidebar = ({ isOpen, onClose }: LeftSidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const toggleSubmenu = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const sidebarVariants = {
    closed: { 
      x: '-100%',
      transition: { 
        type: 'spring',
        damping: 40,
        stiffness: 400
      }
    },
    open: { 
      x: 0,
      transition: { 
        type: 'spring',
        damping: 40,
        stiffness: 400
      }
    }
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          
          <motion.div
            ref={sidebarRef}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white z-50 shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sidebar-title"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
                <Link 
                  href="/" 
                  className="text-2xl font-bold text-white"
                  onClick={onClose}
                >
                  <img 
                    src="https://binghattiweb.imgix.net/logo.svg" 
                    alt="Binghatti" 
                    className="h-8 w-auto"
                  />
                </Link>
                <motion.button 
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <nav className="flex-1">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.id}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants}
                      className="group"
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-all duration-200 font-medium text-base group-hover:text-white ${
                          activeSubmenu === link.id ? 'text-amber-400' : ''
                        }`}
                        onClick={(e) => {
                          if (link.submenu) {
                            e.preventDefault();
                            toggleSubmenu(link.id);
                          } else {
                            onClose();
                          }
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-amber-400">
                            {link.icon}
                          </span>
                          <span>{link.title}</span>
                        </div>
                        {link.submenu && (
                          <ChevronRight 
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeSubmenu === link.id ? 'rotate-90' : ''
                            }`} 
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <div className="pt-6 mt-auto border-t border-gray-700">
                <div className="space-y-3">
                  <a 
                    href="tel:+97144200000"
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">+971 4 420 0000</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};