import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Vandigate', 'Chidambaram-608001'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 7092889230'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@rangatravels.com', 'bookings@rangatravels.com'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to book? Reach out to us anytime. Our team is 
            available 24/7 to assist you with your travel needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-muted rounded-xl"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="h-48 bg-muted rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296514!2d77.49085423476944!3d12.954517009617582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1702651234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl shadow-card"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
            
            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <Button type="submit" variant="accent" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
