import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Stats />
      <WhyChooseUs />
      <Services />
      <CTA />
      <FAQ />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
