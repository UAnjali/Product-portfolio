import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Consulting from "./components/Consulting";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Experience />
      <Education />
      <Projects />
      <Consulting />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
