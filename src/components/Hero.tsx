import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 bg-hero-pattern bg-cover bg-center relative">
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-light text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-success font-medium">Currently Available</span>
          <span className="text-text-secondary">— Accepting new projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6 animate-fade-in">
          Hi, I am{' '}
          <span className="gradient-text">Pat Dahl</span>
          <br />
          UX/UI designer and Frontend developer
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in">
          Specializing in crafting modern, user-centered web applications using React. 
          My work focuses on combining intuitive design with seamless functionality.
        </p>

        {/* CTA Button */}
        <Link 
          to="/contact"
          className="cta-button inline-flex items-center gap-3 px-8 py-4 rounded-radius-lg text-lg font-semibold group animate-fade-in"
        >
          Let's work together
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  );
};

export default Hero;