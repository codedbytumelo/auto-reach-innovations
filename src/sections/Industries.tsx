// components/Industries.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SVGProps } from "react";
import React from "react";

// Industry Icons (unchanged)
const CarDealershipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AutomotiveBrandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const FinancingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InsuranceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FleetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// 1. Define a type for the icon component
type IndustryIcon = React.FC<SVGProps<SVGSVGElement>>;

// 2. Define an interface for the industry data structure with imageSrc
interface Industry {
  name: string;
  description: string;
  icon: IndustryIcon;
  imageSrc: string; // Add imageSrc property
}

const Industries = () => {
  // 3. Update the data with full image paths
  const industries: Industry[] = [
    {
      name: "Car Dealerships",
      description: "Generate qualified leads for new and used car sales with our targeted field marketing strategies.",
      icon: CarDealershipIcon,
      imageSrc: "/assets/images/industries/industries-car-dealerships.jpg",
    },
    {
      name: "Automotive Brands",
      description: "Drive brand awareness and customer engagement through experiential marketing campaigns.",
      icon: AutomotiveBrandIcon,
      imageSrc: "/assets/images/industries/industries-automotive-brands.jpg",
    },
    {
      name: "Vehicle Financing Companies",
      description: "Connect with customers actively seeking vehicle financing and loan options.",
      icon: FinancingIcon,
      imageSrc: "/assets/images/industries/industries-vehicle-financing.jpg",
    },
    {
      name: "Insurance Providers",
      description: "Reach customers looking for comprehensive auto insurance coverage and quotes.",
      icon: InsuranceIcon,
      imageSrc: "/assets/images/industries/industries-insurance-providers.jpg",
    },
    {
      name: "Fleet & Mobility Companies",
      description: "Connect with businesses needing fleet solutions, vehicle leasing, and mobility services.",
      icon: FleetIcon,
      imageSrc: "/assets/images/industries/industries-fleet-mobility.jpg",
    },
    {
      name: "Aftermarket Parts & Services",
      description: "Promote your parts, accessories, and service packages to a highly relevant audience.",
      icon: CarDealershipIcon, // Reusing icon as a placeholder
      imageSrc: "/assets/images/industries/industries-aftermarket-parts.jpg",
    }
  ];

  return (
    <section id="industries" className="relative py-20 md:py-24 overflow-hidden bg-white dark:bg-neutral-950">
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
            INDUSTRIES WE SERVE
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-6"
        >
          Powering Growth Across the Automotive Sector
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-600 dark:text-white/80 text-center max-w-3xl mx-auto mb-16"
        >
          Our field sales and campaign activation solutions are tailored to meet the unique needs of various automotive industries, driving real results.
        </motion.p>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* Industry Card */}
              <div className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-white/10 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
                  {/* --- CHANGE IS HERE --- */}
                  <Image
                    src={industry.imageSrc} // Use the imageSrc from data
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 dark:from-black/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Red Info Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 bg-[#ff5c5c] p-4 md:p-6"
                >
                  {/* Icon and Name */}
                  <div className="flex items-start mb-2">
                     <div className="flex-shrink-0 mr-2 mt-0.5">
                       <industry.icon className="w-5 h-5 text-black" />
                     </div>
                    <h3 className="text-xl font-bold text-black">{industry.name}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-black/80 leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Industries;