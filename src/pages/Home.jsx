import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { ProjectsSection } from "../components/ProjectsSection";
import { Showcase } from "../components/Showcase";

export const Home = () => {
  return (
    <div className=''>
      <Showcase />
      <About />
      {/* <Projects /> */}
      <ProjectsSection />
      <Contact />
    </div>
  );
};
