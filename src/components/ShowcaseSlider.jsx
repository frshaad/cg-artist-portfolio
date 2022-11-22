import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { showcaseProjects } from '../data/showcase-projects'

export const ShowcaseSlider = () => {
  const [activeProject, setActiveProject] = useState(0)
  showcaseProjects[activeProject]

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
    <div className='h-screen w-1/3 '>
      <div
        key={showcaseProjects[activeProject].index}
        className='flex h-full w-full items-end bg-cover bg-center bg-no-repeat py-10 text-center saturate-50  dark:brightness-90'
        style={{
          backgroundImage: `url(${showcaseProjects[activeProject].image})`,
        }}
      >
        <div className='mx-auto flex w-11/12 justify-between bg-[rgba(0,0,0,.5)] px-8 py-8 text-gray-50'>
          <div className='flex flex-col justify-between text-left'>
            <p className='text-5xl font-semibold'>
              {showcaseProjects[activeProject].id}
            </p>
            <button className='rounded-full border-2 border-gray-50 bg-gray-50 px-7 py-2 text-xl font-medium capitalize text-gray-900 shadow-2xl hover:bg-transparent hover:text-gray-50 hover:shadow-none '>
              see project
            </button>
          </div>

          <div className=' text-right'>
            <p className='pb-5 text-xl font-medium text-white'>
              {showcaseProjects[activeProject].name}
            </p>
            <p className='text-base text-gray-100'>
              {showcaseProjects[activeProject].location}
            </p>
            <p className='pb-10 text-base text-gray-100'>
              {showcaseProjects[activeProject].date}
            </p>
            <div className='flex items-center justify-end gap-4'>
              <button
                onClick={prevProject}
                className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 p-3 text-center '
              >
                <FaChevronLeft className=' text-xl' />
              </button>
              <button
                onClick={nextProject}
                className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-50 p-3 text-center text-gray-900 transition hover:bg-transparent hover:text-gray-50'
              >
                <FaChevronRight className='text-xl ' />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {showcaseProjects.map((project, index) => {
        const { id, name, location, date, image } = project

        return (
          <div
            key={index}
            className='flex h-full w-full items-end bg-cover bg-center bg-no-repeat py-10 text-center saturate-50 dark:brightness-90'
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className='mx-auto flex w-11/12 justify-between bg-[rgba(0,0,0,.5)] px-8 py-8 text-gray-50'>
              <div className='flex flex-col justify-between text-left'>
                <p className='text-5xl font-semibold'>{id}</p>
                <button className='rounded-full bg-gray-50 px-7 py-2 text-xl font-medium capitalize text-gray-900 shadow-2xl '>
                  see project
                </button>
              </div>

              <div className=' text-right'>
                <p className='pb-5 text-xl font-medium text-white'>{name}</p>
                <p className='text-base text-gray-100'>{location}</p>
                <p className='pb-10 text-base text-gray-100'>{date}</p>
                <div className='flex items-center justify-end gap-4'>
                  <button
                    onClick={prevProject}
                    className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 p-3 text-center '
                  >
                    <FaChevronLeft className=' text-xl' />
                  </button>
                  <button
                    onClick={nextProject}
                    className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-50 p-3 text-center text-gray-900 transition hover:bg-transparent hover:text-gray-50'
                  >
                    <FaChevronRight className='text-xl ' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })} */}
    </div>
  )
}
