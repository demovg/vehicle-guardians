
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className={cn(
          "relative glass-card overflow-hidden rounded-3xl transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-blue-100/50 blur-3xl"></div>
            <div className="absolute -left-20 -top-20 w-[300px] h-[300px] rounded-full bg-blue-50/30 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ready to protect your vehicle?
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Join thousands of satisfied customers who trust Shield Insurance for their vehicle protection needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/policies" 
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/90 button-hover-effect text-center"
                >
                  Explore Policies
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-all text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="glass-card p-6 rounded-xl shadow-lg relative z-10">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get a Quick Quote</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="vehicle-type" className="block text-sm font-medium text-slate-700 mb-1">
                        Vehicle Type
                      </label>
                      <select 
                        id="vehicle-type" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        <option value="">Select vehicle type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="truck">Truck</option>
                        <option value="motorcycle">Motorcycle</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip-code" className="block text-sm font-medium text-slate-700 mb-1">
                        ZIP Code
                      </label>
                      <input 
                        type="text" 
                        id="zip-code" 
                        placeholder="Enter your ZIP code" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-sm hover:shadow transition-all hover:bg-primary/90 button-hover-effect"
                    >
                      Get Quote
                    </button>
                  </form>
                </div>
                
                <div className="absolute top-4 -right-4 transform rotate-12 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Fast & Easy</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -left-2 transform -rotate-6 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">Save up to 30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
