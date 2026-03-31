import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import About from '@/sections/About';
import HowItWorks from '@/sections/HowItWorks';
import CallToAction from '@/sections/CallToAction';
import Services from '@/sections/Services';
import Industries from '@/sections/Industries';
import Teams from '@/sections/Teams';
import CTA from '@/sections/CTA';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <LogoTicker />
            <About />
            <HowItWorks/>
            <CallToAction />
            <Services />
            <Industries />
            <Teams />
            <CTA />
            <Contact />
            <Footer />
        </div>
    );
}