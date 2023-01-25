import { AiOutlineCloudDownload, AiOutlineFileDone } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import "../index.css";
import "../styles/about.scss";

export const About = () => {
  return (
    <section className='mt-24 flex items-center lg:mt-32 xl:h-screen xl:snap-start 2xl:mt-40'>
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

            <div class='skills-container mt-10'>
              <div class='skill-1'>
                <p className='text-[#222] dark:text-[#ddd]'>3ds Max</p>
                <p className='text-[#666] dark:text-[#aaa]'>Advanced</p>
              </div>
              <div class='skill-2'>
                <p className='text-[#222] dark:text-[#ddd]'>Corona</p>
                <p className='text-[#666] dark:text-[#aaa]'>Advanced</p>
              </div>
              <div class='skill-3'>
                <p className='text-[#222] dark:text-[#ddd]'>V-Ray</p>
                <p className='text-[#666] dark:text-[#aaa]'>Intermediate</p>
              </div>
              <div class='skill-4'>
                <p className='text-[#222] dark:text-[#ddd]'>Lumion</p>
                <p className='text-[#666] dark:text-[#aaa]'>Intermediate</p>
              </div>
              <div class='skill-5'>
                <p className='text-[#222] dark:text-[#ddd]'>Autocad</p>
                <p className='text-[#666] dark:text-[#aaa]'>Intermediate</p>
              </div>
              <div class='skill-6'>
                <p className='text-[#222] dark:text-[#ddd]'>Photoshop</p>
                <p className='text-[#666] dark:text-[#aaa]'>Intermediate</p>
              </div>
              <div class='skill-7'>
                <p className='text-[#222] dark:text-[#ddd]'>Belender</p>
                <p className='text-[#666] dark:text-[#aaa]'>Basic</p>
              </div>
              <div class='skill-8'>
                <p className='text-[#222] dark:text-[#ddd]'>Revit</p>
                <p className='text-[#666] dark:text-[#aaa]'>Basic</p>
              </div>
            </div>

            <a
              href='/files/my-cv.jpg'
              download='Mahdi-Bahmani-CV'
              className='dark-shadow dark:light-shadow mx-auto mt-6 flex items-center rounded-lg bg-black px-8 py-3 text-center text-white dark:bg-white dark:text-black'
            >
              <AiOutlineCloudDownload className='mr-2 text-lg' />
              Download Resumé
            </a>
          </Tilt>

          <div className='about-middle-top about-box dark:bg-[#222]'>
            <div>
              <img
                id='about-index-icon'
                src='../images/experience.png'
                alt='skills icon'
                className='about-icon'
              />
            </div>
            <h3 className='about-title mt-10 capitalize dark:text-[#eee]'>
              remarkable experience
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
          </div>

          <div className='about-middle-bottom about-box dark:bg-[#222]'>
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

          <div className='about-right-top about-box company-link dark:bg-[#222]'>
            <a
              href='https://rhizome.ir/'
              target='_blank'
              className='flex h-full w-full flex-col justify-center'
            >
              <div>
                <img
                  src='../images/company.png'
                  alt='chat icon'
                  className='about-icon base-image mx-auto'
                />
                <img
                  src='../images/people.png'
                  alt='chat icon'
                  className='about-icon hover-image mx-auto'
                />
              </div>
              <h3 className='about-text mt-5 dark:text-[#ddd]'>
                Currently collaborating with a professional team in <br />
                <span className='about-title dark:text-[#eee]'>
                  Rhizome Studio
                </span>
              </h3>
            </a>
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
