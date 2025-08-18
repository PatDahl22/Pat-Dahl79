import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border-light' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Name */}
          <div 
            className="text-xl lg:text-2xl font-bold text-text-primary cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Pat Dahl
          </div>

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
          <button className="md:hidden p-2 text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;