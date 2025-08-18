import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';

interface ProjectData {
  [key: string]: {
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    image: string;
    images: string[];
    tools: string[];
    liveLink?: string;
    githubLink?: string;
    figmaLink?: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

const projectData: ProjectData = {
  'travelbuddy': {
    title: 'TravelBuddy',
    description: 'A comprehensive travel planning application',
    fullDescription: 'Work professionally as a UX/UI designer with Front End skills. Translate user needs into a finished product or service. Use agile methods to participate in projects and work processes.',
    category: 'UX/UI Design & Development',
    image: '/src/assets/project-ecommerce.jpg',
    images: ['/src/assets/project-ecommerce.jpg', '/src/assets/project-dashboard.jpg'],
    tools: ['Figma', 'HTML&CSS', 'React JS', 'TailwindCSS'],
    challenge: 'Creating an intuitive travel planning experience that helps users organize complex itineraries while maintaining simplicity.',
    solution: 'Developed a user-centered design approach with extensive user research, prototyping, and iterative testing to create an seamless travel planning interface.',
    results: ['Improved user engagement by 40%', 'Reduced planning time by 60%', 'Achieved 95% user satisfaction score']
  },
  'shoes-stitches': {
    title: 'Shoes & Stitches',
    description: 'E-commerce platform for fashion retail',
    fullDescription: 'Deepen the knowledge and ability to develop interfaces for both mobile applications and websites using the ReactJS framework. The focus is on optimizing user experience and creating responsive, modern designs.',
    category: 'E-commerce Development',
    image: '/src/assets/project-mobile.jpg',
    images: ['/src/assets/project-mobile.jpg', '/src/assets/project-portfolio.jpg'],
    tools: ['Figma', 'HTML&CSS', 'React JS', 'TailwindCSS', 'Firebase'],
    liveLink: 'https://shoes-stitches-demo.com',
    githubLink: 'https://github.com/patdahl',
    figmaLink: 'https://figma.com/design/shoes-stitches',
    challenge: 'Building a modern e-commerce platform that provides excellent user experience across all devices while maintaining high performance.',
    solution: 'Implemented a responsive design system with React and Firebase backend, focusing on mobile-first approach and seamless checkout flow.',
    results: ['Mobile conversion rate increased by 35%', 'Page load time reduced by 50%', 'Customer satisfaction rating: 4.8/5']
  },
  'femtask': {
    title: 'FemTask',
    description: 'Task management application focused on user experience',
    fullDescription: 'Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to translate complex user needs into intuitive digital solutions.',
    category: 'UX Design',
    image: '/src/assets/project-corporate.jpg',
    images: ['/src/assets/project-corporate.jpg', '/src/assets/project-branding.jpg'],
    tools: ['Figma', 'Figjam'],
    figmaLink: 'https://figma.com/design/femtask',
    challenge: 'Designing a task management system that caters specifically to professional women, addressing their unique workflow needs.',
    solution: 'Conducted extensive user research and created detailed personas to design an intuitive task management interface with advanced collaboration features.',
    results: ['User task completion rate improved by 45%', 'Daily active users increased by 70%', 'Reduced learning curve by 3 days']
  }
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !projectData[slug]) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Project Not Found</h1>
            <p className="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/" className="cta-button px-6 py-3 rounded-radius font-medium">
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const project = projectData[slug];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="text-primary hover:text-primary-hover font-medium">
                ← Back to Projects
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm text-text-muted uppercase tracking-wider font-medium mb-4 block">
                  {project.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-text-secondary mb-8">
                  {project.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-tertiary text-text-primary text-sm rounded-radius font-medium"
                    >
                      #{tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button px-6 py-3 rounded-radius font-medium"
                    >
                      View Live Site
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border text-text-primary px-6 py-3 rounded-radius font-medium hover:bg-card-hover transition-colors"
                    >
                      View Code
                    </a>
                  )}
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border text-text-primary px-6 py-3 rounded-radius font-medium hover:bg-card-hover transition-colors"
                    >
                      View Design
                    </a>
                  )}
                </div>
              </div>

              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-radius-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Challenge</h3>
                <p className="text-text-secondary">{project.challenge}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Solution</h3>
                <p className="text-text-secondary">{project.solution}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-text-secondary flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images */}
        {project.images.length > 1 && (
          <section className="py-16 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Project Showcase</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-radius-lg shadow-lg"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-tertiary">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Interested in working together?
            </h3>
            <p className="text-text-secondary mb-8">
              Let's discuss how I can help bring your next project to life.
            </p>
            <Link to="/#contact" className="cta-button px-8 py-4 rounded-radius font-medium">
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;