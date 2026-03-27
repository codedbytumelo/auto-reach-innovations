import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import HowItWorks from '@/sections/HowItWorks';
import CallToAction from '@/sections/CallToAction';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Industries from '@/sections/Industries';
import CTA from '@/sections/CTA';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks/>
            <CallToAction />
            <About />
            <Services />
            <Industries />
            <CTA />
            <Contact />
            <Footer />
        </div>
    );
}