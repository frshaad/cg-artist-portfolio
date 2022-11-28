import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'

export const Projects = () => {
  const arrowIcon = document.querySelector('#arrow-icon')
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
        className='flex h-full w-full flex-col justify-between bg-cover bg-center bg-no-repeat py-14 px-10 brightness-95 saturate-[0.9] dark:brightness-90 lg:px-44 lg:py-36'
        style={{ backgroundImage: `url(${projects[activeProject].image})` }}
      >
        <p>
          <span className='font-sliderNum text-2xl font-semibold'>
            {projects[activeProject].year}
          </span>
          <span className='text-3xl font-normal'>/</span>
          <span className='text-xl font-light capitalize tracking-wide'>
            {projects[activeProject].category}
          </span>
        </p>

        <div className='flex items-center justify-between '>
          <div className='flex flex-col gap-3 rounded-lg bg-[rgba(255,255,255,0.1)] p-8 shadow-lg backdrop-blur-lg hover:shadow-2xl lg:gap-5 hover:lg:scale-105'>
            <p className='text-3xl font-bold capitalize text-gray-900 lg:text-7xl'>
              {projects[activeProject].name}
            </p>
            <p className='mb-10 text-lg capitalize text-gray-800 lg:text-2xl'>
              {projects[activeProject].location}
            </p>
            <button className='flex items-center gap-2 self-baseline rounded-full bg-gray-50 px-8 py-3 text-lg font-medium capitalize text-gray-700 shadow-lg lg:hover:gap-4'>
              see project <FiArrowRight className='text-lg' />
            </button>
          </div>
          <p>
            <span className='font-sliderNum text-5xl font-semibold lg:text-7xl'>
              {projects[activeProject].id}
            </span>
            <span className='text-5xl font-normal lg:text-7xl'>/</span>
            <span className='font-sliderNum text-3xl font-normal lg:text-5xl'>
              {projects.length < 9 ? '0' : ''}
              {projects.length}
            </span>
          </p>
        </div>

        <div className='flex justify-end gap-4'>
          <button
            onClick={prevProject}
            className='flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-50 text-center '
          >
            <FaChevronLeft className='text-2xl text-gray-50' />
          </button>
          <button
            onClick={nextProject}
            className='flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-50 text-center'
          >
            <FaChevronRight className='text-2xl' />
          </button>
        </div>
      </article>
    </section>
  )
}
