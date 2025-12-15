import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Bangalore',
    text: 'Excellent cab service! Driver was polite and on time. Our Bangalore to Mysore trip was super comfortable. Highly recommend Ranga Tours & Travels.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Chennai',
    text: 'Very clean car, smooth driving, and affordable price. Best outstation cab experience I\'ve had. Will definitely book again.',
  },
  {
    name: 'Anitha R',
    location: 'Hyderabad',
    text: 'Booked airport pickup at 4 AM and the cab arrived right on time. Very trustworthy service by Ranga Tours & Travels.',
  },
  {
    name: 'Vijay Menon',
    location: 'Kochi',
    text: 'Used their service for our family wedding. All cars were well-maintained and drivers were professional. Made our event hassle-free.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Real experiences from our happy riders across India.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-accent/30 mb-6" />
            
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed min-h-[100px]">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
