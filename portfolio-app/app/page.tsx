import AboutMe from "./components/About";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main>
      <Projects />
      <Tools />
      <Skills />
      <Posts />
      <AboutMe />
    </main>
  );
}
