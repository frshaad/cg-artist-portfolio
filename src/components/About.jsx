import { AiOutlineCloudDownload, AiOutlineFileDone } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import "../index.css";
import "./about.scss";

export const About = () => {
  return (
    <section className='mt-24 lg:mt-32 2xl:mt-40'>
      <div
        id='about-wrapper'
        className='mx-auto min-h-[680px] w-11/12 max-w-xl xl:max-w-4xl 2xl:max-w-6xl'
      >
        <div className='about-container'>
          <Tilt
            perspective={1000}
            className='parallax-effect about-left about-box dark:bg-[#222]'
          >
            <div>
              <img
                id='about-index-icon'
                src='../images/robot.png'
                alt='skills icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-10 capitalize dark:text-[#eee]'>
              superior software knowledge
            </h3>
            <p className='about-text mt-8 dark:text-[#ddd]'>
              6+ years of experience in
              <br />{" "}
              <span className='font-semibold dark:text-[#ddd]'>
                3D Visualization
              </span>
            </p>
            <p className='about-text mt-2 dark:text-[#ddd]'>
              3+ years of experience in
              <br />
              <span className='font-semibold'>Rendering</span>
            </p>

            <a
              href='/files/my-cv.jpg'
              download='Mahdi-Bahmani-CV'
              className='dark-shadow dark:light-shadow mx-auto mt-10 flex items-center rounded-lg bg-black px-8 py-3 text-center text-white dark:bg-white dark:text-black'
            >
              <AiOutlineCloudDownload className='mr-2 text-lg' />
              Download Resumé
            </a>
          </Tilt>

          <div className='about-middle-top about-box dark:bg-[#222]'>
            <div>
              <img
                src='../images/test-passed.png'
                alt='projects icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5 dark:text-[#eee]'>
              20+ Completed Projects
            </h3>
            <p className='about-text mt-4 dark:text-[#ddd]'>
              The last <span className='font-semibold'>4 years</span>
              <br />
              Along with experts
            </p>
          </div>

          <div className='about-middle-bottom about-box dark:bg-[#222]'>
            <div>
              <img
                src='../images/hard-working.png'
                alt='hard working icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5 dark:text-[#eee]'>Hard Working</h3>
            <p className='about-text mt-4 dark:text-[#ddd]'>
              Put forth all effort to achieve the{" "}
              <span className='font-semibold'>best outcome</span>
            </p>
          </div>

          <div className='about-right-top about-box dark:bg-[#222]'>
            <div>
              <img
                src='../images/chat.png'
                alt='chat icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5 dark:text-[#eee]'>
              Prompt Response
            </h3>
            <p className='about-text mt-4 dark:text-[#ddd]'>
              I'll respond to you as quickly as I can and appropriately.
            </p>
          </div>

          <div className='about-right-bottom about-box dark:bg-[#222]'>
            <div>
              <img
                src='../images/design.png'
                alt='education icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-5 dark:text-[#eee]'>
              Architect and
              <br />
              CG Artist
            </h3>
            <p className='about-text mt-4 dark:text-[#ddd]'>
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
