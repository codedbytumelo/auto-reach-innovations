import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import About from '@/sections/About';
import HowItWorks from '@/sections/HowItWorks';
import CallToAction from '@/sections/CallToAction';
import Teams from '@/sections/Teams';
import Dealers from '@/sections/Dealers';
import Customers from '@/sections/Customers';
import Footer from '@/sections/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <HowItWorks/>
            <CallToAction />
            <Teams />
            <Dealers />
             <LogoTicker />
            <Customers />
            <Footer />
        </div>
    );
}