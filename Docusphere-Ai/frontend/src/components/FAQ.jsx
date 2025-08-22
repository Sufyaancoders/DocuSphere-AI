import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TrueFocus from "../components/ui/truefouse";
import BorderAnimationButton from "../components/ui/button";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does DocuSphere's AI document analysis work?",
      answer: "DocuSphere uses advanced natural language processing and machine learning models to extract, analyze, and understand content from various document formats. Our AI can identify key entities, sentiment, themes, and relationships within your documents, providing actionable insights and summaries."
    },
    {
      question: "What file formats are supported?",
      answer: "We support over 50+ file formats including PDF, DOCX, TXT, HTML, CSV, JSON, and many more. Our platform can also process images with text (OCR), audio files, and video content for comprehensive analysis."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption (AES-256) for data at rest and in transit. Your data is never used to train our models, and we're SOC 2 Type II compliant with GDPR compliance. You maintain full control and ownership of your data."
    },
    {
      question: "How accurate are the AI assistants?",
      answer: "Our AI assistants achieve 99.9% accuracy on standard benchmarks. They're powered by state-of-the-art language models fine-tuned for specific use cases. The accuracy continues to improve through our continuous learning systems."
    },
    {
      question: "Can I integrate DocuSphere with my existing tools?",
      answer: "Yes! We offer comprehensive REST APIs, webhooks, and SDKs for popular programming languages. We also have pre-built integrations with major platforms like Slack, Microsoft Teams, Salesforce, and many others."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support tiers: community support for free users, priority email support for Pro users, and 24/7 dedicated support with SLA guarantees for Enterprise customers. We also provide comprehensive documentation and tutorials."
    },
    {
      question: "How does pricing scale with usage?",
      answer: "Our pricing is transparent and scales with your usage. You only pay for what you use, with clear limits for each tier. Enterprise customers can get custom pricing based on their specific volume and requirements."
    },
    {
      question: "Can I try DocuSphere before committing?",
      answer: "Absolutely! We offer a free tier with generous limits, and all paid plans come with a 14-day free trial. No credit card required to get started, and you can upgrade or downgrade at any time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black/90 mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked Questions</span>
          </h2> */}<div className='mb-8'>
          <TrueFocus 
sentence="Asked Questions"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
</div>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            our support team is always here to help.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden hover:border-blue/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-muted-foreground">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4">
             <BorderAnimationButton
                  text = "Contact Support"/>
            <BorderAnimationButton
                  text = " View Documentationp"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;