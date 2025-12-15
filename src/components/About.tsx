import { CheckCircle } from 'lucide-react';
import aboutCar from '@/assets/about-car.jpg';

const About = () => {
  const features = [
    'Experienced & professional drivers',
    'Well-maintained, sanitized vehicles',
    '24/7 customer support',
    'Transparent pricing with no hidden charges',
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Reliable Rides, Comfortable Journeys
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ranga Tours & Travels is your trusted travel companion for safe, smooth, 
              and affordable cab services. With years of experience and a strong commitment 
              to customer satisfaction, we make every trip—outstation, local, or airport 
              transfers—comfortable and hassle-free.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: <span className="font-semibold text-foreground">your journey, our responsibility</span>. 
              That's why our cabs are regularly serviced, our drivers are professionally trained, 
              and our support team is available round the clock to assist you.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <img
                src={aboutCar}
                alt="Premium cab service by Ranga Tours and Travels"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
