"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  const handleGetStarted = () => {
    // Handle Get Started action
    console.log("Get Started clicked");
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-black">
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
           CALL TO ACTION
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
          Simple. Scalable. Results-Driven.
        </motion.h2>

        {/* Red Background Container with Rounded Edges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-[#ff5c5c] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Main Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
              >
                We Don't Just Generate Leads <br className="hidden md:block" />
                — We Deliver Buyers
              </motion.h3>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-black/80 mb-8 leading-relaxed"
              >
                Auto Reach Innovations connects your dealership with real, interested customers through strategic, on-the-ground engagement. Our field sales teams operate in high-traffic areas, events, and targeted zones to capture quality leads ready to convert.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
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
              </motion.div>
            </div>

            {/* Right Content - Key Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Why Choose Auto Reach Innovations</h3>
                
                <div className="space-y-4">
                  {/* Key Point 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#ff5c5c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black">Human-first engagement</h4>
                      <p className="text-black/70">Not cold clicks - our teams build real connections with potential buyers</p>
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
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#ff5c5c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black">Real-time lead capture</h4>
                      <p className="text-black/70">Instant qualification and delivery of leads to your sales team</p>
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
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#ff5c5c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black">Qualified, intent-driven prospects</h4>
                      <p className="text-black/70">We filter for serious buyers, not just casual browsers</p>
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
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#ff5c5c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black">Scalable campaigns across regions</h4>
                      <p className="text-black/70">Expand your reach without opening new locations</p>
                    </div>
                  </motion.div>
                </div>
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

export default CallToAction;