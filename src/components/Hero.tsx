import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-2xl">
          <p className="text-accent font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Ranga Tours & Travels
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Your Journey, Our
            <span className="block">Responsibility</span>
          </h1>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Safe, comfortable and reliable cab services for outstation, airport transfers, 
            and all your travel needs — anytime, anywhere.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button variant="accent" size="lg" className="group">
              Book Your Cab
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
