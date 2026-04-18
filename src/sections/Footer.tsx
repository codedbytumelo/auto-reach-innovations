// components/Footer.tsx
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
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/autoreachinnovationssa?igsh=MXhqd3Zhb2hsem45ZA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth={2}/>
                  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth={2}/>
                  <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61570969408869" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/AutoReach_SA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#ff5c5c] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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