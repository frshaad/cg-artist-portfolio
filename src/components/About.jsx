import { AiOutlineCloudDownload, AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { skills } from "../data/skills";
import { AboutBadges } from "./AboutBadges";

export const About = () => {
  return (
    <section className='mb-16 flex w-full flex-col-reverse bg-gray-50 py-6 dark:bg-black lg:mb-0 lg:flex-row'>
      <article className='flex w-full flex-col pt-8 md:pt-0 lg:w-1/2'>
        <div className='mx-auto w-full p-12 text-gray-900 dark:text-gray-50'>
          <p className='section-title mb-12'>skills</p>
          {/* <ul className='mb-10 flex flex-col items-center justify-center space-y-2 md:flex-row md:flex-wrap md:space-y-4'> */}
          <ul className='mb-10 grid grid-cols-1 justify-items-center gap-4 px-12 md:grid-cols-2'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className='flex h-12 w-56 items-center rounded-lg border-l-4 border-cyan-700 bg-white py-7 pl-1 text-gray-900 drop-shadow-md saturate-0 hover:scale-[1.02] hover:bg-[rgba(0,0,0,0.1)] hover:drop-shadow-xl hover:saturate-100 dark:border-cyan-500 dark:bg-gray-600  dark:text-gray-50 2xl:w-60'
              >
                <img src={skill.icon} alt='' className='h-auto w-12 p-1 ' />
                <p className='cursor-default px-4 text-base font-normal leading-6 text-gray-800 dark:text-gray-300'>
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>

          <div className='flex justify-center'>
            <button className='primary-btn space-x-2shadow-none drop-shadow-lg hover:scale-[1.02] hover:drop-shadow-xl'>
              <AiOutlineCloudDownload className='h-6 w-6' />{" "}
              <span className='ml-2 text-base font-medium '>
                Download Resumé
              </span>
            </button>
          </div>
        </div>

        <div className='w-full max-w-2xl p-6 text-gray-900 dark:text-gray-50 sm:px-10 2xl:mx-auto'>
          <ul className='mx-auto grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 md:gap-2 '>
            <AboutBadges
              title='experience'
              desc='3 years working'
              icon={<MdWork />}
            />
            <AboutBadges
              title='completed'
              desc='20+ projects'
              icon={<AiOutlineFileDone />}
            />
            <AboutBadges
              title='support'
              desc='prompt response'
              icon={<HiOutlineSupport />}
            />
          </ul>
        </div>
      </article>

      <article className='flex flex-col items-center justify-around p-2 lg:h-screen lg:w-1/2 lg:py-20'>
        <div className='flex justify-center lg:mb-8'>
          <img
            className='h-auto md:max-w-sm'
            src='../images/about-mahdi.png'
            alt='mahdi picture'
          />
        </div>
        <div className='flex justify-center py-8 lg:py-0'>
          <p className='w-11/12  text-lg font-light leading-9 dark:text-gray-200 md:w-4/5  lg:w-10/12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illum deserunt veniam enim voluptatem dolorem excepturi mollitia
            incidunt quasi vitae exercitationem ex alias nam, dignissimos sed
            totam neque aperiam voluptas{" "}
            <a
              href='https://rhizome.ir'
              target='_blank'
              className='font-semibold text-cyan-800 dark:text-cyan-500'
            >
              Rhizome Studio
            </a>
            .
          </p>
        </div>
      </article>
    </section>
  );
};
