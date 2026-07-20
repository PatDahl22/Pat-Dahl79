import { Code2, Palette, Zap, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX Design", "Figma & FigJam", "Adobe XD", "Prototyping", "Design Systems", "User Research"]
    },
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js (fundamentals)", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      icon: Zap,
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "Supabase & Firebase", "Vercel", "npm/yarn", "Chrome DevTools"]
    },
    {
      icon: Users,
      title: "Business & Process",
      skills: ["Problem Solving", "Stakeholder Communication", "Requirements Gathering", "Project Ownership", "Agile, Scrum & Kanban", "Client Service"]
    }
  ];

  const coreStack = [
    "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS",
    "Figma", "UI/UX Design", "Git", "Supabase"
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-8 bg-surface-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 animate-fade-in">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Combining creative design thinking with modern development tools to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-surface p-6 lg:p-8 rounded-radius-lg border border-border-light hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary-light rounded-radius flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-text-secondary text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Stack */}
        <div className="bg-surface p-8 lg:p-12 rounded-radius-lg border border-border-light">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Core Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="bg-primary-light text-text-primary px-4 py-2 rounded-full text-sm font-medium border border-border-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
