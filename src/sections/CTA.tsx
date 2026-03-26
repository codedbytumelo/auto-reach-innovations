"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  const handleGetLeads = () => {
    // Handle Get Leads Now action
    console.log("Get Leads Now clicked");
  };

  const handleScheduleCall = () => {
    // Handle Schedule a Call action
    console.log("Schedule a Call clicked");
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-neutral-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#ff5c5c] bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            CTA SECTION
          </div>
        </motion.div>

        {/* Red Background Container with Rounded Edges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#ff5c5c] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 text-center">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
            >
              Ready to Fill Your Sales Pipeline?
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-black/80 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with Auto Reach Innovations and start generating real, qualified leads today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/get-leads"
                  onClick={handleGetLeads}
                  className="px-8 py-4 bg-black text-[#ff5c5c] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
                >
                  Get Leads Now
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/schedule-call"
                  onClick={handleScheduleCall}
                  className="px-8 py-4 bg-transparent text-black font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-[#ff5c5c] transition-all duration-300 text-base md:text-lg"
                >
                  Schedule a Call
                </Link>
              </motion.div>
            </motion.div>

            {/* Additional Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-black/20"
            >
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-black font-medium">No long-term contracts</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-black font-medium">Results guaranteed</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-black font-medium">Quick setup</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default CTA;