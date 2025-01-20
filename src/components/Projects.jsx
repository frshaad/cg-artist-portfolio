import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineLocalSee } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { projects } from "../data/projects";
import "../styles/modal.scss";
import "../styles/projects.scss";
import { ProjectsTitle } from "./ProjectsTitle";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [modal, setModal] = useState(false);

  let projectsImages = projects[activeProject].images;
  const projectsCount = projects.length;

  const prevProject = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1);
    } else setActiveProject(projectsCount - 1);
  };

  const nextProject = () => {
    if (activeProject < projectsCount - 1) {
      setActiveProject(activeProject + 1);
    } else setActiveProject(0);
  };

  const toggleModal = () => {
    setModal(!modal);
    document.getElementById("projects").scrollIntoView();
    if (modal) {
      document.querySelector("body").style.overflow = "auto";
    } else {
      document.querySelector("body").style.overflow = "hidden";
    }
  };

  return (
    <section
      id="projects"
      className="relative mx-auto mt-48 flex h-screen w-full justify-center p-5 dark:bg-black md:p-10 lg:mt-56 lg:p-14 xl:flex xl:snap-start xl:items-center xl:p-20 2xl:mt-64"
    >
      <div className="projects-slider mx-auto flex w-full flex-col items-center justify-center xl:flex-row">
        <div className="relative mb-2 h-full w-full rounded-xl lg:mb-0 xl:h-auto xl:w-10/12 xl:max-w-5xl 2xl:max-w-6xl ">
          <img
            key={projects[activeProject].id}
            src={projects[activeProject].images[0].original}
            className="relative h-auto w-full max-w-4xl rounded-xl shadow-xl xl:-left-24 2xl:max-w-5xl"
            alt="Project Image"
          />

          <div className="relative top-3 mx-auto flex h-fit w-full max-w-sm flex-col rounded-xl bg-[rgb(255,255,255,0.5)] px-10 py-4 capitalize shadow-xl backdrop-blur-md  md:-top-24 xl:absolute xl:-right-24 xl:top-1/2 xl:-translate-y-1/2">
            <ProjectsTitle />
            <div className="py-2">
              <p className="text-sm xl:text-base">Project</p>
              <p
                key={projects[activeProject].id}
                className="text-reveal-one text-base font-bold capitalize text-gray-700 dark:text-gray-800 md:text-lg"
              >
                {projects[activeProject].name}
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm xl:text-base">Location</p>
              <p
                key={projects[activeProject].id}
                className="text-reveal-two text-base font-bold capitalize text-gray-700 dark:text-gray-800 md:text-lg"
              >
                {projects[activeProject].location}
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm xl:text-base">Year</p>
              <p
                key={projects[activeProject].id}
                className="text-reveal-three text-base font-bold text-gray-700 dark:text-gray-800 md:text-lg"
              >
                {projects[activeProject].year}
              </p>
            </div>
            <div className="mb-8 py-2">
              <p>
                <span className="text-sm xl:text-base">as </span>
                <p
                  key={projects[activeProject].id}
                  className="text-reveal-four inline-block text-sm font-bold text-gray-700 dark:text-gray-800 md:text-base"
                >
                  {projects[activeProject].role}
                </p>
              </p>
            </div>
            <div className="mb-4 flex ">
              <button
                onClick={toggleModal}
                className="dark-shadow mb-6 mt-3 flex items-center rounded-lg bg-black px-8 py-3 text-center text-white"
              >
                <MdOutlineLocalSee className="mr-2 text-lg" />
                See Gallery
              </button>
            </div>

            <div className="absolute -bottom-8 right-6 flex items-center justify-end space-x-1 md:space-x-3">
              <button onClick={prevProject} className="arrow-btn">
                <FaChevronLeft className="text-xl" />
              </button>
              <button onClick={nextProject} className="arrow-btn">
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div
          id="project-modal"
          className="fixed top-0 left-0 flex h-screen w-full items-start bg-neutral-900 "
        >
          <button
            className="close-modal absolute right-1/2 top-10 hidden translate-x-1/2 text-6xl text-white lg:right-14 lg:top-14 lg:block   lg:translate-x-0"
            onClick={toggleModal}
          >
            <AiFillCloseCircle />
          </button>
          <button
            className="close-modal absolute right-16 bottom-14 translate-x-1/2 text-6xl text-white md:right-28 md:bottom-20 lg:hidden"
            onClick={toggleModal}
          >
            <AiFillCloseCircle />
          </button>

          <div className="m-auto p-4 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12">
            <ImageGallery
              items={projectsImages}
              originalClass="modal-original-image"
              thumbnailClass=""
              originalAlt={projects[activeProject].name}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
      )}
    </section>
  );
};
