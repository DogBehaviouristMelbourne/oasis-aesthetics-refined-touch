import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What do I need to book an appointment?",
    answer: "A valid phone number and email address are required for all appointments.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Please give at least 24 hours notice if cancelling. If emergencies arise, notify us as soon as possible.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash and card only. Bank transfers are not accepted. Refunds are not offered, but if you're unsatisfied, we’ll provide a touch-up or correction.",
  },
  {
    question: "Are there any health and safety guidelines?",
    answer:
      "Yes. All tools are sanitised between clients. We use disposable items where appropriate. Please arrive with clean eyebrows and inform us of any allergies or skin conditions.",
  },
  {
    question: "What should I know after eyebrow dyeing?",
    answer:
      "Avoid water, steam, scrubs, or active skincare near brows for 24 hours. Color typically lasts up to 7 days on skin and up to 7 weeks on hair.",
  },
  {
    question: "How long does tinting last?",
    answer:
      "Tints usually last 4–6 weeks, depending on your hair type, skin routine, and product use.",
  },
  {
    question: "What’s the aftercare for brow lamination?",
    answer:
      "Avoid water, heat, steam, and makeup for 24 hours. Use oil-free remover and avoid chlorine or harsh skincare to maintain results for 4–6 weeks.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-oasis-base py-16 px-4 sm:px-6 lg:px-8 border-b border-oasis-taupe/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-3 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-oasis-hover mb-10 text-center max-w-2xl mx-auto">
          Everything you need to know about our services and what to expect
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-oasis-taupe/30 rounded-2xl bg-white shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-oasis-espresso text-left hover:bg-oasis-taupe/10 focus:outline-none transition-colors duration-200"
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-oasis-hover text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
