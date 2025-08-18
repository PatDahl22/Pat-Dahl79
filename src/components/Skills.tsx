import { Code2, Palette, Zap, Users, Figma, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"]
    },
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      icon: Zap,
      title: "Tools",
      skills: ["Git", "VS Code", "Supabase", "Vercel", "npm/yarn", "Chrome DevTools"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Collaboration", "Communication", "Project Management", "Agile", "Mentoring"]
    }
  ];

  const technologies = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Figma", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "UI/UX Design", level: 95 },
    { name: "Next.js", level: 80 }
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

        {/* Technology Proficiency */}
        <div className="bg-surface p-8 lg:p-12 rounded-radius-lg border border-border-light">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Technology Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-text-primary">{tech.name}</span>
                  <span className="text-sm text-text-secondary">{tech.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary-hover h-2 rounded-full transition-all duration-1000 ease-smooth"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;