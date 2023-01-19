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
    <section className='h-screen w-screen bg-gray-50 dark:bg-black'>
      <article
        className='flex h-full w-full flex-col justify-between bg-cover bg-center bg-no-repeat px-4 py-8 brightness-95 saturate-[0.9] dark:brightness-90 md:py-12 md:px-6 lg:p-16 xl:p-20'
        style={{ backgroundImage: `url(${projects[activeProject].image})` }}
      >
        <p className='section-title'>projects</p>

        <div className='flex items-center justify-between'>
          <div className='blured-glass flex w-full flex-col md:mx-auto md:w-10/12 lg:w-8/12 lg:shadow-lg 2xl:w-4/12'>
            <p className='mb-6 flex items-center space-x-1 text-gray-500 dark:text-gray-200'>
              <span className='font-sliderNum text-lg font-semibold md:text-xl'>
                {projects[activeProject].year}
              </span>
              <span className='text-xl font-normal md:text-2xl'>|</span>
              <span className='text-base font-light capitalize tracking-wide md:text-lg'>
                {projects[activeProject].category}
              </span>
            </p>
            <p className='mb-3 text-2xl font-bold capitalize text-gray-700 dark:text-gray-200 md:text-4xl lg:mb-3 lg:text-5xl'>
              {projects[activeProject].name}
            </p>
            <p className='mb-10 text-base capitalize text-gray-600 dark:text-gray-200 md:text-xl'>
              {projects[activeProject].location}
            </p>

            <div className='flex items-center justify-between'>
              <button className='primary-btn gap-2 hover:gap-3'>
                see project <FiArrowRight className='text-sm md:text-lg' />
              </button>

              <div className='flex items-center justify-end space-x-1 md:space-x-3'>
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
