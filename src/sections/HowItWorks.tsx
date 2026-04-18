// components/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: "/1",
      title: "Tell Us What You Need",
      description: "Share what you're looking for, your budget, preferred car type, and any must-haves. No long forms, just the essentials to get started.",
      image: "/assets/images/Tell-Us-What-You-Need.png"
    },
    {
      number: "/2",
      title: "We Find Your Matches",
      description: "We match you with trusted dealerships that have options aligned with your needs. No endless browsing or guessing just relevant choices.",
      image: "/assets/images/We-Find-Your-Matches.png"
    },
    {
      number: "/3",
      title: "Get Connected & Choose",
      description: "Dealerships reach out with available options, pricing, and next steps. You compare, ask questions, and choose what works best for you.",
      image: "/assets/images/portrait-salesman-car-dealership.jpg"
    },
    {
      number: "/4",
      title: "Drive It Home",
      description: "Schedule a viewing, book a test drive, or arrange delivery whatever suits you. From first search to final decision, everything moves at your pace.",
      image: "/assets/images/Drive-It-Home.jpg"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-24 overflow-hidden bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#ff5c5c] bg-white/80 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            HOW IT WORKS
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4"
        >
          Find Your Car in 4 Simple Steps
        </motion.h2>
        
        {/* Support Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center mb-16"
        >
          Simple. Fast. Built around you.
        </motion.p>

        {/* Background Container with Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#ff5c5c] rounded-3xl p-8 md:p-12 lg:p-16"
        >
          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{
                  y: 20,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Number with Slash */}
                  <div className="text-3xl md:text-4xl font-bold text-[#ff5c5c] mb-4">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Background Image that appears on hover - using step-specific image */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl overflow-hidden z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={step.image}
                    alt={`${step.title} background`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>
    </section>
  );
};

export default HowItWorks;