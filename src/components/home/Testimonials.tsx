
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Shield Insurance has been my go-to for vehicle insurance for the past 5 years. Their customer service is exceptional, and their claims process is the fastest and most efficient I've experienced.",
    author: "Michael Johnson",
    position: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "After my accident, Shield Insurance made the claims process so easy. Their representative walked me through every step, and I had my car repaired and back on the road in no time.",
    author: "Sarah Williams",
    position: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "I've saved over $500 annually since switching to Shield Insurance. Their policies are not only affordable but also provide comprehensive coverage that gives me peace of mind.",
    author: "David Chen",
    position: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    quote: "The mobile app makes managing my policy so convenient. I can access my documents, make payments, and even file claims right from my phone. Truly a modern insurance experience.",
    author: "Emily Rodriguez",
    position: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Customers Say</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers about their experience with Shield Insurance.
          </p>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="mb-8 relative">
                <svg
                  className="absolute -top-6 -left-6 h-12 w-12 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl text-slate-700 relative z-10 italic">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-slate-500">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-white hover:border-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      index === currentIndex ? "bg-primary w-8" : "bg-slate-300 hover:bg-slate-400"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-white hover:border-primary transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
