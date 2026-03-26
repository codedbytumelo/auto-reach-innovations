// components/Navbar.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-4 h-4 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Service Icons
const FieldSalesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CampaignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const DataCollectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ExpansionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Industry Icons
const CarDealershipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AutomotiveBrandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const FinancingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InsuranceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FleetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const submenuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

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
    setExpandedMenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedMenu(null);
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
                <span className="ml-3 text-xl font-bold text-white">Auto Reach Innovations</span>
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
                {/* Left Side - Navigation Items */}
                <motion.div 
                  className="flex-1 lg:pr-12"
                  variants={itemVariants}
                >
                  <div className="space-y-4">
                    {/* Home */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/"
                        onClick={handleLinkClick}
                        className={`block px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 ${
                          pathname === "/" 
                            ? "bg-black text-[#ff5c5c] border-black" 
                            : "text-black border-black hover:bg-black hover:text-[#ff5c5c]"
                        }`}
                      >
                        Home
                      </Link>
                    </motion.div>

                    {/* How It Works */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/how-it-works"
                        onClick={handleLinkClick}
                        className={`block px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 ${
                          pathname === "/how-it-works" 
                            ? "bg-black text-[#ff5c5c] border-black" 
                            : "text-black border-black hover:bg-black hover:text-[#ff5c5c]"
                        }`}
                      >
                        How It Works
                      </Link>
                    </motion.div>

                    {/* Services with Dropdown */}
                    <motion.div variants={itemVariants}>
                      <button
                        onClick={() => toggleSubmenu('services')}
                        className={`w-full px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                          expandedMenu === 'services'
                            ? "bg-black text-[#ff5c5c] border-black"
                            : "text-black border-black hover:bg-black hover:text-[#ff5c5c]"
                        }`}
                      >
                        <span>Services</span>
                        <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${expandedMenu === 'services' ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMenu === 'services' && (
                          <motion.div
                            className="mt-2 ml-4 space-y-2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={submenuVariants}
                          >
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/services/field-sales-lead-generation"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <FieldSalesIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Field Sales Lead Generation</div>
                                    <div className="text-sm text-black/60 mt-1">We deploy professional agents to engage and convert potential buyers in person.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/services/campaign-activation"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <CampaignIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Campaign Activation</div>
                                    <div className="text-sm text-black/60 mt-1">Launch targeted campaigns in malls, events, transport hubs, and urban hotspots.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/services/data-collection-qualification"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <DataCollectionIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Data Collection & Qualification</div>
                                    <div className="text-sm text-black/60 mt-1">We don't just collect data — we qualify interest, intent, and readiness.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/services/regional-expansion-campaigns"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <ExpansionIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Regional Expansion Campaigns</div>
                                    <div className="text-sm text-black/60 mt-1">Expand your dealership's reach into new territories without opening new branches.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Industries with Dropdown */}
                    <motion.div variants={itemVariants}>
                      <button
                        onClick={() => toggleSubmenu('industries')}
                        className={`w-full px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                          expandedMenu === 'industries'
                            ? "bg-black text-[#ff5c5c] border-black"
                            : "text-black border-black hover:bg-black hover:text-[#ff5c5c]"
                        }`}
                      >
                        <span>Industries</span>
                        <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${expandedMenu === 'industries' ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMenu === 'industries' && (
                          <motion.div
                            className="mt-2 ml-4 space-y-2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={submenuVariants}
                          >
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/industries/car-dealerships"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <CarDealershipIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Car Dealerships</div>
                                    <div className="text-sm text-black/60 mt-1">Generate qualified leads for new and used car sales.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/industries/automotive-brands"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <AutomotiveBrandIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Automotive Brands</div>
                                    <div className="text-sm text-black/60 mt-1">Drive brand awareness and customer engagement.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/industries/vehicle-financing"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <FinancingIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Vehicle Financing Companies</div>
                                    <div className="text-sm text-black/60 mt-1">Connect with customers seeking vehicle financing options.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/industries/insurance-providers"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <InsuranceIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Insurance Providers</div>
                                    <div className="text-sm text-black/60 mt-1">Reach customers looking for auto insurance coverage.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                              <Link
                                href="/industries/fleet-mobility"
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-black hover:bg-black/10 rounded-lg transition-colors duration-200"
                              >
                                <div className="flex items-start">
                                  <FleetIcon className="mr-3 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium">Fleet & Mobility Companies</div>
                                    <div className="text-sm text-black/60 mt-1">Connect with businesses needing fleet solutions.</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* About */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/about"
                        onClick={handleLinkClick}
                        className={`block px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 ${
                          pathname === "/about" 
                            ? "bg-black text-[#ff5c5c] border-black" 
                            : "text-black border-black hover:bg-black hover:text-[#ff5c5c]"
                        }`}
                      >
                        About
                      </Link>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className={`block px-6 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-300 ${
                          pathname === "/contact" 
                            ? "bg-black text-[#ff5c5c] border-black" 
                            : "text-black border-black hover:bg-black hover:text-[#ff5c5c]"
                        }`}
                      >
                        Contact
                      </Link>
                    </motion.div>

                    {/* Get Leads Button */}
                    <motion.div variants={itemVariants} className="pt-4">
                      <Link
                        href="/get-leads"
                        onClick={handleLinkClick}
                        className="block px-8 py-4 bg-black text-[#ff5c5c] text-lg font-semibold rounded-lg hover:bg-black/80 transition-all duration-300 text-center"
                      >
                        Get Leads
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Additional Content */}
                <motion.div 
                  className="hidden lg:block lg:w-96 lg:pl-12 border-l border-black/20"
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
                        <div className="text-black/70">autoreachinnovations@gmail.com</div>
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