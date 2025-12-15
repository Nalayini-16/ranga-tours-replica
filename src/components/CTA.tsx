import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Book Your Ride Easily & Travel Comfortably
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Fast booking, professional drivers, and clean cabs – experience a smooth 
            and safe journey with Ranga Tours & Travels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="lg">
              Book Your Cab
            </Button>
            <Button variant="hero-outline" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
