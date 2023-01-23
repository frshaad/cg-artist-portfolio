import { About } from "../components/About";
import { AboutModern } from "../components/About copy";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { ProjectsSection } from "../components/ProjectsSection";
import { Showcase } from "../components/Showcase";

export const Home = () => {
  return (
    <div className=''>
      <Showcase />
      {/* <About /> */}
      <AboutModern />
      <ProjectsSection />
      <Contact />
    </div>
  );
};
