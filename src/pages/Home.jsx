import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Showcase } from "../components/Showcase";
import "../index.css";

export const Home = () => {
  return (
    <div className='home-container'>
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
