import { AiOutlineCloudDownload, AiOutlineFileDone } from 'react-icons/ai'
import { HiOutlineSupport } from 'react-icons/hi'
import { MdWork } from 'react-icons/md'
import { skills } from '../data/skills'
import { AboutBadges } from './AboutBadges'

export const About = () => {
  return (
    <section className='flex  w-screen snap-start flex-col-reverse bg-gray-50 dark:bg-black lg:h-screen lg:flex-row'>
      <article className='flex h-screen w-full flex-col lg:w-1/2'>
        <div className='mx-auto w-11/12 py-11 text-gray-900 dark:text-gray-50  lg:h-2/3  lg:p-8 xl:p-14'>
          <p className='text-center font-title text-6xl uppercase text-cyan-800  dark:text-gray-100 lg:text-left'>
            skills
          </p>

          <ul className='md:justify-[unset] flex flex-wrap items-center justify-center gap-4 py-12 lg:px-10 lg:pt-16 lg:pb-12 2xl:gap-5'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className='flex h-12 w-44 items-center rounded-lg border-l-4 border-cyan-700 bg-white py-7 pl-1 text-gray-900 shadow-md saturate-[0.8] hover:scale-[1.01] hover:bg-[rgba(0,0,0,0.2)] hover:shadow-xl hover:saturate-100 dark:border-cyan-500 dark:bg-gray-600  dark:text-gray-50 2xl:w-60'
              >
                <img src={skill.icon} alt='' className='h-auto w-12 p-1' />
                <p className='cursor-default px-4 text-lg font-light leading-6 text-gray-900 dark:text-gray-300'>
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>

          <div className='flex justify-center'>
            <button className='flex items-center justify-between gap-3 rounded-full bg-gray-50 px-10 py-4 text-lg font-normal capitalize text-gray-800 shadow-md hover:scale-[1.01] hover:shadow-xl dark:bg-gray-600 dark:text-gray-200'>
              <AiOutlineCloudDownload id='pdf-btn' className='h-6 w-6' />{' '}
              <span className='font-medium'>Download Resumé</span>
            </button>
          </div>
        </div>

        <div className='h-1/3 w-full p-6 text-gray-900 dark:text-gray-50 sm:px-10'>
          <ul className='mx-auto flex items-center justify-center gap-4 md:w-full'>
            <AboutBadges
              title='experience'
              desc='3 years working'
              icon={<MdWork />}
              bgColor='#e9ecff'
              acColor='#9ca7ee'
            />
            <AboutBadges
              title='completed'
              desc='20+ projects'
              icon={<AiOutlineFileDone />}
              bgColor='#b7dfc6'
              acColor='#59ae7a'
            />
            <AboutBadges
              title='support'
              desc='prompt response'
              icon={<HiOutlineSupport />}
              bgColor='#ffe2fc'
              acColor='#e78dde'
            />
          </ul>
        </div>
      </article>

      <article className='flex h-screen flex-col items-center py-12 lg:px-16 lg:py-24 xl:w-1/2'>
        <div className='flex justify-center'>
          <img
            className='h-auto max-w-sm'
            src='../images/about-mahdi.png'
            alt='mahdi picture'
          />
        </div>
        <div className='flex justify-center'>
          <p className='w-4/5 pt-20 text-lg font-light leading-9 dark:text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illum deserunt veniam enim voluptatem dolorem excepturi mollitia
            incidunt quasi vitae exercitationem ex alias nam, dignissimos sed
            totam neque aperiam voluptas{' '}
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
  )
}
