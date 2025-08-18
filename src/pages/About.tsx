import Header from "@/components/Header";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <About />
      </main>
    </div>
  );
};

export default AboutPage;