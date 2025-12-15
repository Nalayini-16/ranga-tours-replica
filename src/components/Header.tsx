import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-lg py-3'
          : 'bg-primary/95 py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-xl">R</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-primary-foreground font-bold text-lg leading-tight">RANGA</h1>
            <p className="text-accent text-xs font-medium tracking-wider">TOURS & TRAVELS</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary-foreground/90 hover:text-accent transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+91 98765 43210</span>
          </a>
          <Button variant="accent" size="sm">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/10 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container-custom px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary-foreground/90 hover:text-accent transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-primary-foreground/10 flex flex-col gap-3">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground/90">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Button variant="accent" className="w-full">
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
