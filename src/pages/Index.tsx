
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <Hero />
        <div className="bg-background relative z-10">
          <About />
          <Skills />
          <Portfolio />
          <Services />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
