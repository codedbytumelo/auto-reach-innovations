import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import About from '@/sections/About';
import HowItWorks from '@/sections/HowItWorks';
import CallToAction from '@/sections/CallToAction';
import Deals from '@/sections/Deals';
import Teams from '@/sections/Teams';
import Dealers from '@/sections/Dealers';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <HowItWorks/>
            <CallToAction />
            <Deals />
            <Teams />
            <Dealers />
             <LogoTicker />
            <Contact />
            <Footer />
        </div>
    );
}