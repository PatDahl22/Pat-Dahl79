import { Monitor, Smartphone, Search, Palette, Code, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with focus on user experience and accessibility.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Code,
      title: "Frontend Development", 
      description: "Building responsive and performant web applications using modern technologies and best practices.",
      features: ["React Development", "TypeScript", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Full-stack web application development from concept to deployment with modern frameworks.",
      features: ["Single Page Apps", "Progressive Web Apps", "API Integration", "Database Design"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Designing and developing mobile-first experiences that work seamlessly across all devices.",
      features: ["Responsive Design", "Touch Interactions", "Mobile Performance", "Cross-browser Compatibility"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Implementing SEO best practices to improve search engine visibility and organic traffic.",
      features: ["Technical SEO", "Performance Optimization", "Structured Data", "Analytics Setup"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Strategic consultation on digital products, user experience improvements, and technical architecture.",
      features: ["UX Audits", "Technical Reviews", "Strategy Planning", "Team Mentoring"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 animate-fade-in">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Comprehensive design and development services to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-surface border border-border-light rounded-radius-lg p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-light rounded-radius flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;