"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  // Smooth scroll function for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Get the target element
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get navbar height for offset
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      
      // Calculate scroll position with offset
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Brand + Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-1"
          >
            <div className="flex items-center">
              <Image 
                src="/assets/images/logos/Logo-dark.png"
                alt="Auto Reach Innovations" 
                width={180}
                height={160}
                className="h-10 w-auto"
              />
            </div>
            
            <h3 className="text-lg font-semibold text-white">
              Find Your Next Car, Without the Hassle
            </h3>
            
            <p className="text-sm text-white/70 leading-relaxed">
              Auto Reach connects you with trusted dealerships that have the right cars for your needs — no endless searching, no guesswork.
            </p>
            
            {/* Primary Footer CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <a
                href="#find-my-car"
                onClick={(e) => handleAnchorClick(e, '#find-my-car')}
                className="inline-flex items-center px-6 py-3 bg-[#ff5c5c] text-black font-semibold rounded-lg hover:bg-[#ff5c5c]/90 transition-all duration-300"
              >
                Find My Car
              </a>
            </motion.div>
          </motion.div>

          {/* Column 2 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="about-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#for-dealerships" 
                  onClick={(e) => handleAnchorClick(e, '#for-dealerships')}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  For Dealerships
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - For Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">For Buyers</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#find-my-car" 
                  onClick={(e) => handleAnchorClick(e, '#find-my-car')}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  Find My Car
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  onClick={(e) => handleAnchorClick(e, '#faqs')}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - For Dealers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">For Dealers</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#for-dealerships" 
                  onClick={(e) => handleAnchorClick(e, '#for-dealerships')}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="text-sm text-white/70 hover:text-[#ff5c5c] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            <span className="text-[#ff5c5c] mr-3 text-xl">📧</span>
            <div>
              <p className="text-sm text-white/70">Email:</p>
              <a href="mailto:hello@autoreachinnovations.co.za" className="text-sm text-white hover:text-[#ff5c5c] transition-colors duration-300">
                sales@autoreachinnovations.co.za
              </a>
            </div>
          </motion.div>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            <span className="text-[#ff5c5c] mr-3 text-xl">📍</span>
            <div>
              <p className="text-sm text-white/70">Location:</p>
              <p className="text-sm text-white">Johannesburg, South Africa</p>
            </div>
          </motion.div>
        </div>

        {/* Secondary (Subtle Dealer CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
         
        </motion.div>

        {/* Bottom Section - Copyright and Social Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-0"
            >
              <p className="text-sm text-white/50">
                © 2026 Auto Reach Innovations. All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              <a href="#" className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              
              <a href="#" className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a href="#" className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="#" className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;