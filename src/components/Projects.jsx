import React from "react";
import { data } from "../data/data.js";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Projects = () => {
  // projects file
  const projects = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const singleProject = projects[currentIndex];

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-start -mt-2 mr-10">
            <button className="mr-4 -mt-12" onClick={handlePrevious}>
              <GoChevronLeft size={30} />
            </button>
          </div>

          <div>
            {projects.map((item, index) => (
              <div
                key={index}
                className={`${index === currentIndex ? "block" : "hidden"}`}
              >
                <a
                  // href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-70"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                      {item.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </a>
              </div>
            ))}
            {projects.length > 1 && (
              <div className="flex justify-center space-x-10 mt-4 -ml-5">
                <a
                  href={singleProject.github}
                  // className="mr-4 bg-gray-700 text-white px-4 py-2 rounded-md"
                  className="text-white group border-2 px-5 py-2 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600"
                >
                  Code
                </a>
                <a
                  href={singleProject.live}
                  // className="bg-gray-700 text-white px-4 py-2 rounded-md"
                  className="text-white group border-2 px-5 py-2 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600"
                >
                  Live
                </a>
              </div>
            )}
          </div>

          <div className="flex justify-end -mt-10 ml-10">
            <button className="mr-4 -mt-12" onClick={handleNext}>
              <GoChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
