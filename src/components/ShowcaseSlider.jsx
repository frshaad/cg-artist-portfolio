import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { showcaseProjects } from '../data/showcase-projects'

export const ShowcaseSlider = () => {
  const [activeProject, setActiveProject] = useState(0)
  // showcaseProjects[activeProject]

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
        <div className='mx-auto flex w-11/12 justify-between bg-[rgba(0,0,0,.7)] p-8 text-gray-50 md:w-11/12 md:px-8 md:py-8'>
          <div className='flex flex-col justify-between text-left '>
            <p>
              <span className='font-sliderNum text-5xl font-semibold'>
                {showcaseProjects[activeProject].id}
              </span>
              <span className='text-5xl font-normal'>/</span>
              <span className='font-sliderNum text-3xl font-normal'>
                {showcaseProjects.length < 9 ? '0' : ''}
                {showcaseProjects.length}
              </span>
            </p>
            <button className='rounded-full border-2 border-gray-50 bg-gray-50 px-7 py-3 text-xl font-medium capitalize text-gray-900 shadow-md hover:bg-transparent hover:text-gray-50 hover:shadow-none '>
              see project
            </button>
          </div>

          <div className='text-right'>
            <p className='pb-5 text-2xl font-medium text-white'>
              {showcaseProjects[activeProject].name}
            </p>
            <p className='mb-1 text-base text-gray-100'>
              {showcaseProjects[activeProject].location}
            </p>
            <p className='pb-10 text-base text-gray-100'>
              {showcaseProjects[activeProject].date}
            </p>
            <div className='flex items-center justify-end gap-4'>
              <button
                onClick={prevProject}
                className='flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-50 p-3 text-center lg:h-12 lg:w-12 '
              >
                <FaChevronLeft className='text-xl' />
              </button>
              <button
                onClick={nextProject}
                className='flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-50 p-3 text-center text-gray-900 transition hover:bg-transparent hover:text-gray-50 lg:h-12 lg:w-12'
              >
                <FaChevronRight className='text-xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
