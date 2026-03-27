// components/Navbar.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SVGProps } from "react";

// Icon components
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-6 h-6 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-6 h-6 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Animation variants
const menuVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      {/* Main Navigation Bar - Only Logo and Menu Toggle */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-neutral-800/50' 
          : 'bg-transparent border-b border-neutral-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/assets/images/ari-logo.png" // Update with your logo path
                  alt="Auto Reach Innovations" 
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg border border-[#ff5c5c] text-[#ff5c5c] hover:bg-[#ff5c5c] hover:text-black transition-all duration-300"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#ff5c5c] overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center p-3 rounded-lg bg-black text-[#ff5c5c] hover:bg-black/80 transition-all duration-300"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Side - Scrollable Navigation Items */}
                <motion.div 
                  className="flex-1 lg:pr-12 overflow-y-auto scrollbar-thin scrollbar-thumb-black/30 scrollbar-track-black/10"
                  variants={itemVariants}
                >
                  <div className="space-y-4 pb-8">
                    {/* Home */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/"
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-lg font-medium rounded-lg border-2 text-black border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300"
                      >
                        Home
                      </Link>
                    </motion.div>

                    {/* How It Works */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="#how-it-works"
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-lg font-medium rounded-lg border-2 text-black border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300"
                      >
                        How It Works
                      </Link>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="#services"
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-lg font-medium rounded-lg border-2 text-black border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300"
                      >
                        Services
                      </Link>
                    </motion.div>

                    {/* Industries */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="#industries"
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-lg font-medium rounded-lg border-2 text-black border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300"
                      >
                        Industries
                      </Link>
                    </motion.div>

                    {/* About */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="#about"
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-lg font-medium rounded-lg border-2 text-black border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300"
                      >
                        About
                      </Link>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="#contact"
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-lg font-medium rounded-lg border-2 text-black border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300"
                      >
                        Contact
                      </Link>
                    </motion.div>

                    {/* Get Leads Button */}
                    <motion.div variants={itemVariants} className="pt-4">
                      <Link
                        href="#get-leads"
                        onClick={handleLinkClick}
                        className="block px-8 py-4 bg-black text-[#ff5c5c] text-lg font-semibold rounded-lg hover:bg-black/80 transition-all duration-300 text-center"
                      >
                        Get Leads
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Fixed Content */}
                <motion.div 
                  className="hidden lg:block lg:w-96 lg:pl-12 lg:sticky lg:top-8 lg:h-fit border-l border-black/20"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl font-bold text-black mb-6">Start generating leads today</h3>
                  <p className="text-black/70 mb-8">
                    Our field sales and campaign activation solutions help you connect with potential customers and grow your automotive business. Get in touch with our team to learn more.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold">📧</span>
                      </div>
                      <div>
                        <div className="font-medium text-black">Email</div>
                        <div className="text-black/70">sales@autoreachinnovations.co.za</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold">📞</span>
                      </div>
                      <div>
                        <div className="font-medium text-black">Phone</div>
                        <div className="text-black/70">+1 (555) 987-6543</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}