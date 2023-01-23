import { AiOutlineCloudDownload, AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { skills } from "../data/skills";
import "../index.css";
import "./about.scss";
import { AboutBadges } from "./AboutBadges";

export const AboutModern = () => {
  return (
    <section className=''>
      <div
        id='about-wrapper'
        className='mx-auto min-h-[680px] w-10/12 max-w-2xl xl:max-w-5xl'
      >
        <div className='about-container'>
          <Tilt
            perspective={1000}
            className='parallax-effect about-left about-box'
          >
            <div>
              <img
                id='about-index-icon'
                src='../images/robot.png'
                alt='skills icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-10 capitalize'>
              superior software knowledge
            </h3>
            <p className='about-text mt-8'>
              6+ years of experience in
              <br /> <span className='font-semibold'>3D Visualization</span>
            </p>
            <p className='about-text mt-2'>
              3+ years of experience in
              <br />
              <span className='font-semibold'>Rendering</span>
            </p>

            <a
              href=''
              className='dark-shadow mx-auto mt-10 flex items-center rounded-lg bg-black px-8 py-3 text-center text-white'
            >
              <AiOutlineCloudDownload className='mr-2 text-lg' />
              Download Resumé
            </a>
          </Tilt>

          <div className='about-middle-top about-box'>
            <div>
              <img
                src='../images/test-passed.png'
                alt='projects icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5'>20+ Completed Projects</h3>
            <p className='about-text mt-4'>
              The last <span className='font-semibold'>4 years</span>
              <br />
              Along with experts
            </p>
          </div>

          <div className='about-middle-bottom about-box'>
            <div>
              <img
                src='../images/hard-working.png'
                alt='hard working icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5'>Hard Working</h3>
            <p className='about-text mt-4'>
              Put forth all effort to achieve the{" "}
              <span className='font-semibold'>best outcome</span>
            </p>
          </div>

          <div className='about-right-top about-box'>
            <div>
              <img
                src='../images/chat.png'
                alt='chat icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5'>Prompt Response</h3>
          </div>

          <div className='about-right-bottom about-box'>
            <div>
              <img
                src='../images/design.png'
                alt='education icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5'>
              Architect and
              <br />
              CG Artist
            </h3>
            <p className='about-text mt-4'>
              Graduate in Architectural Engineering from{" "}
              <a
                href='https://en.wikipedia.org/wiki/Babol_Noshirvani_University_of_Technology'
                className='font-semibold'
              >
                BNUT
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
