import { ArrowRight, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-18 sm:py-16 lg:py-24 px-6 lg:px-8 bg-hero2-pattern bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Let's Create Something
            <br />
            <span className="text-accent">Amazing Together</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in">
            Ready to transform your ideas into exceptional digital experiences? 
            I'm excited to collaborate and bring your vision to life.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-radius-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-200 group"
          >
            <Mail className="w-5 h-5" />
            Start a Conversation
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          
          <a 
            href="/projects"
            className="inline-flex items-center gap-3 bg-transparent text-primary-foreground border-2 border-primary-foreground px-8 py-4 rounded-radius-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-200"
          >
            View My Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">10+</div>
            <div className="text-primary-foreground/80">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">100%</div>
            <div className="text-primary-foreground/80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">4+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
        </div>

        {/* Availability Notice */}
        <div className="mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-6 py-3 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            Available for new projects • Graduating June 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;