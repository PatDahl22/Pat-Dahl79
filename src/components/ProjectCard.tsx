import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    link: string;
    slug: string;
    status: 'live' | 'case-study' | 'coming-soon';
    tools: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-success text-white-100';
      case 'case-study':
        return 'bg-accent text-white-100';
      case 'coming-soon':
        return 'bg-warning text-black-100';
      default:
        return 'bg-secondary text-text-primary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'Live Project';
      case 'case-study':
        return 'Case Study';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return status;
    }
  };

  return (
    <div className="portfolio-card group">
      <div className="relative overflow-hidden rounded-radius-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-radius text-xs font-medium ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-tertiary text-text-primary text-xs rounded-radius-sm font-medium"
            >
              #{tool}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link
            to={`/project/${project.slug}`}
            className="text-primary font-medium hover:text-primary-hover transition-colors"
          >
            Read more →
          </Link>
          
          <div className="flex space-x-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                title="View project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <a
              href="#"
              className="text-text-muted hover:text-primary transition-colors"
              title="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;