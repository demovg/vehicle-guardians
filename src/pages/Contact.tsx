
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone Support',
    description: 'Our customer service team is available 24/7',
    contact: '(800) 123-4567',
    link: 'tel:8001234567'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    description: 'Send us an email anytime',
    contact: 'contact@shieldinsurance.com',
    link: 'mailto:contact@shieldinsurance.com'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Office Location',
    description: 'Visit our main headquarters',
    contact: '123 Insurance Plaza, New York, NY 10001',
    link: 'https://maps.google.com/?q=123+Insurance+Plaza,+New+York,+NY+10001'
  }
];

const officeLocations = [
  {
    city: 'New York',
    address: '123 Insurance Plaza, New York, NY 10001',
    phone: '(212) 555-1234',
    email: 'newyork@shieldinsurance.com',
    hours: 'Monday-Friday: 9am-5pm'
  },
  {
    city: 'Los Angeles',
    address: '456 Coverage Blvd, Los Angeles, CA 90001',
    phone: '(310) 555-5678',
    email: 'losangeles@shieldinsurance.com',
    hours: 'Monday-Friday: 9am-5pm'
  },
  {
    city: 'Chicago',
    address: '789 Protection Ave, Chicago, IL 60601',
    phone: '(312) 555-9012',
    email: 'chicago@shieldinsurance.com',
    hours: 'Monday-Friday: 9am-5pm'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    policyHolder: 'no',
    preferredContact: 'email'
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        policyHolder: 'no',
        preferredContact: 'email'
      });
    }, 3000);
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
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                We're Here to <span className="text-primary">Help</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Have questions about our insurance policies or need assistance? Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-6 rounded-xl text-center transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <a 
                    href={method.link} 
                    className="text-primary font-medium hover:underline"
                    target={method.title === 'Office Location' ? '_blank' : undefined}
                    rel={method.title === 'Office Location' ? 'noopener noreferrer' : undefined}
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div 
                  className={cn(
                    "glass-card p-8 rounded-2xl transition-all duration-700",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  )}
                >
                  <h2 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Message Sent Successfully</h3>
                          <p className="text-sm text-green-700 mt-1">Thank you for contacting us. We'll get back to you shortly.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                            First Name*
                          </label>
                          <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your first name" 
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                            Last Name*
                          </label>
                          <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your last name" 
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address*
                          </label>
                          <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email" 
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Phone Number
                          </label>
                          <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number" 
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                          Message*
                        </label>
                        <textarea 
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4} 
                          placeholder="How can we help you?" 
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        ></textarea>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="policyHolder" className="block text-sm font-medium text-slate-700 mb-1">
                            Are you a policy holder?
                          </label>
                          <select 
                            id="policyHolder"
                            name="policyHolder"
                            value={formData.policyHolder}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-700 mb-1">
                            Preferred contact method
                          </label>
                          <select 
                            id="preferredContact"
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button 
                          type="submit" 
                          className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                
                {/* Office Locations */}
                <div 
                  className={cn(
                    "transition-all duration-700",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  )}
                >
                  <h2 className="text-2xl font-bold mb-6 text-slate-900">Our Offices</h2>
                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="glass-card p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-2 text-slate-900">{office.city}</h3>
                        <div className="space-y-3">
                          <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-slate-700">{office.address}</span>
                          </div>
                          <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-slate-700">{office.phone}</span>
                          </div>
                          <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-slate-700">{office.email}</span>
                          </div>
                          <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-slate-700">{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Find Us</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Visit our headquarters or reach out to any of our branch offices across the country.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl overflow-hidden h-[400px] relative">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-medium mb-2">Interactive Map</h3>
                  <p className="text-slate-600 mb-4">Google Maps would display here in a production environment</p>
                  <a 
                    href="https://maps.google.com/?q=123+Insurance+Plaza,+New+York,+NY+10001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
