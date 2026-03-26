"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      number: "/1",
      title: "Field Sales Lead Generation",
      description: "We deploy professional agents to engage and convert potential buyers in person."
    },
    {
      number: "/2",
      title: "Campaign Activation",
      description: "Launch targeted campaigns in malls, events, transport hubs, and urban hotspots."
    },
    {
      number: "/3",
      title: "Data Collection & Qualification",
      description: "We don't just collect data — we qualify interest, intent, and readiness."
    },
    {
      number: "/4",
      title: "Regional Expansion Campaigns",
      description: "Expand your dealership's reach into new territories without opening new branches."
    }
  ];

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
            SERVICES SECTION
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
          Built to Fuel Your Sales Pipeline
        </motion.h2>

        {/* Red Background Container with Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-[#ff5c5c] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            {/* DELIVERABLES Title - Large and Prominent */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight">
                DELIVERABLES
              </h3>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Black Module */}
                  <div className={`bg-black rounded-2xl p-6 md:p-8 h-full flex flex-col ${
                    index === 2 ? 'border-4 border-[#ff5c5c]' : ''
                  }`}>
                    {/* Number with Slash */}
                    <div className="text-3xl md:text-4xl font-bold text-[#ff5c5c] mb-4">
                      {service.number}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-white/80 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Additional text matching screenshot style */}
                    <p className="text-white/60 text-sm leading-relaxed mt-auto">
                      Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more.
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

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Services;