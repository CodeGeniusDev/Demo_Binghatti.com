import { navLinks } from "@/constants/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
];

const contactInfo = [
  { 
    icon: 'mail', 
    text: 'info@binghatti.com',
    href: 'mailto:info@binghatti.com'
  },
  { 
    icon: 'phone', 
    text: '+1 234 567 890',
    href: 'tel:+1234567890'
  },
  { 
    icon: 'map-pin', 
    text: 'Dubai, United Arab Emirates',
    href: '#'
  },
];

export const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <Image 
              src="https://binghattiweb.imgix.net/logo.svg" 
              alt="Binghatti" 
              width={160} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining luxury living through innovative design and exceptional service. 
            Creating iconic landmarks that stand the test of time.
          </p>
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={item.name}
              >
                <span className="sr-only">{item.name}</span>
                <i className={`fab fa-${item.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Projects */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Projects</h3>
          <ul className="mt-4 space-y-3">
            {[
              { name: 'Binghatti Avenue', href: '#' },
              { name: 'Binghatti Onyx', href: '#' },
              { name: 'Binghatti Creek', href: '#' },
              { name: 'Binghatti Hills', href: '#' },
              { name: 'View All Projects', href: '/projects', className: 'text-amber-400 hover:text-amber-300' },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-gray-400 hover:text-white text-sm transition-colors flex items-center",
                    item.className
                  )}
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="mt-4 space-y-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start">
                <i className={`fas fa-${item.icon} text-amber-400 mt-1 mr-3`}></i>
                <a 
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-6
          ">
            <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-800 text-white text-sm"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 rounded-r-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Binghatti. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
