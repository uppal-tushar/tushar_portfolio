import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import CriticalSkills from "@/components/portfolio/CriticalSkills";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <div id="top">
      <Hero />
      <About />
      <Skills />
      <CriticalSkills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
