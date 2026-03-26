"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    // Handle Get Started action
    console.log("Get Started clicked");
  };

  const handleBookCall = () => {
    // Handle Book a Call action
    console.log("Book a Call clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Red Background Container with Rounded Edges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#ff5c5c] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-black bg-black/10 backdrop-blur-sm rounded-full border border-black/20"
              >
                <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                Trusted by forward-thinking dealerships and automotive brands
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
              >
                Drive More Car Sales <br className="hidden md:block" />
                with Real-World <br className="hidden md:block" />
                Lead Generation
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-black/80 mb-8 leading-relaxed"
              >
                We help dealerships and automotive brands generate qualified leads through trained field sales teams that engage customers where they are.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/get-started"
                    onClick={handleGetStarted}
                    className="px-8 py-4 bg-black text-[#ff5c5c] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/book-a-call"
                    onClick={handleBookCall}
                    className="px-8 py-4 bg-transparent text-black font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300 text-base md:text-lg"
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 pt-8 border-t border-black/20"
              >
                <p className="text-sm text-black/60 mb-6">Partnered with leading automotive brands</p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-12">
                  {/* Brand Logos */}
                  <div className="relative w-20 h-8">
                    <Image 
                      src="/assets/images/ari-logo.png"
                      alt="Auto Reach Innovations" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="relative w-20 h-8">
                    <Image 
                      src="/assets/images/ari-logo.png"
                      alt="Auto Reach Innovations" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="relative w-20 h-8">
                    <Image 
                      src="/assets/images/ari-logo.png"
                      alt="Auto Reach Innovations" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="relative w-20 h-8">
                    <Image 
                      src="/assets/images/ari-logo.png"
                      alt="Auto Reach Innovations" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Logo/Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full h-64 lg:h-80 flex items-center justify-center">
                {/* Logo Container with Background */}
                <div className="relative bg-black/10 rounded-2xl p-8 md:p-12 w-full h-full flex items-center justify-center">
                  <Image 
                    src="/assets/images/ari-logo.png"
                    alt="Auto Reach Innovations" 
                    width={180}
                    height={60}
                    className="w-auto h-auto max-w-full max-h-full"
                    priority
                  />
                </div>
                
                {/* Floating Elements - Lead Metrics */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">42%</div>
                    <div className="text-xs text-black/70">Higher Conversion</div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">3.5x</div>
                    <div className="text-xs text-black/70">ROI Increase</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;