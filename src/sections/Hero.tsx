// components/Hero.tsx
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
    // Added rounded corners to the main section
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 mx-4 lg:mx-8">
      {/* Container with rounded corners for the background image */}
      <div className="relative w-full h-full rounded-3xl lg:rounded-4xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/building-hero.jpg" // Replace with your actual background image
            alt="Auto Reach Innovations Background"
            fill
            className="object-cover rounded-3xl lg:rounded-4xl"
            priority
          />
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl lg:rounded-4xl"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-3 sm:px-4 py-2 mb-6 text-xs sm:text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              >
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Trusted by forward-thinking dealerships and automotive brands
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Drive More Car Sales <br className="hidden sm:block" />
                with Real-World <br className="hidden sm:block" />
                Lead Generation
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                We help dealerships and automotive brands generate qualified leads through trained field sales teams that engage customers where they are.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    href="/get-started"
                    onClick={handleGetStarted}
                    className="block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#ff5c5c] text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg text-center"
                  >
                    Get Started
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    href="/book-a-call"
                    onClick={handleBookCall}
                    className="block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg text-center"
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {/* Metric 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">42%</div>
                  <div className="text-sm text-white/80">Higher Conversion</div>
                </motion.div>
                
                {/* Metric 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">3.5x</div>
                  <div className="text-sm text-white/80">ROI Increase</div>
                </motion.div>
                
                {/* Metric 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/80">Dealerships</div>
                </motion.div>
                
                {/* Metric 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;