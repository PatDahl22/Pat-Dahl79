import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import References from "@/components/References";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16 lg:pt-20">
        <About />
        <References />
        <CallToAction />
      </main>
    </div>
  );
};

export default AboutPage;