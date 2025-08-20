import ProjectCard from './ProjectCard';
import { projects } from '@/data';

const Projects = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-8 bg-section-pattern bg-cover bg-center relative">
      <div className="absolute inset-0 bg-background/95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            My work
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
            Projects.
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            These projects represent my journey as a student developer, where I have applied my skills to real-world challenges. Each project includes a brief description, along with links to code repositories and live demos.
          </p>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mt-4">
            Through these, I have demonstrated my ability to tackle complex problems, learn and work with various technologies, and effectively manage projects from start to finish.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[...projects]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-text-secondary mb-6">
            Interested in collaborating on something amazing?
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="cta-button px-8 py-4 text-lg font-medium rounded-radius shadow-lg hover:shadow-xl transition-all"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;