import AboutMe from "./components/About";
import Heading from "./components/Heading";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Heading />
      <Projects />
      <Skills />
      <AboutMe />
    </main>
  );
}
