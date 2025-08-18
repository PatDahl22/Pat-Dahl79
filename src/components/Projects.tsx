import ProjectCard from './ProjectCard';

const Projects = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Project data based on Pat Dahl's portfolio
  const projects = [
    {
      id: 1,
      title: "TravelBuddy",
      description: "Work professionally as a UX/UI designer with Front End skills. Translate user needs into a finished product or service. Use agile methods to participate in projects and work processes.",
      category: "UX/UI Design & Development",
      image: "/src/assets/project-ecommerce.jpg",
      link: "https://travelbuddy-demo.com",
      slug: "travelbuddy",
      status: "case-study" as const,
      tools: ["Figma", "HTML&CSS", "React JS", "TailwindCSS"]
    },
    {
      id: 2,
      title: "Shoes & Stitches",
      description: "Deepen the knowledge and ability to develop interfaces for both mobile applications and websites using the ReactJS framework. The focus is on optimizing user experience and creating responsive, modern designs.",
      category: "E-commerce Development",
      image: "/src/assets/project-mobile.jpg",
      link: "https://shoes-stitches-demo.com",
      slug: "shoes-stitches",
      status: "live" as const,
      tools: ["Figma", "HTML&CSS", "React JS", "TailwindCSS", "Firebase"]
    },
    {
      id: 3,
      title: "FemTask",
      description: "Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to translate complex user needs into intuitive digital solutions.",
      category: "UX Design",
      image: "/src/assets/project-corporate.jpg",
      link: "",
      slug: "femtask",
      status: "case-study" as const,
      tools: ["Figma", "Figjam"]
    }
  ];

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
          {projects.map((project) => (
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