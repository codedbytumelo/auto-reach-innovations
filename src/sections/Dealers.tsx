// components/Dealers.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Dealers = () => {
  const handleForDealers = () => {
    // Handle For Dealers action
    console.log("For Dealers clicked");
  };

  const handleLearnMore = () => {
    // Handle Learn More action
    console.log("Learn More clicked");
  };

  return (
    <section id="dealers" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 mb-4 text-xs sm:text-sm font-medium text-[#ff5c5c] bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            WANT TO PARTNER WITH US?
          </div>
        </motion.div>

        {/* Red Background Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#ff5c5c] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-16 sm:-translate-y-24 md:-translate-y-32 translate-x-16 sm:translate-x-24 md:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-16 sm:translate-y-24 md:translate-y-32 translate-x-16 sm:translate-x-24 md:translate-x-32"></div>
          
          <div className="relative z-10 text-center">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
            >
              Are You a Dealership?
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-black/80 mb-8 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
            >
              Connect with real buyers in your area who are actively looking for cars like yours — without relying on listings or cold leads.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center max-w-md mx-auto sm:max-w-none"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/for-dealers"
                  onClick={handleForDealers}
                  className="block w-full px-8 py-4 sm:px-10 bg-black text-[#ff5c5c] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg sm:text-xl text-center transform hover:scale-105"
                >
                  For Dealers
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/learn-more"
                  onClick={handleLearnMore}
                  className="block w-full px-8 py-4 sm:px-10 bg-white text-black font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg sm:text-xl text-center border-2 border-black/20 hover:border-black transform hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="mt-12 sm:mt-16"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Dealers;