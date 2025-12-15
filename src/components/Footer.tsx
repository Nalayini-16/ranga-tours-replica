import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Local City Taxi',
    'Outstation Cab Services',
    'Airport Transfers',
    'Wedding & Event Travels',
    'Corporate Cab Service',
    'Tour Packages',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-primary pt-16 pb-6">
      <div className="container-custom px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-primary-foreground font-bold text-lg">RANGA</h3>
                <p className="text-accent text-xs font-medium">TOURS & TRAVELS</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We take care of every detail so you can travel with confidence and ease. 
              Your trusted travel partner since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-primary-foreground font-medium mb-2">Working Hours</h5>
              <p className="text-primary-foreground/70 text-sm">24/7 Available</p>
              <p className="text-primary-foreground/70 text-sm">All Days of the Week</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            Copyright © {new Date().getFullYear()} All Rights Reserved{' '}
            <a href="#home" className="text-accent hover:underline">
              Ranga Tours and Travels
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
