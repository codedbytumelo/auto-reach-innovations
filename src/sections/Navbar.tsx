// components/Navbar.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SVGProps } from "react";
import { useTheme } from "../app/context/ThemeContext";

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

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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
  const { theme, toggleTheme } = useTheme();
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
  
  const isDark = theme === 'dark';
  const logoSrc = isDark 
    ? "/assets/images/logos/Logo-dark.png" 
    : "/assets/images/logos/Logo-light.png";

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        hasScrolled 
          ? isDark 
            ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-neutral-800/50' 
            : 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-neutral-200/50'
          : isDark 
            ? 'bg-transparent border-b border-neutral-900'
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
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'border border-[#ff5c5c] text-[#ff5c5c] hover:bg-[#ff5c5c] hover:text-black'
                    : 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button 
                onClick={toggleMenu} 
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'border border-[#ff5c5c] text-[#ff5c5c] hover:bg-[#ff5c5c] hover:text-black' 
                    : 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
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
            className={`fixed inset-0 z-50 overflow-hidden ${
              isDark ? 'bg-[#ff5c5c]' : 'bg-[#ff5c5c]' // Changed from blue to brand red
            }`} 
            initial="hidden" 
            animate="visible" 
            exit="exit" 
            variants={menuVariants}
          >
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={closeMenu} 
                  className={`inline-flex items-center justify-center p-3 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-black text-[#ff5c5c] hover:bg-black/80' 
                      : 'bg-black text-[#ff5c5c] hover:bg-black/80' // Changed from white to black for light mode
                  }`}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex flex-col lg:flex-row h-full">
                <motion.div 
                  className="flex-1 lg:pr-12 overflow-y-auto scrollbar-thin scrollbar-thumb-black/30 scrollbar-track-black/10" 
                  variants={itemVariants}
                >
                  <div className="space-y-4 pb-8">
                    {['Home', 'How It Works', 'Services', 'Industries', 'About', 'Contact'].map((item) => (
                      <motion.div key={item} variants={itemVariants}>
                        <Link 
                          href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`} 
                          onClick={handleLinkClick} 
                          className={`block px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 ${
                            isDark
                              ? 'text-black border-black hover:bg-black hover:text-[#ff5c5c]'
                              : 'text-black border-black hover:bg-black hover:text-[#ff5c5c]' // Changed from white to black for light mode
                          }`}
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div variants={itemVariants} className="pt-4">
                      <Link 
                        href="#get-leads" 
                        onClick={handleLinkClick} 
                        className={`block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 text-center ${
                          isDark
                            ? 'bg-black text-[#ff5c5c] hover:bg-black/80'
                            : 'bg-black text-[#ff5c5c] hover:bg-black/80' // Changed from white to black for light mode
                        }`}
                      >
                        Get Leads
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div 
                  className={`hidden lg:block lg:w-96 lg:pl-12 lg:sticky lg:top-8 lg:h-fit border-l ${
                    isDark ? 'border-black/20' : 'border-black/20' // Changed from white/20 to black/20 for consistency
                  }`} 
                  variants={itemVariants}
                >
                  <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-black' : 'text-black'}`}>Start generating leads today</h3>
                  <p className={`mb-8 ${isDark ? 'text-black/70' : 'text-black/70'}`}>Our field sales and campaign activation solutions help you connect with potential customers and grow your automotive business. Get in touch with our team to learn more.</p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-black/10' : 'bg-black/10' // Changed from white/10 to black/10 for consistency
                      }`}>
                        <span className={`font-bold ${isDark ? 'text-black' : 'text-black'}`}>📧</span>
                      </div>
                      <div>
                        <div className={`font-medium ${isDark ? 'text-black' : 'text-black'}`}>Email</div>
                        <div className={isDark ? 'text-black/70' : 'text-black/70'}>sales@autoreachinnovations.co.za</div>
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