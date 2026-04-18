// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-bg.jpg"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-32 md:pt-40 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] uppercase">
            Find the Right Car<br />
            <span className="text-[#ff5c5c]">Without the Runaround</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-light">
              100% free. No pressure. Just better car buying.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/80">
              Tell us what you're looking for, and we'll connect you with trusted dealerships that have exactly what you need, no endless searching, no pressure, just real options from real sellers.
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Car Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full max-w-6xl mt-12"
        >
          <Image
            src="/assets/images/et7-car.png" 
            alt="NIO ET7"
            width={1200}
            height={600}
            className="object-contain mx-auto"
          />
        </motion.div>
      </div>

      {/* Bottom Scoop & Button */}
      <div className="absolute bottom-0 w-full z-20">
        <div className="relative h-24 w-full flex justify-center">
          
          {/* Custom SVG Path for the smooth "Inverted Wave" notch */}
          <svg 
            viewBox="0 0 1440 120" 
            className="absolute bottom-0 w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,120 L1440,120 L1440,20 C1300,20 1200,20 1000,20 C850,20 800,100 720,100 C640,100 590,20 440,20 C240,20 140,20 0,20 Z" 
              fill="white" 
            />
          </svg>

          {/* Large Scroll Button */}
          <motion.button
            onClick={handleScrollDown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-6 w-20 h-20 md:w-24 md:h-24 bg-[#ff5c5c] rounded-full flex items-center justify-center hover:bg-[#ff5c5c]/90 transition-all duration-300 shadow-2xl z-30"
          >
            <ChevronDown className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;