"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "Pedro Fernandes",
      title: "Chief Executive Officer (CEO)",
      bio: "Leads the vision and growth of Auto Reach Innovations, building strategic partnerships within the automotive industry and ensuring the company delivers measurable results for every client.",
      location: "Any City"
    },
    {
      name: "Eleanor Fitzgerald",
      title: "Director of Operations",
      bio: "Oversees field operations and campaign execution, ensuring that every deployment runs efficiently and delivers high-quality, qualified leads.",
      location: "Any City"
    },
    {
      name: "Margarita Perez",
      title: "Chief Technology Officer (CTO)",
      bio: "Drives the technology behind lead capture, data systems, and reporting — ensuring seamless collection, tracking, and delivery of high-quality leads to clients.",
      location: "Any City"
    },
    {
      name: "John Smith",
      title: "Head of Sales",
      bio: "Leads client acquisition and partnerships, working closely with dealerships and automotive brands to understand their needs and deliver tailored lead generation solutions.",
      location: "Any City"
    },
    {
      name: "Sarah Johnson",
      title: "Field Operations Manager",
      bio: "Manages and supports field sales teams on the ground, ensuring consistent performance, professionalism, and effective customer engagement.",
      location: "Any City"
    },
    {
      name: "Michael Chen",
      title: "Campaign Coordinator",
      bio: "Plans and coordinates campaign locations, messaging, and targeting strategies to maximize reach and lead quality.",
      location: "Any City"
    }
  ];

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
            TEAM SECTION
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6"
        >
          Meet the Team Driving Results
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-16"
        >
          A focused team combining strategy, technology, and on-the-ground execution to help automotive businesses grow.
        </motion.p>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Team Member Card */}
              <div className="relative overflow-hidden rounded-2xl bg-black border border-white/10">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`/assets/images/team-member-${index + 1}.jpg`}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Yellow Info Box - Matching Screenshot Style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 bg-[#ff5c5c] p-4 md:p-6"
                >
                  {/* Name and Location */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-black">{member.name}</h3>
                    <span className="text-sm text-black/70">{member.location}</span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-sm font-semibold text-black/90 mb-3">{member.title}</h4>
                  
                  {/* Bio - Matching Screenshot Text Style */}
                  <p className="text-sm text-black/80 leading-relaxed">
                    Presentations are communication tools that can be used as demonstrators, lectures, speeches, reports, and more. It is mostly presented before an audience. It serves a variety of purposes, making presentations powerful tools for convincing and teaching.
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
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Team;