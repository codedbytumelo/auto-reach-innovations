// components/Deals.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Deals = () => {
  const carOptions = [
    {
      id: 1,
      number: "/1",
      category: "Hatchback",
      tagline: "Affordable. Efficient. City-ready.",
      description: "Perfect for everyday driving, first-time buyers, or anyone looking for a reliable and fuel-efficient option.",
      priceRange: "R120,000 – R250,000",
      features: [
        "Fuel Efficient",
        "Easy to maintain",
        "Ideal for city driving"
      ],
      image: "/assets/images/hatchback-placeholder.jpg"
    },
    {
      id: 2,
      number: "/2",
      category: "Family Car (SUV / Sedan)",
      tagline: "Spacious. Comfortable. Practical.",
      description: "Built for families, road trips, and everyday comfort with extra space and safety features.",
      priceRange: "R250,000 – R600,000",
      features: [
        "More seating & storage",
        "Enhanced safety features",
        "Great for long-distance travel"
      ],
      image: "/assets/images/family-car.jpg"
    },
    {
      id: 3,
      number: "/3",
      category: "Sports Car",
      tagline: "Powerful. Stylish. Performance-driven.",
      description: "For those who want more than just a drive — experience performance, speed, and standout design.",
      priceRange: "R500,000+",
      features: [
        "High performance engines",
        "Premium design & features",
        "Built for driving enthusiasts"
      ],
      image: "/assets/images/sports-car.jpg"
    }
  ];

  return (
    <section id="deals" className="relative py-20 md:py-24 overflow-hidden bg-neutral-100">
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
            BROWSE DEALS
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
          Find Your Perfect Match
        </motion.h2>
        
        {/* Support Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Whatever you're looking for, we'll help you find the right match.
        </motion.p>

        {/* Car Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {carOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={option.image}
                  alt={`${option.category} car`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#ff5c5c] text-white text-lg font-bold px-3 py-1 rounded-full">
                  {option.number}
                </div>
              </div>
              
              {/* Car Details */}
              <div className="p-6">
                {/* Category and Tagline */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.category}</h3>
                <p className="text-[#ff5c5c] font-medium mb-4">{option.tagline}</p>
                
                {/* Description */}
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                {/* Price Range */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Price Range:</span>
                  <p className="text-lg font-bold text-gray-900">{option.priceRange}</p>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#ff5c5c] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={`/find-cars?type=${option.category.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="block w-full px-6 py-3 bg-[#ff5c5c] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Find Similar Cars
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Support Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700">
            Don't see what you're looking for? 
            <Link href="/contact" className="text-[#ff5c5c] font-semibold hover:underline ml-1">
              Contact us
            </Link> 
            {" "}and we'll help you find it.
          </p>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Deals;