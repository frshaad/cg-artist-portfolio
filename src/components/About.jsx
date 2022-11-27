import { VscFilePdf } from 'react-icons/vsc'
import { skills } from '../data/skills'

export const About = () => {
  return (
    <section className='flex h-screen w-screen snap-start flex-col-reverse lg:flex-row'>
      <article className='flex w-full flex-col  lg:w-6/12'>
        <div className='h-3/4 w-full bg-white p-16  text-gray-900 dark:bg-gray-900 dark:text-gray-50'>
          <p className=' font-title text-5xl uppercase dark:text-gray-50'>
            skills
          </p>
          <ul className='flex flex-wrap items-center justify-between gap-5 px-20 pt-20 pb-16'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className='flex h-12 w-56 items-center border-l-4 border-red-300 bg-[rgba(0,0,0,0.1)] py-7 pl-1 text-gray-900 saturate-[.8] hover:scale-105 hover:saturate-100 dark:bg-gray-50 dark:text-gray-50'
              >
                <img src={skill.icon} alt='' className='h-auto w-12 p-1' />
                <p className='cursor-default px-4 text-lg font-light text-gray-900'>
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>

          <div>
            <button className=' mx-auto flex items-center justify-between gap-3 rounded-full bg-gray-50 py-5 px-8 text-gray-900 shadow-md  hover:shadow-2xl'>
              <VscFilePdf
                id='pdf-btn'
                className='hidden h-6 w-6 text-red-900 '
              />{' '}
              <span className='font-medium'>Download Resumé</span>
            </button>
          </div>
        </div>

        <div className='h-1/4 w-full bg-[#F4B7E9] px-6 py-4 text-gray-900 dark:bg-sky-900 dark:text-gray-50'></div>
      </article>

      <article className='flex flex-col justify-between gap-10 bg-[#FAF6F1] p-10 xl:w-1/2'>
        <div className=''>
          <img
            className='h-auto max-w-sm'
            src='../images/about-mahdi.png'
            alt='mahdi picture'
          />
        </div>
        <div>
          <p className='mb-3'>Architect, Interior Designer and CG Artist,</p>
          <p className='mb-3'>3 years of experience in many projects,</p>
          <p className='mb-3'>
            Many clients are happy with the projects carried out,
          </p>
          <p>
            Member of{' '}
            <a
              href='https://rhizome.ir'
              target='_blank'
              className='font-semibold'
            >
              Rhizome Studio
            </a>{' '}
            Team;
          </p>
        </div>
      </article>
    </section>
  )
}
