import { Code, Palette, Zap, Users, Award } from 'lucide-react';
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

  const certifications = [
    {
      title: "Certificate of Vocational Education in AI and Prompt Design for UX/UI designers",
      items: [
        "Prototype, Test and Implementation with the support of AI",
        "Research & Idea Generation with the support of AI in UX/UI projects"
      ]
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
              I bring 4 years of experience as a UX/UI and web developer, specializing in crafting modern, user-centered applications. Additionally, I am currently expanding my capabilities as a student in IoT and embedded development.
            </p>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              My work seamlessly merges intuitive design with cutting-edge functionality, blending elegant web applications with hardware solutions. Having graduated as a UX/UI designer & Frontend developer in June 2025, I now bring my multidisciplinary skill set to innovative projects and collaborations.            
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

        {/* Certifications and Training */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Certifications & Training
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-surface p-6 lg:p-8 rounded-radius-lg border border-border-light hover:shadow-lg transition-all duration-300 animate-fade-in w-full max-w-4xl"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 shrink-0 bg-primary-light rounded-radius flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-3">
                      {cert.title}
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      {cert.items.map((item, i) => (
                        <li key={i} className="text-text-secondary text-sm md:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <Approachs />

      </div>
    </section>
  );
};

export default About;