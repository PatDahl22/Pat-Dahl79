import { Code, Palette, Zap, Users } from 'lucide-react';
import Approachs from './Approachs';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "React, TypeScript, Node.js, and modern web technologies",
      items: ["React & Next.js", "TypeScript & JavaScript", "Node.js & Next.js", "HTML, CSS & Tailwind CSS"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design with focus on user experience and accessibility",
      items: ["UI/UX Design", "Figma & Figjam", "Adobe Creative Suite", "Prototyping"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized, fast-loading websites with excellent Core Web Vitals",
      items: ["Performance Optimization", "SEO", "Accessibility", "Analytics"]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional results",
      items: ["Agile Methodology", "Version Control", "Code Reviews", "Mentoring"]
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-8 bg-surface-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Overview.
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              Now, I am dedicated to becoming a UX/UI designer, specializing in crafting modern, 
              user-centered web applications using React.
            </p>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              My work focuses on combining intuitive design with seamless functionality, helping 
              businesses enhance their digital presence and engage users effectively. I graduated
              as a UX/UI designer & Frontend developer in June 2025 and bring my skills to new projects.
            </p>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-20">
          {skills.map((category, index) => (
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
                {category.items.map((skill) => (
                  <li key={skill} className="text-text-secondary text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Personal Touch */}
        <Approachs />

      </div>
    </section>
  );
};

export default About;