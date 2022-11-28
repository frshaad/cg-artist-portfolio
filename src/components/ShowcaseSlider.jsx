import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { showcaseProjects } from '../data/showcase-projects'

export const ShowcaseSlider = () => {
  const [activeProject, setActiveProject] = useState(0)

  const prevProject = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1)
    } else setActiveProject(showcaseProjects.length - 1)
  }

  const nextProject = () => {
    if (activeProject < showcaseProjects.length - 1) {
      setActiveProject(activeProject + 1)
    } else setActiveProject(0)
  }

  return (
    <div className='h-screen w-full  lg:mx-auto lg:w-2/3 xl:w-1/3'>
      <div
        className='flex h-full w-full items-end bg-cover bg-center bg-no-repeat py-10 text-center saturate-50  dark:brightness-90'
        style={{
          backgroundImage: `url(${showcaseProjects[activeProject].image})`,
        }}
      >
        <div className='mx-auto w-11/12 justify-between rounded-lg bg-[rgba(255,255,255,.5)] p-8 shadow-lg backdrop-blur-md hover:scale-[1.01] hover:shadow-2xl dark:bg-[rgba(0,0,0,.5)] md:w-11/12 md:px-8 md:py-8'>
          <div className='flex items-start justify-between'>
            <div className='flex flex-col justify-between text-left text-gray-700 dark:text-gray-200'>
              <p className='flex items-center'>
                <span className='font-sliderNum text-4xl font-semibold'>
                  {showcaseProjects[activeProject].id}
                </span>
                <span className='font-sliderNum text-4xl font-normal'>|</span>
                <span className='font-sliderNum text-4xl font-normal'>
                  {showcaseProjects.length < 9 ? '0' : ''}
                  {showcaseProjects.length}
                </span>
              </p>
            </div>

            <div className='text-right'>
              <p className='mb-4 text-2xl font-bold text-gray-700 dark:text-gray-200'>
                {showcaseProjects[activeProject].name}
              </p>
              <p className='mb text-xl text-gray-600 dark:text-gray-300'>
                {showcaseProjects[activeProject].location}
              </p>
              <p className='pb-10 text-xl text-gray-600 dark:text-gray-300'>
                {showcaseProjects[activeProject].year}
              </p>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button className='primary-btn gap-2 hover:gap-3'>
              see project <FiArrowRight className='text-lg' />
            </button>

            <div className='flex items-center justify-end gap-4'>
              <button onClick={prevProject} className='arrow-btn'>
                <FaChevronLeft className='text-xl' />
              </button>
              <button onClick={nextProject} className='arrow-btn'>
                <FaChevronRight className='text-xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
