// components/LogoTicker.tsx
"use client";

import Image from "next/image";

// 1. Use .png placeholders. Replace these with your actual logo file names.
const logos = [
    { name: "Partner 1", id: "logo-1" },
    { name: "Partner 2", id: "logo-2" },
    { name: "Partner 3", id: "logo-3" },
    { name: "Partner 4", id: "logo-4" },
    { name: "Partner 5", id: "logo-5" },
    { name: "Partner 6", id: "logo-6" },
    { name: "Partner 7", id: "logo-7" },
    { name: "Partner 8", id: "logo-8" },
    { name: "Partner 9", id: "logo-9" },
    { name: "Partner 10", id: "logo-10" },
];

export default function LogoTicker() {
    return (
        <section className="w-full pt-24 pb-12 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Optional Title */}
                <h3 className="text-center text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-8">
                    Trusted by industry leaders
                </h3>
            </div>

            {/* 2. The Ticker Container */}
            <div className="relative w-full overflow-hidden">
                {/* The inner div that will be animated */}
                <div className="flex animate-scroll">
                    {/* 3. Render the logos twice for a seamless loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex-shrink-0 w-48 mx-8 flex items-center justify-center h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                // IMPORTANT: Place your logos in /public/assets/logos/
                                src={`/assets/images/logos/${logo.id}.png`}
                                alt={logo.name}
                                width={120} // Adjust as needed
                                height={60} // Adjust as needed
                                className="object-contain h-full w-auto max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. CSS for the animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        /* We move it 50% because we duplicated the list */
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
}