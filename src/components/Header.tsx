import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/privacy-policy', label: 'Privacy' },
    { to: '/contact', label: 'Contact' },
  ];

 return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border-light shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Name */}
          <a
            href="/"
            className="flex items-center text-xl lg:text-2xl font-bold text-text-primary cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img src="/Logo.png" alt="logo" className="h-8 w-8 mr-2" />
            Pat Dahl
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/"
              className="nav-link text-sm lg:text-base font-medium"
            >
              Home
            </a>
            <a 
              href="/projects"
              className="nav-link text-sm lg:text-base font-medium"
            >
              Projects
            </a>
            <a 
              href="/about"
              className="nav-link text-sm lg:text-base font-medium"
            >
              About
            </a>
            <a 
              href="/privacy-policy"
              className="nav-link text-sm lg:text-base font-medium"
            >
              Privacy
            </a>
            <a 
              href="/contact"
              className="cta-button px-4 py-2 rounded-radius text-sm lg:text-base font-medium"
            >
              Let's talk
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border-light bg-background/95 backdrop-blur-md">
            <nav className="px-6 py-4 space-y-4">
              <a 
                href="/"
                className="block nav-link text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/projects"
                className="block nav-link text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="/about"
                className="block nav-link text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/privacy-policy"
                className="block nav-link text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy
              </a>
              <a 
                href="/contact"
                className="block cta-button px-4 py-3 rounded-radius text-base font-medium mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's talk
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;