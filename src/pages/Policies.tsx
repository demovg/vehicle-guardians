import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Policy plan data
const policyPlans = [
  {
    name: 'Basic Coverage',
    price: 49,
    frequency: 'monthly',
    description: 'Essential protection for budget-conscious drivers.',
    features: [
      'Liability Coverage',
      'Property Damage Coverage',
      'Uninsured Motorist Protection',
      'Basic Roadside Assistance',
      '24/7 Claims Support'
    ],
    popular: false,
    buttonText: 'Choose Basic',
    buttonClass: 'bg-white text-primary border border-primary hover:bg-blue-50'
  },
  {
    name: 'Premium Coverage',
    price: 89,
    frequency: 'monthly',
    description: 'Comprehensive protection with enhanced benefits.',
    features: [
      'Everything in Basic Coverage',
      'Collision Coverage',
      'Comprehensive Coverage',
      'Enhanced Roadside Assistance',
      'Rental Car Reimbursement',
      'Diminishing Deductible'
    ],
    popular: true,
    buttonText: 'Choose Premium',
    buttonClass: 'bg-primary text-white hover:bg-primary/90'
  },
  {
    name: 'Ultimate Coverage',
    price: 129,
    frequency: 'monthly',
    description: 'Maximum protection for complete peace of mind.',
    features: [
      'Everything in Premium Coverage',
      'Gap Insurance',
      'New Car Replacement',
      'Accident Forgiveness',
      'Custom Parts Coverage',
      'Personal Item Coverage',
      'Rideshare Coverage'
    ],
    popular: false,
    buttonText: 'Choose Ultimate',
    buttonClass: 'bg-white text-primary border border-primary hover:bg-blue-50'
  }
];

// Policy types data
const policyTypes = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Liability Coverage',
    description: 'Covers damages and injuries you cause to others in an accident. This is required in most states.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Collision Coverage',
    description: 'Pays for repairs to your vehicle after an accident, regardless of who is at fault.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Comprehensive Coverage',
    description: 'Covers damage to your vehicle from theft, vandalism, natural disasters, and other non-collision incidents.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Medical Payments',
    description: 'Covers medical expenses for you and your passengers after an accident, regardless of fault.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Uninsured Motorist',
    description: 'Protects you if you\'re in an accident with a driver who doesn\'t have insurance or enough coverage.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Roadside Assistance',
    description: 'Provides help when your car breaks down, including towing, battery jumps, flat tire changes, and lockout services.'
  }
];

const Policies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

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
                Tailored Insurance Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Protection that <span className="text-primary">Fits Your Life</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Choose from our flexible policy options designed to meet your unique needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#policy-plans" 
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect"
                >
                  View Plans
                </a>
                <a 
                  href="#quote" 
                  className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-all"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Coverage Options</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We offer a wide range of coverage options to protect you and your vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policyTypes.map((type, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-6 rounded-xl transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{type.title}</h3>
                  <p className="text-slate-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Plans Section */}
        <section id="policy-plans" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Policy Plans</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Choose the plan that best fits your needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {policyPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-8 rounded-2xl transition-all duration-700 relative",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    plan.popular ? "ring-2 ring-primary" : ""
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-slate-500 ml-1">/{plan.frequency}</span>
                    </div>
                    <p className="mt-3 text-slate-600">{plan.description}</p>
                  </div>
                  <div className="border-t border-slate-200 pt-6 mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={cn(
                    "w-full py-3 rounded-lg font-medium transition-all button-hover-effect",
                    plan.buttonClass
                  )}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Quote Section */}
        <section id="quote" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Get a Custom Quote</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Answer a few questions to get a personalized quote tailored to your specific needs.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 rounded-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        id="first-name" 
                        placeholder="Enter your first name" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        id="last-name" 
                        placeholder="Enter your last name" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Enter your email address" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="vehicle-make" className="block text-sm font-medium text-slate-700 mb-1">
                      Vehicle Make and Model
                    </label>
                    <input 
                      type="text" 
                      id="vehicle-make" 
                      placeholder="e.g. Toyota Camry, Honda Accord" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="vehicle-year" className="block text-sm font-medium text-slate-700 mb-1">
                      Vehicle Year
                    </label>
                    <input 
                      type="number" 
                      id="vehicle-year" 
                      placeholder="e.g. 2020" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="coverage-type" className="block text-sm font-medium text-slate-700 mb-1">
                      Preferred Coverage Type
                    </label>
                    <select 
                      id="coverage-type" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="" disabled selected>Select coverage type</option>
                      <option value="basic">Basic Coverage</option>
                      <option value="premium">Premium Coverage</option>
                      <option value="ultimate">Ultimate Coverage</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect"
                    >
                      Get My Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/Reviews Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Customers Say</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Read what our satisfied policyholders have to say about their experience with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: "Switching to Shield Insurance was one of the best decisions I've made. Their rates are competitive, and their customer service is outstanding.",
                  author: "Michael Rodriguez",
                  role: "Customer since 2018"
                },
                {
                  quote: "The claims process was so easy. After my accident, my representative guided me through every step and had my car fixed in no time.",
                  author: "Sarah Johnson",
                  role: "Customer since 2020"
                },
                {
                  quote: "I've been with several insurance companies, but none compare to the level of service and value I get with Shield Insurance.",
                  author: "David Chen",
                  role: "Customer since 2019"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-6 rounded-xl transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <svg className="h-10 w-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H2v4h4a10 10 0 0010-10V8h-6zm18 0v6a6 6 0 01-6 6h-2v4h4a10 10 0 0010-10V8h-6z" />
                  </svg>
                  <p className="text-slate-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-primary font-medium">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
