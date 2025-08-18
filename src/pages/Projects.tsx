import Header from "@/components/Header";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;