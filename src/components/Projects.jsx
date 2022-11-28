import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const prevProject = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1)
    } else setActiveProject(projects.length - 1)
  }

  const nextProject = () => {
    if (activeProject < projects.length - 1) {
      setActiveProject(activeProject + 1)
    } else setActiveProject(0)
  }

  return (
    <section className='h-screen w-screen snap-start bg-gray-50 dark:bg-black'>
      <article
        className='flex h-full w-full flex-col justify-between bg-cover bg-center bg-no-repeat py-12 px-6 brightness-95 saturate-[0.9] dark:brightness-90 lg:p-16 xl:p-20'
        style={{ backgroundImage: `url(${projects[activeProject].image})` }}
      >
        <p className='section-title'>projects</p>

        <div className='flex items-center justify-between'>
          <div className='blured-glass flex w-full flex-col md:mx-auto md:w-10/12 lg:m-0 lg:w-8/12 lg:shadow-lg xl:w-5/12'>
            <p className='mb-6 flex items-center gap-1 text-gray-500 dark:text-gray-200'>
              <span className='font-sliderNum text-xl font-semibold'>
                {projects[activeProject].year}
              </span>
              <span className='text-2xl font-normal'>|</span>
              <span className='text-lg font-light capitalize tracking-wide'>
                {projects[activeProject].category}
              </span>
            </p>
            <p className='mb-3 text-4xl font-bold capitalize text-gray-700 dark:text-gray-200 lg:mb-3 lg:text-5xl'>
              {projects[activeProject].name}
            </p>
            <p className='mb-10 text-xl capitalize text-gray-600 dark:text-gray-200'>
              {projects[activeProject].location}
            </p>

            <div className='flex items-center justify-between'>
              <button className='primary-btn gap-2 hover:gap-3'>
                see project <FiArrowRight className='text-lg' />
              </button>

              <div className='flex justify-end gap-2 md:gap-4'>
                <button onClick={prevProject} className='arrow-btn'>
                  <FaChevronLeft className='arrow-btn-icon' />
                </button>
                <button onClick={nextProject} className='arrow-btn'>
                  <FaChevronRight className='arrow-btn-icon' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
