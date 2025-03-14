
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Team members data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'Sarah brings over 20 years of experience in the insurance industry with a focus on innovative customer solutions.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'David Chen',
    role: 'Chief Operating Officer',
    bio: 'David oversees all operational aspects of Shield Insurance, ensuring efficient processes and excellent service delivery.',
    image: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Financial Officer',
    bio: 'Michael maintains the financial integrity of Shield Insurance while developing strategies for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80'
  },
  {
    name: 'Emily Taylor',
    role: 'Chief Technology Officer',
    bio: 'Emily leads our digital transformation initiatives, creating seamless online experiences for our customers.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  }
];

// Company values data
const companyValues = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Customer First',
    description: 'We prioritize our customers in every decision we make, ensuring personalized solutions and support.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integrity',
    description: 'We uphold the highest ethical standards with honesty and transparency in all our interactions.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'We continuously seek new ways to improve our services and adapt to the evolving needs of our customers.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Community',
    description: 'We are committed to making a positive impact in the communities we serve through active involvement and support.'
  }
];

const About = () => {
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
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                About <span className="text-primary">Shield Insurance</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                We're on a mission to make insurance simple, transparent, and accessible for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                )}>
                  <img 
                    src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our office" 
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}>
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Journey</h2>
                  <p className="text-slate-600 mb-4">
                    Founded in 2010, Shield Insurance began with a simple idea: insurance should be straightforward, fair, and focused on the customer's needs. What started as a small team working out of a single office has grown into a trusted provider serving clients nationwide.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Our founder, Sarah Johnson, experienced firsthand the challenges of navigating complex insurance policies. This inspired her to create a company that prioritizes clarity, transparency, and exceptional customer service.
                  </p>
                  <p className="text-slate-600">
                    Today, we continue to innovate and expand our offerings while staying true to our core values and customer-centric approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Values</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                The principles that guide our decisions and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-6 rounded-xl transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Meet Our Leadership Team</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                The dedicated professionals guiding Shield Insurance to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card overflow-hidden rounded-xl transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-slate-900">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-slate-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto glass-card rounded-2xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: '13+', label: 'Years in Business' },
                  { number: '50K+', label: 'Satisfied Clients' },
                  { number: '98%', label: 'Claims Satisfaction' },
                  { number: '24/7', label: 'Customer Support' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "transition-all duration-700",
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                    <p className="text-slate-700 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to Experience the Shield Difference?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Join thousands of satisfied customers who trust us with their insurance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/signup" 
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect"
                >
                  Get Started Today
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
