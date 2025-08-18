import Header from "@/components/Header";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;