import { Shield, Headphones, Sparkles, Wallet } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Professional Drivers',
    description: 'Experienced, friendly and safe driving guaranteed',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for any query or booking',
  },
  {
    icon: Sparkles,
    title: 'Clean & Comfortable Vehicles',
    description: 'Regularly sanitized cabs for a premium ride experience',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'No hidden charges — 100% transparent billing',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reliable, Safe & Affordable Cab Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Ranga Tours & Travels, your comfort and safety come first. With well-maintained 
            vehicles, trained drivers, and transparent pricing, we ensure every trip is smooth 
            and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-card card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
