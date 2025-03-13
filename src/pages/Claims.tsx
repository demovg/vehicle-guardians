
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'Report Your Claim',
    description: 'Start your claim online, via our mobile app, or by calling our 24/7 claims hotline.',
    image: 'https://images.unsplash.com/photo-1590935216525-e35827458736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    number: '02',
    title: 'Assessment',
    description: 'Our claims adjuster will evaluate the damage and determine coverage based on your policy.',
    image: 'https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    number: '03',
    title: 'Repair',
    description: 'Choose from our network of approved repair shops or select your own preferred service provider.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  },
  {
    number: '04',
    title: 'Resolution',
    description: 'Once repairs are complete or settlement is issued, we'll close your claim and follow up to ensure satisfaction.',
    image: 'https://images.unsplash.com/photo-1581626221695-03f10d9f3ae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

const faqs = [
  {
    question: 'How quickly can I expect my claim to be processed?',
    answer: 'Most claims are processed within 24-48 hours of being submitted. Complex cases may take longer, but you'll be assigned a dedicated claims representative who will keep you updated throughout the process.'
  },
  {
    question: 'What information do I need to provide when filing a claim?',
    answer: 'You'll need your policy number, details about the incident (date, time, location), information about any other parties involved, photos of the damage if available, and a police report number if applicable.'
  },
  {
    question: 'Can I choose my own repair shop?',
    answer: 'Yes, you have the freedom to choose any repair shop you prefer. However, we do have a network of approved shops that offer guaranteed work and may provide additional benefits like direct billing to us and priority service.'
  },
  {
    question: 'Will filing a claim increase my premiums?',
    answer: 'Not necessarily. Premium adjustments depend on various factors including the nature of the incident, your claims history, and your policy terms. Some policies include accident forgiveness for first-time claims.'
  },
  {
    question: 'What if my vehicle is totaled?',
    answer: 'If the cost of repairs exceeds the actual cash value of your vehicle, we may declare it a total loss. In this case, we'll offer a settlement based on the pre-accident market value of your vehicle, minus any applicable deductible.'
  }
];

const Claims = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"></div>
            <div className="absolute -left-20 top-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
                Simple & Efficient Process
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Claims Made <span className="text-primary">Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                We understand that filing a claim can be stressful. That's why we've streamlined our process to get you back on the road as quickly as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#file-claim" 
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect"
                >
                  File a Claim
                </a>
                <a 
                  href="#claim-status" 
                  className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-all"
                >
                  Check Claim Status
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Claims Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">How Our Claims Process Works</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We've designed a straightforward claims process to minimize stress and maximize efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card rounded-2xl overflow-hidden transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-xl font-semibold ml-3 text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* File a Claim Section */}
        <section id="file-claim" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">File a Claim</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Start your claim process by providing some basic information about the incident.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 rounded-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="policy-number" className="block text-sm font-medium text-slate-700 mb-1">
                        Policy Number
                      </label>
                      <input 
                        type="text" 
                        id="policy-number" 
                        placeholder="Enter your policy number" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="incident-date" className="block text-sm font-medium text-slate-700 mb-1">
                        Incident Date
                      </label>
                      <input 
                        type="date" 
                        id="incident-date" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="incident-description" className="block text-sm font-medium text-slate-700 mb-1">
                      Incident Description
                    </label>
                    <textarea 
                      id="incident-description" 
                      rows={4} 
                      placeholder="Please describe what happened" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Upload Photos (optional)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">Drag and drop files here, or click to browse</p>
                      <input type="file" className="hidden" multiple accept="image/*" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect"
                    >
                      Submit Claim
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Find answers to common questions about our claims process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card rounded-xl overflow-hidden mb-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium text-slate-900">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "h-5 w-5 text-slate-700 transition-transform",
                        activeAccordion === index ? "transform rotate-180" : ""
                      )}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-300",
                      activeAccordion === index ? "max-h-40 pb-4" : "max-h-0"
                    )}
                  >
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Need Additional Help?</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our claims specialists are available 24/7 to assist you with any questions or concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Phone</h3>
                <p className="text-slate-600 mb-4">Our claims hotline is available 24/7</p>
                <a href="tel:8001234567" className="text-primary font-medium hover:underline">
                  (800) 123-4567
                </a>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Email</h3>
                <p className="text-slate-600 mb-4">Send us a message anytime</p>
                <a href="mailto:claims@shieldinsurance.com" className="text-primary font-medium hover:underline">
                  claims@shieldinsurance.com
                </a>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Live Chat</h3>
                <p className="text-slate-600 mb-4">Chat with a representative</p>
                <button className="text-primary font-medium hover:underline">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Claims;
