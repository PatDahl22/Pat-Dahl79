import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data';

const FeaturedProjects = () => {
  // Always show the 3 latest projects by date (descending)
  const featuredProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(project => ({
      title: project.title,
      description: project.fullDescription,
      image: project.image,
      link: `/project/${project.slug}`,
      external: false
    }));

  return (
    <section id="featured-projects" className="py-20 lg:py-32 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 animate-fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in">
            A selection of my recent work showcasing user-centered design and modern development practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="portfolio-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div
                className="h-64 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black-100/20 group-hover:bg-black-100/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors duration-200 group/link"
                >
                  View Project 
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <a 
            href="/projects"
            className="cta-button inline-flex items-center gap-3 px-8 py-4 rounded-radius-lg text-lg font-semibold group animate-fade-in"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;