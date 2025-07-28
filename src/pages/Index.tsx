import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Companies from "@/components/Companies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main id="home">
        <Hero />
        <About />
        <Expertise />
        <Companies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
