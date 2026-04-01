// components/Hero.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleFindMyCar = () => {
    // Handle Find My Car action
    console.log("Find My Car clicked");
  };

  const handleHowItWorks = () => {
    // Handle How It Works action
    console.log("How It Works clicked");
  };

  return (
    // Added rounded corners to the main section
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 mx-4 lg:mx-8">
      {/* Container with rounded corners for the background image */}
      <div className="relative w-full h-full rounded-3xl lg:rounded-4xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/car-hero.jpg" // Replace with your actual background image
            alt="Auto Reach Innovations Background"
            fill
            className="object-cover rounded-3xl lg:rounded-4xl"
            priority
          />
        </div>
        
        {/* Subtle white overlay for better text readability (instead of black) */}
        <div className="absolute inset-0 bg-white/30 z-10 rounded-3xl lg:rounded-4xl"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 mb-6 text-xs sm:text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 shadow-sm"
            >
              100% free. No pressure. Just better car buying.
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg"
            >
              Find the Right Car <br className="hidden sm:block" />
              <span style={{ color: "#ff5c5c" }}>Without the Runaround</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 leading-relaxed max-w-3xl drop-shadow-md bg-white/60 backdrop-blur-sm rounded-lg p-4"
            >
              Tell us what you're looking for, and we'll connect you with trusted dealerships that have exactly what you need — no endless searching, no pressure, just real options from real sellers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/find-my-car"
                  onClick={handleFindMyCar}
                  className="block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg text-center"
                  style={{ backgroundColor: "#ff5c5c" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e74c3c"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ff5c5c"}
                >
                  Find My Car
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/how-it-works"
                  onClick={handleHowItWorks}
                  className="block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/90 font-semibold rounded-full border-2 transition-all duration-300 text-base sm:text-lg text-center backdrop-blur-sm"
                  style={{ color: "#ff5c5c", borderColor: "#ff5c5c" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff5c5c";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                    e.currentTarget.style.color = "#ff5c5c";
                  }}
                >
                  How It Works
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;