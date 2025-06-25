// "use client";

// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { X, Phone, Mail, MapPin } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { navLinks } from '@/constants/navigation';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   // Handle body scroll and keyboard events
//   useEffect(() => {
//     // Lock body scroll when sidebar is open
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//       document.addEventListener('keydown', handleEscape);
//     } else {
//       document.body.style.overflow = 'unset';
//       document.removeEventListener('keydown', handleEscape);
//     }

//     // Clean up event listeners
//     return () => {
//       document.body.style.overflow = 'unset';
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, [isOpen]);

//   // Close sidebar on Escape key press
//   const handleEscape = (e: KeyboardEvent) => {
//     if (e.key === 'Escape') {
//       onClose();
//     }
//   };

//   // Animation variants
//   const backdropVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   const sidebarVariants = {
//     hidden: { x: '100%' },
//     visible: { 
//       x: 0,
//       transition: { 
//         type: 'spring', 
//         damping: 30, 
//         stiffness: 300 
//       }
//     },
//     exit: { 
//       x: '100%',
//       transition: { 
//         type: 'spring', 
//         damping: 30, 
//         stiffness: 300 
//       } 
//     }
//   };

//   const linkVariants = {
//     hidden: { x: 20, opacity: 0 },
//     visible: (i: number) => ({
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: 0.1 + i * 0.05,
//         type: 'spring',
//         stiffness: 100
//       }
//     })
//   };

//   // Add animation delay based on index
//   const getDelay = (index: number) => ({
//     transition: { delay: 0.5 + index * 0.05 }
//   });

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop with animation */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={backdropVariants}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
//             onClick={onClose}
//             aria-hidden="true"
//           />
          
//           {/* Sidebar with animation */}
//           <motion.div
//             ref={sidebarRef}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={sidebarVariants}
//             className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl overflow-y-auto"
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="sidebar-title"
//           >
//             <div className="p-6 h-full flex flex-col">
//               {/* Header */}
//               <div className="flex justify-between items-center mb-8">
//                 <Link 
//                   href="/" 
//                   className="text-2xl font-bold text-gray-900" 
//                   onClick={onClose}
//                 >
//                   <img 
//                     src="https://binghattiweb.imgix.net/logo.svg" 
//                     alt="Binghatti" 
//                     className="h-8 w-auto transition-transform duration-200 hover:scale-105"
//                   />
//                 </Link>
//                 <motion.button 
//                   onClick={onClose}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
//                   aria-label="Close menu"
//                 >
//                   <X className="w-6 h-6" />
//                 </motion.button>
//               </div>
              
//               {/* Navigation Links */}
//               <nav className="flex-1">
//                 <ul className="space-y-1">
//                   {navLinks.map((link, index) => (
//                     <motion.li 
//                       key={link.href}
//                       custom={index}
//                       initial="hidden"
//                       animate="visible"
//                       variants={linkVariants}
//                       whileHover={{ x: 5 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <Link
//                         href={link.href}
//                         className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg"
//                         onClick={onClose}
//                       >
//                         {link.label}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </nav>
              
//               {/* Contact Info */}
//               <motion.div 
//                 className="pt-6 mt-auto border-t border-gray-100 space-y-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                   Contact Us
//                 </h3>
                
//                 <div className="space-y-3">
//                   <a 
//                     href="tel:+97144200000"
//                     className="flex items-center text-gray-700 hover:text-amber-500 transition-colors group"
//                   >
//                     <Phone className="w-5 h-5 mr-3 text-amber-500 group-hover:scale-110 transition-transform" />
//                     <span className="font-medium">+971 4 420 0000</span>
//                   </a>
                  
//                   <a 
//                     href="mailto:info@binghatti.com" 
//                     className="flex items-center text-gray-700 hover:text-amber-500 transition-colors group"
//                   >
//                     <Mail className="w-5 h-5 mr-3 text-amber-500 group-hover:scale-110 transition-transform" />
//                     <span>info@binghatti.com</span>
//                   </a>
                  
//                   <div className="flex items-start">
//                     <MapPin className="w-5 h-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-600">
//                       Binghatti Developers, Dubai,<br />
//                       United Arab Emirates
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="pt-4 flex space-x-4">
//                   {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
//                     <a 
//                       key={social}
//                       href="#" 
//                       className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
//                       aria-label={social}
//                     >
//                       <i className={`fab fa-${social} text-lg`} />
//                     </a>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };
