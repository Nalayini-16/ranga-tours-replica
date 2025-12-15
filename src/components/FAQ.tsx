import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I book a cab with Ranga Tours & Travels?',
    answer: 'You can book a cab through call, WhatsApp, or the booking form on our website. Just share your pickup location, destination, date & time — our team will confirm instantly.',
  },
  {
    question: 'Are your drivers experienced and verified?',
    answer: 'Yes! All our drivers are well-trained, licensed, and fully verified. They have excellent knowledge of local and outstation routes for a safe and comfortable journey.',
  },
  {
    question: 'What types of cabs do you offer?',
    answer: 'We offer Sedan, SUV, Tempo Traveller, Luxury Cars, and AC/Non-AC vehicles. You can choose your preferred cab based on the number of passengers and luggage capacity.',
  },
  {
    question: 'Do you provide airport pickup & drop services?',
    answer: 'Yes, we offer 24/7 airport pickup & drop services with on-time arrival guarantee. Our drivers track your flight timings to ensure a smooth experience.',
  },
  {
    question: 'What if my trip gets cancelled or rescheduled?',
    answer: 'No worries! You can reschedule your ride without extra charges if informed in advance. Cancellation fees apply only for last-minute cancellations based on our policy.',
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent font-medium mb-2">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services, booking process, 
              and policies. Can't find what you're looking for? Feel free to contact us.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
