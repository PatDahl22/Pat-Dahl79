import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '@/data';
import React, { useState } from 'react';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!slug || !project) {
    return (
      <div className="min-h-screen bg-background">
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

  return (
    <div className="min-h-screen bg-background">      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link to="/projects" className="text-primary hover:text-primary-hover font-medium">
                ← Back to Projects
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm text-text-muted uppercase tracking-wider font-medium mb-4 block">
                  {project.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
                  {project.title}
                </h1>
                <p className="text-lg text-text-secondary mb-8">
                  {project.fullDescription}
                </p>
                <h2 className="text-2xl font-bold text-text-primary mb-2">My Role</h2>
                <p className="text-lg text-text-secondary mb-8">
                  {project.myrole}
                </p>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Tools:</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 bg-tertiary text-text-primary text-sm rounded-radius font-medium"
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
                      Wireframe Design
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
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Assignments</h3>
                <p className="text-text-secondary">{project.assignmentdescription}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-text-secondary flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Conclusion</h3>
              <ul className="space-y-2">
                {project.conclusion.map((conclusion, index) => (
                  <li key={index} className="text-text-secondary flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {conclusion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Project Images */}
        {project.figmaimg.length > 1 && (
          <section className="py-16 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Figma Wireframes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {project.figmaimg.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full max-w-[550px] h-[420px] object-cover rounded-radius-lg shadow-lg cursor-pointer mx-auto"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

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
                    className="w-full max-w-[550px] h-[420px] object-cover rounded-radius-lg shadow-lg cursor-pointer mx-auto"
                    onClick={() => setSelectedImage(image)}
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
      {/* Overlay for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged project"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </main>
  </div>
  );
};

export default ProjectDetail;