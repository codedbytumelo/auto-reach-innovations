// components/Teams.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. Define the team data structure with imageSrc property
interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageSrc: string; // Added imageSrc property
}

const teamMembers: TeamMember[] = [
  {
    id: "xolani-zimba",
    name: "Xolani Zimba",
    role: "CEO",
    description: "An accountant by profession with over 15 years of experience in financial management and strategic planning. He leads our vision and ensures fiscal responsibility and sustainable growth.",
    imageSrc: "/assets/images/team/profile.jpg", // Added imageSrc
  },
  {
    id: "jerry-malukeke",
    name: "Jerry Malukeke",
    role: "Operations Director",
    description: "A car specialist with over 20 years in the automotive industry. Jerry oversees all field operations, ensuring our campaigns run smoothly and deliver exceptional results for our clients.",
    imageSrc: "/assets/images/team/profile.jpg", // Added imageSrc
  },
  {
    id: "keleabetswe-mahuma",
    name: "Keleabetswe Mahuma",
    role: "CFO",
    description: "An experienced mathematician and financial analyst with over 5 years of experience in corporate finance and data modeling. She manages our financial strategy and provides critical insights for business decisions.",
    imageSrc: "/assets/images/team/profile.jpg", // Added imageSrc
  },
  {
    id: "tumelo-mokalane",
    name: "Tumelo Mokalane",
    role: "CTO",
    description: "An experienced software engineer with over 5 years of experience in full-stack development and system architecture. He leads our technology stack, ensuring our lead capture and data systems are robust and scalable.",
    imageSrc: "/assets/images/team/profile.jpg", // Added imageSrc
  },
  {
    id: "jeminah",
    name: "Jeminah",
    role: "CMO",
    description: "A creative marketing strategist with over 8 years of experience in brand development and digital campaigns. She drives our marketing efforts, building the Auto Reach Innovations brand and generating client interest.",
    imageSrc: "/assets/images/team/profile.jpg", // Added imageSrc
  },
  {
    id: "palesa",
    name: "Palesa",
    role: "Head of People",
    description: "An HR professional with over 7 years of experience in talent management and organizational culture. She fosters a positive work environment, attracts top talent, and ensures our team is motivated and empowered.",
    imageSrc: "/assets/images/team/profile.jpg", // Added imageSrc
  },
];

// 2. Create a reusable card component for cleaner code
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="flex-shrink-0 w-80 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6 mx-4">
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-neutral-200 dark:bg-neutral-600">
        {/* Updated Image component to use imageSrc from data */}
        <Image
          src={member.imageSrc} // Use the imageSrc from data
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{member.name}</h3>
      <p className="text-sm font-semibold text-[#ff5c5c] mb-3">{member.role}</p>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{member.description}</p>
    </div>
  </div>
);

export default function Teams() {
  // Split the team into two rows
  const topRow = teamMembers.slice(0, 3);
  const bottomRow = teamMembers.slice(3);

  return (
    // 3. Set the section background with theme support
    <section id="teams" className="relative py-20 md:py-24 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
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
            MEET THE TEAM
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-16"
        >
          The Experts Driving Your Success
        </motion.h2>

        {/* 4. Animated Rows Container with Fade-in Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Top Row - Moves Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* Render the top row members twice for a seamless loop */}
              {[...topRow, ...topRow].map((member, index) => (
                <TeamCard key={`${member.id}-${index}`} member={member} />
              ))}
            </div>
          </div>

          {/* Bottom Row - Moves Left to Right */}
          <div className="relative">
            <div className="flex justify-end animate-scroll-right">
              {/* Render the bottom row members twice for a seamless loop */}
              {[...bottomRow, ...bottomRow].map((member, index) => (
                <TeamCard key={`${member.id}-${index}`} member={member} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. CSS for the scrolling animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}