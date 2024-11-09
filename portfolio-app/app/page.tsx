import AboutMe from "./components/About";
import Heading from "./components/Heading";
import Practices from "./components/Practices";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Heading />
      <Projects />
      <Skills />
      <Practices />
      <AboutMe />
    </main>
  );
}
