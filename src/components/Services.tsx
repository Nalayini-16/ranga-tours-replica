import { Car, Plane, AlertCircle, Heart, Briefcase, MapPin } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Local City Taxi',
    description: 'Comfortable rides within the city for all your daily travel needs.',
  },
  {
    icon: MapPin,
    title: 'Outstation Cab Services',
    description: 'Long-distance travel made easy with our reliable outstation cabs.',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Travel Support',
    description: '24/7 emergency travel assistance when you need it most.',
  },
  {
    icon: Heart,
    title: 'Wedding & Event Travels',
    description: 'Premium decorated vehicles for your special occasions.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Cab Service',
    description: 'Professional transportation solutions for businesses.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Timely airport pickups and drops with flight tracking.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reliable Travel Solutions for Every Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ranga Tours & Travels offers safe, affordable and professional cab services 
            for all your travel requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl border border-border hover:border-accent transition-all duration-300 card-hover"
            >
              <div className="w-14 h-14 mb-4 bg-primary/10 group-hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
