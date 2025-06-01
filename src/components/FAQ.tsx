
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "How long does an eyebrow sculpting session take?",
    answer: "A typical eyebrow sculpting session takes 45 minutes. This includes consultation, mapping your ideal brow shape, hair removal, and aftercare instructions."
  },
  {
    question: "How often should I get my eyebrows done?",
    answer: "We recommend maintenance every 3-4 weeks to keep your brows looking their best. However, this can vary based on your hair growth rate and personal preference."
  },
  {
    question: "Is eyebrow tinting safe?",
    answer: "Yes, we use professional-grade, gentle tinting products specifically designed for facial hair. We always perform a patch test for first-time tinting clients."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a detailed consultation where we discuss your brow goals, analyze your face shape, and create a customized treatment plan. We'll explain each step of the process."
  },
  {
    question: "Do I need to prepare anything before my appointment?",
    answer: "Please avoid tweezing or waxing your brows for at least 2 weeks before your appointment. Arrive makeup-free around the brow area if possible."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We require 24 hours notice for cancellations or rescheduling. Same-day cancellations may incur a fee."
  },
  {
    question: "How do I maintain my brows between appointments?",
    answer: "Avoid tweezing or trimming. Use a spoolie brush to groom daily and follow any specific aftercare instructions we provide. We'll give you personalized maintenance tips."
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes! We offer complimentary consultations where we can discuss your brow goals and recommend the best treatments for your needs."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4 lg:px-6 bg-oasis-base">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-oasis-hover mb-12">
          Everything you need to know about our services and what to expect
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-oasis-taupe/20 rounded-lg px-4 bg-white"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-oasis-espresso hover:text-oasis-hover">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-oasis-hover leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
