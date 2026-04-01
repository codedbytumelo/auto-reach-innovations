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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLinkClick = () => closeMenu();
  
  // Using only the light mode logo
  const logoSrc = "/assets/images/logos/Logo-light.png";

  // New navigation items
  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Find My Car', href: '#find-my-car' },
    { name: 'Browse Deals', href: '#browse-deals' },
    { name: 'For Dealers', href: '#for-dealers' },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-neutral-200/50'
          : 'bg-transparent border-b border-neutral-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src={logoSrc} 
                  alt="Auto Reach Innovations" 
                  width={240} 
                  height={80} 
                  className="h-16 w-auto" 
                  priority 
                />
              </Link>
            </div>
            
            {/* Desktop Navigation - Hidden for now, but can be added back if needed */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#ff5c5c] font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#get-started"
                className="px-4 py-2 text-[#ff5c5c] border border-[#ff5c5c] rounded-full font-medium hover:bg-[#ff5c5c] hover:text-white transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                href="#sign-in"
                className="px-4 py-2 text-gray-700 border border-gray-700 rounded-full font-medium hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Sign In
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button 
                onClick={toggleMenu} 
                className="inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 overflow-hidden bg-white" 
            initial="hidden" 
            animate="visible" 
            exit="exit" 
            variants={menuVariants}
          >
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={closeMenu} 
                  className="inline-flex items-center justify-center p-3 rounded-lg transition-all duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex flex-col h-full">
                <motion.div 
                  className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" 
                  variants={itemVariants}
                >
                  <div className="space-y-4 pb-8">
                    {navItems.map((item) => (
                      <motion.div key={item.name} variants={itemVariants}>
                        <Link 
                          href={item.href} 
                          onClick={handleLinkClick} 
                          className="block px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 text-gray-700 border-gray-300 hover:border-[#ff5c5c] hover:text-[#ff5c5c]"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    
                    <motion.div variants={itemVariants} className="pt-4 space-y-4">
                      <Link 
                        href="#get-started" 
                        onClick={handleLinkClick} 
                        className="block px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 text-center bg-[#ff5c5c] text-white hover:bg-[#e74c3c]"
                      >
                        Get Started
                      </Link>
                      <Link 
                        href="#sign-in" 
                        onClick={handleLinkClick} 
                        className="block px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 text-center border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
                      >
                        Sign In
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-8 pt-8 border-t border-gray-200" 
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Find your perfect car</h3>
                  <p className="mb-6 text-gray-600">Tell us what you're looking for, and we'll connect you with trusted dealerships that have exactly what you need.</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff5c5c]/10">
                      <span className="text-[#ff5c5c]">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Need help?</div>
                      <div className="text-gray-600">Contact our support team</div>
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