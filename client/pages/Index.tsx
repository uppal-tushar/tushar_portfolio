import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <div id="top">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
