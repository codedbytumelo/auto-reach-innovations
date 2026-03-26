"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
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
            ABOUT SECTION
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          Driving Automotive Growth Through Real-World Connections
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
            {/* Main Image - Woman at Desk */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/woman-at-desk.jpg"
                alt="Woman working at wooden desk with laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Secondary Image - Person with Tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 w-1/2 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-black shadow-xl"
            >
              <Image
                src="/assets/images/person-with-tablet.jpg"
                alt="Person holding tablet"
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
            {/* Black Background Container */}
            <div className="bg-black rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                ABOUT THE BRAND.
              </motion.h3>

              {/* Body Content */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/80 leading-relaxed"
                >
                  Auto Reach Innovations was born from a simple observation: in an increasingly digital world, the automotive industry was losing the power of human connection. While competitors chased online clicks and digital leads, we saw an untapped opportunity in real-world engagement.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/80 leading-relaxed"
                >
                  Our approach combines strategic location targeting, professionally trained field agents, and real-time data qualification to create a lead generation system that delivers 3x higher conversion rates than traditional digital methods. We don't just capture contacts—we capture intent.
                </motion.p>
                
               
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about/full-story"
                    className="inline-flex items-center px-8 py-4 bg-[#ff5c5c] text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
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