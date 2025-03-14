
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full',
        isScrolled 
          ? 'glass py-3 shadow-sm' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Shield Insurance Home"
        >
          <div className="relative flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={cn(
                "w-8 h-8 text-primary transition-all", 
                isScrolled ? "opacity-100" : "opacity-90"
              )}
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M8 11h8" />
              <path d="M12 15V7" />
            </svg>
            <span className={cn(
              "ml-2 font-semibold tracking-tight transition-all",
              isScrolled ? "text-slate-900 text-lg" : "text-slate-800 text-xl"
            )}>
              Shield Insurance
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-1">
          <NavLink to="/" className={({isActive}) => cn("nav-link", isActive && "active")}>
            Home
          </NavLink>
          <NavLink to="/claims" className={({isActive}) => cn("nav-link", isActive && "active")}>
            Claims
          </NavLink>
          <NavLink to="/policies" className={({isActive}) => cn("nav-link", isActive && "active")}>
            Policies
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => cn("nav-link", isActive && "active")}>
            Contact
          </NavLink>
          <NavLink to="/about" className={({isActive}) => cn("nav-link", isActive && "active")}>
            About Us
          </NavLink>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/signup" 
            className="px-4 py-2 text-slate-700 font-medium rounded-md transition-colors hover:text-primary"
          >
            Sign Up
          </Link>
          <Link 
            to="/login" 
            className="px-4 py-2 bg-primary text-white font-medium rounded-md shadow-sm transition-all hover:bg-primary/90 hover:shadow button-hover-effect"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "h-0.5 bg-slate-700 rounded-full transition-all",
              isMobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
            )}></span>
            <span className={cn(
              "h-0.5 bg-slate-700 rounded-full transition-all",
              isMobileMenuOpen ? "opacity-0" : "w-4 opacity-100"
            )}></span>
            <span className={cn(
              "h-0.5 bg-slate-700 rounded-full transition-all",
              isMobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 glass transition-all overflow-hidden",
        isMobileMenuOpen ? "max-h-96 py-4 border-b border-slate-200" : "max-h-0"
      )}>
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex flex-col space-y-3 mb-6">
            <NavLink 
              to="/" 
              className={({isActive}) => cn(
                "py-2 px-4 rounded-md transition-colors", 
                isActive ? "bg-primary/10 text-primary font-medium" : "text-slate-700 hover:bg-slate-100"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/claims" 
              className={({isActive}) => cn(
                "py-2 px-4 rounded-md transition-colors", 
                isActive ? "bg-primary/10 text-primary font-medium" : "text-slate-700 hover:bg-slate-100"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claims
            </NavLink>
            <NavLink 
              to="/policies" 
              className={({isActive}) => cn(
                "py-2 px-4 rounded-md transition-colors", 
                isActive ? "bg-primary/10 text-primary font-medium" : "text-slate-700 hover:bg-slate-100"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Policies
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => cn(
                "py-2 px-4 rounded-md transition-colors", 
                isActive ? "bg-primary/10 text-primary font-medium" : "text-slate-700 hover:bg-slate-100"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => cn(
                "py-2 px-4 rounded-md transition-colors", 
                isActive ? "bg-primary/10 text-primary font-medium" : "text-slate-700 hover:bg-slate-100"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
          </nav>
          
          <div className="flex flex-col space-y-3 pb-2">
            <Link 
              to="/signup" 
              className="py-2 px-4 text-center border border-slate-300 text-slate-700 font-medium rounded-md transition-colors hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className="py-2 px-4 text-center bg-primary text-white font-medium rounded-md shadow-sm transition-colors hover:bg-primary/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
