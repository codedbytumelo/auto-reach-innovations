// components/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden bg-white">
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
            ABOUT AUTO REACH INNOVATIONS
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
        >
          Helping You Buy the Right Car, <br className="hidden md:block" />
          Without the Hassle
        </motion.h2>

        {/* Content Container - Side by Side Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/car-buying-experience.jpg"
                alt="Happy car buyer with new car"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 w-1/2 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#ff5c5c] shadow-xl"
            >
              <Image
                src="/assets/images/dealership-consultation.jpg"
                alt="Car dealership consultation"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Container */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-200">
              {/* Content */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Auto Reach was built on a simple idea: buying a car shouldn't feel overwhelming.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Today, most people spend hours scrolling through listings, comparing options, and dealing with multiple dealerships often without knowing what's actually available or right for them.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  We do things differently.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Instead of making you search, Auto Reach brings the right options to you. We capture real buyer needs, match them with trusted dealerships, and connect you directly with sellers who are ready to help.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  No endless browsing. No guesswork. Just a simpler way to find your next car.
                </motion.p>
              </div>

              {/* CTA Button */}
              
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default About;
