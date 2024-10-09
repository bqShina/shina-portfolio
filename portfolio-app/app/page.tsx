import AboutMe from "./components/About";
import Heading from "./components/Heading/Heading";
import Posts from "./components/Posts";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main>
      <Heading />
      <Projects />
      <Tools />
      <Skills />
      <Posts />
      <AboutMe />
    </main>
  );
}
