// components/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: "/1",
      title: "Strategy",
      description: "We identify your target market, locations, and campaign goals."
    },
    {
      number: "/2",
      title: "Deployment",
      description: "Our trained field agents engage potential buyers in high-impact environments."
    },
    {
      number: "/3",
      title: "Lead Capture",
      description: "We collect verified customer data and buying intent in real-time."
    },
    {
      number: "/4",
      title: "Delivery",
      description: "Leads are delivered directly to your sales team for immediate follow-up."
    }
  ];

  return (
    // 1. Update the main section background to be white in light mode and black in dark mode
    <section id="how-it-works" className="relative py-20 md:py-24 overflow-hidden bg-neutral-100 dark:bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Badge looks fine on its own, no changes needed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#ff5c5c] bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            HOW IT WORKS
          </div>
        </motion.div>

        {/* 2. Update the main headline color */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-16"
        >
          Simple. Scalable. Results-Driven.
        </motion.h2>

        {/* Red Background Container with Modules - Stays the same */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-[#ff5c5c] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements - Stays the same */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            {/* DELIVERABLES Title - Empty, no changes needed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
            </motion.div>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* 3. Update the Black Module background for a subtle light-mode variation */}
                  <div className="bg-neutral-900 dark:bg-black rounded-2xl p-6 h-full flex flex-col">
                    {/* Number with Slash - Stays the same, good contrast on red */}
                    <div className="text-3xl md:text-4xl font-bold text-[#ff5c5c] mb-4">
                      {step.number}
                    </div>
                    
                    {/* Title - Stays the same, good contrast on dark module */}
                    <h4 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h4>
                    
                    {/* Description - Stays the same, good contrast on dark module */}
                    <p className="text-white/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Additional text - Stays the same, good contrast on dark module */}
                    <p className="text-white/60 text-xs mt-4 leading-relaxed">
                      Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>

      {/* 4. Update Background Pattern - Adjust opacity for better visibility in light mode */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;