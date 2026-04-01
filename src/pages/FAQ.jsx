import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of events do you cater to?",
      answer: "We specialize in a wide range of events, including weddings, corporate gatherings, private parties, and intimate celebrations. Our portfolio features diverse venues suited for various narrative moments."
    },
    {
      question: "How do I book a venue?",
      answer: "You can start by exploring our 'Venues' page. Once you find a space that resonates with your vision, you can contact us through our 'Contact' page or directly from the 'Venue Detail' page to check availability and schedule a viewing."
    },
    {
      question: "Are your venues customizable?",
      answer: "Absolutely. Our philosophy is rooted in providing a blank canvas. While each venue comes with its own architectural character, we encourage personalization to ensure the environment reflects your specific event narrative."
    },
    {
      question: "Do you provide event planning services?",
      answer: "While our primary focus is on venue curation, we offer comprehensive support through our 'Services' page, including coordination and design consultations to help bring your vision to life."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Each venue has its own specific cancellation policy, which will be outlined in your booking agreement. We recommend discussing this with our team during the initial inquiry process."
    },
    {
      question: "Can I bring my own vendors?",
      answer: "Yes, most of our venues allow external vendors. However, we also have a curated list of preferred partners who are familiar with our spaces and maintain our standards of excellence."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* Hero Header */}
      <section className="relative h-[40vh] w-full -mt-24">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Minimalist architectural space"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <p className="tracking-widest uppercase text-xs text-primary/70 mb-4 font-semibold">
            Common Inquiries
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight font-light">
            Questions & <span className="italic">Answers</span>
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors duration-300 group"
              >
                <span className="text-lg md:text-xl font-serif text-primary group-hover:text-accent tracking-tight">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-accent" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary/40 group-hover:text-accent" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                }`}
              >
                <p className="text-primary/70 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-serif text-primary mb-6">
            Still have questions?
          </h3>
          <p className="text-primary/60 font-light mb-10 max-w-sm mx-auto">
            We are here to help you find the perfect space for your next significant celebration.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-primary text-primary px-10 py-4 tracking-widest uppercase text-xs hover:bg-primary hover:text-secondary transition-all duration-500"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
