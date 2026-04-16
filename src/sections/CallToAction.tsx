// components/CallToAction.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  const handleFindMyCar = () => {
    // Handle Find My Car action
    console.log("Find My Car clicked");
  };

  const handleHowItWorks = () => {
    // Handle How It Works action
    console.log("How It Works clicked");
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/Audi Dealership.jpg')" }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Content Container with Rounded Edges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Main Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Stop Searching. <br className="hidden md:block" />
                Start Driving.
              </motion.h3>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                Tell us what you're looking for, and we'll connect you with dealerships that already have the right options,its simple, fast, and built around you.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={handleFindMyCar}
                  className="px-8 py-3 bg-[#ff5c5c] text-white font-medium rounded-lg hover:bg-red-600 transition-colors shadow-lg"
                >
                  Find My Car
                </button>
                <button
                  onClick={handleHowItWorks}
                  className="px-8 py-3 bg-white/20 text-white font-medium rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
                >
                  How It Works
                </button>
              </motion.div>

              {/* Closing Line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-white/90 mt-8 leading-relaxed font-medium"
              >
                The smarter, easier way to find your next car starts here.
              </motion.p>
            </div>

            {/* Right Content - Key Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Why Use Auto Reach</h3>
                
                <div className="space-y-4">
                  {/* Key Point 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#ff5c5c] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">No endless browsing</h4>
                      <p className="text-white/70">Skip hundreds of listings and get straight to real options.</p>
                    </div>
                  </motion.div>

                  {/* Key Point 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#ff5c5c] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Matched to your needs</h4>
                      <p className="text-white/70">We connect you with cars that fit your budget and preferences.</p>
                    </div>
                  </motion.div>

                  {/* Key Point 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#ff5c5c] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Trusted dealerships only</h4>
                      <p className="text-white/70">Work with verified dealers you can rely on.</p>
                    </div>
                  </motion.div>

                  {/* Key Point 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#ff5c5c] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">100% free to use</h4>
                      <p className="text-white/70">No fees, no pressure — just a better way to buy.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;