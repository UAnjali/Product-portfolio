import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
