import { useEffect, useState, useRef } from 'react';
import { Users, MapPin, Car, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: 50, suffix: 'K+', label: 'Happy Customers' },
  { icon: MapPin, value: 100, suffix: 'K+', label: 'Successful Trips' },
  { icon: Car, value: 50, suffix: '+', label: 'Fleet of Vehicles' },
  { icon: Clock, value: 10, suffix: '+', label: 'Years of Service' },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-primary">
      <div className="container-custom px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {counts[index]}{stat.suffix}
              </h3>
              <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
