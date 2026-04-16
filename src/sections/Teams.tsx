// components/Teams.tsx
"use client";

import Image from "next/image";

// Define the team data structure with imageSrc property
interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "xolani-zimba",
    name: "Xolani Zimba",
    role: "CEO",
    description: "An accountant by profession with over 15 years of experience in financial management and strategic planning. He leads our vision and ensures fiscal responsibility and sustainable growth.",
    imageSrc: "",
  },
  {
    id: "jerry-malukeke",
    name: "Jerry Malukeke",
    role: "Operations Director",
    description: "A car specialist with over 20 years in the automotive industry. Jerry oversees all field operations, ensuring our campaigns run smoothly and deliver exceptional results for our clients.",
    imageSrc: "",
  },
  {
    id: "keleabetswe-mahuma",
    name: "Keleabetswe Mahuma",
    role: "CFO",
    description: "An experienced mathematician and financial analyst with over 5 years of experience in corporate finance and data modeling. She manages our financial strategy and provides critical insights for business decisions.",
    imageSrc: "",
  },
  {
    id: "Tumelo Mokalane",
    name: "Tumelo Mokalane",
    role: "Chief Information Officer",
    description: "With a strong background in IT and over 10 years of experience in technology management, Tumelo oversees our IT infrastructure and ensures our platform remains secure, efficient, and innovative.",
    imageSrc: "",
  },
  {
    id: "jeminah tau",
    name: "Jeminah Tau",
    role: "Sales Manager",
    description: "With over 4 years of experience in sales and client relationship management, Jeminah is responsible for overseeing regional dealer relationships, customers and team management. She ensures a seamless connection between buyers and dealerships across key markets, focused on delivering quality matches and supporting dealership success, they help partners get the most value from the Auto Reach platform.",
    imageSrc: "",
  },
  {
    id: "palesa",
    name: "Palesa",
    role: "Sales Manager",
    description: "Oversees regional dealer relationships and ensures a seamless connection between buyers and dealerships across key markets,focused on delivering quality matches and supporting dealership success, they help partners get the most value from the Auto Reach platform.",
    imageSrc: "",
  },
  {
    id: "mavundle-adile-mshunqane",
    name: "Mavundle-Adile Mshunqane",
    role: "Regional Manager",
    description: "Oversees regional dealer relationships and ensures a seamless connection between buyers and dealerships across key markets,focused on delivering quality matches and supporting dealership success, they help partners get the most value from the Auto Reach platform.",
    imageSrc: "",
  },
  {
    id: "morena-dhlamini",
    name: "Morena Innoncent Dhlamini",
    role: "Regional Manager Free State",
    description: "3+ years of experience of managerial experince within the agricultural industry, Morena brings a strong background in team leadership, client relationship management, and strategic planning. He excels at driving sales growth and building long-term partnerships with dealerships. Morena is passionate about delivering exceptional service and results for our clients in the Free State region.",
    imageSrc: "",
  },
  {
    id: "Katlego Molewa",
    name: "Katlego Molewa",
    role: "Regional Manager Pretoria",
    description: "With 4 years of experience in sales and marketing, Katlego brings a strong track record of driving revenue growth  and building client relationships. She excels at identifying opprtunities, meeting targets, and leading teams to success. Katlego brings a result-driven mindset and a passion for delivering business growth in highly paced environments",
    imageSrc: "",
  }
];

// Create a reusable card component for cleaner code
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 mx-2">
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-neutral-200">
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
      <p className="text-sm font-semibold text-[#ff5c5c] mb-3">{member.role}</p>
      <p className="text-sm text-neutral-600 leading-relaxed">{member.description}</p>
    </div>
  </div>
);

export default function Teams() {
  return (
    <section id="teams" className="relative py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#ff5c5c] bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            MEET THE TEAM
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-16">
          The Experts Driving Your Success
        </h2>

        {/* Team Members Grid - All 8 in a single row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}