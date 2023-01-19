import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineLocalSee } from "react-icons/md";
import { projects } from "../data/projects";
import { ProjectsTitle } from "./ProjectsTitle";

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [modal, setModal] = useState(false);

  const prevProject = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1);
    } else setActiveProject(projects.length - 1);
  };

  const nextProject = () => {
    if (activeProject < projects.length - 1) {
      setActiveProject(activeProject + 1);
    } else setActiveProject(0);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section className='relative h-max w-screen bg-gray-50 dark:bg-black sm:h-screen'>
      <div className='m-auto flex h-full w-11/12 flex-col items-center justify-center py-12 lg:flex-row'>
        <div className='mb-2'>
          <img
            src={projects[activeProject].image}
            className='h-auto w-full rounded-xl drop-shadow-2xl'
            alt='Project Image'
          />
        </div>

        <div className='relative mx-auto flex h-fit w-full flex-col rounded-xl bg-[rgb(255,255,255,0.5)] px-10 py-4 capitalize shadow-2xl drop-shadow-2xl backdrop-blur-md md:w-2/3  lg:right-24  lg:w-1/2 lg:p-10 xl:w-5/12 2xl:w-3/12'>
          <ProjectsTitle />
          <div className='py-2'>
            <h6>Project</h6>
            <p className=' text-lg font-bold text-gray-700 '>
              {projects[activeProject].name}
            </p>
          </div>
          <div className='py-2'>
            <h6>Location</h6>
            <p className=' text-lg font-bold text-gray-700 '>
              {projects[activeProject].location}
            </p>
          </div>
          <div className='py-2'>
            <h6>Year</h6>
            <p className=' text-lg font-bold text-gray-700 '>
              {projects[activeProject].year}
            </p>
          </div>
          <div className='mb-8 py-2'>
            <p>
              <span>as </span>
              <span className='text-lg font-bold text-gray-700 '>
                {projects[activeProject].role}
              </span>
            </p>
          </div>
          <div className='mb-4 flex '>
            <button
              onClick={toggleModal}
              className='flex items-center font-semibold capitalize text-gray-700'
            >
              <MdOutlineLocalSee className='mr-1 text-sm md:text-lg' />
              see project
            </button>
          </div>

          <div className='absolute -bottom-8 right-6 flex items-center justify-end space-x-1 md:space-x-3'>
            <button onClick={prevProject} className='arrow-btn'>
              <FaChevronLeft className='text-xl' />
            </button>
            <button onClick={nextProject} className='arrow-btn'>
              <FaChevronRight className='text-xl' />
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div
          id='project-modal'
          className='absolute top-0 left-0 h-full w-full bg-gray-50 dark:bg-black'
        >
          <button className='close-modal' onClick={toggleModal}>
            X close
          </button>
        </div>
      )}
    </section>
  );
};
