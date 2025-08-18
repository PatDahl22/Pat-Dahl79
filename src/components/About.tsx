import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "React, TypeScript, Node.js, and modern web technologies",
      items: ["React & Next.js", "TypeScript", "Node.js", "Tailwind CSS"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design with focus on user experience and accessibility",
      items: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"]
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
              businesses enhance their digital presence and engage users effectively. I am excited 
              to graduate in June 2025 and bring my skills to new projects.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-surface p-6 lg:p-8 rounded-radius-lg border border-border-light hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary-light rounded-radius flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              UX/UI Designer
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Creating user-centered designs that enhance digital experiences and drive engagement.
            </p>
          </div>

          <div className="bg-surface p-6 lg:p-8 rounded-radius-lg border border-border-light hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary-light rounded-radius flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Frontend Developer
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Building responsive and interactive web applications using modern technologies like React.
            </p>
          </div>

          <div className="bg-surface p-6 lg:p-8 rounded-radius-lg border border-border-light hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary-light rounded-radius flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              React Developer
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Specializing in React ecosystem to create dynamic and scalable user interfaces.
            </p>
          </div>

          <div className="bg-surface p-6 lg:p-8 rounded-radius-lg border border-border-light hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary-light rounded-radius flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Content Creator
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Crafting compelling digital content that tells stories and connects with audiences.
            </p>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="bg-surface p-8 lg:p-12 rounded-radius-lg border border-border-light max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              My Approach
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I believe great websites are born from the perfect blend of beautiful design, 
              clean code, and user-centered thinking. Every project is an opportunity to 
              solve problems creatively and deliver experiences that users love.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-primary-light text-primary-foreground px-4 py-2 rounded-full">
                User-Centered Design
              </span>
              <span className="bg-primary-light text-primary-foreground px-4 py-2 rounded-full">
                Clean Code
              </span>
              <span className="bg-primary-light text-primary-foreground px-4 py-2 rounded-full">
                Performance First
              </span>
              <span className="bg-primary-light text-primary-foreground px-4 py-2 rounded-full">
                Continuous Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;