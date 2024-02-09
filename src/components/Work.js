import React from "react";
import { work } from "../data/data.js";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Work = () => {
  
    
  const workExp = work;
  const len = workExp.length;
  const [selectedWork, setSelectedWork] = useState(workExp[len-1]);

  const handleButtonClick = (year) => {
    const experience = workExp.find(exp => exp.year === year);
    setSelectedWork(experience);
  };

  console.log(selectedWork)

  return (
<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work Exp.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 mt-5">
        <div className="mb-4 mt-8">
          <button className={`inline text-white text-2xl px-6 py-3 ${
          selectedWork.year === workExp[len-1].year
            ? 'bg-pink-600 border-pink-600'
            : 'hover:bg-pink-600 hover:border-pink-600'
        } rounded-md`} onClick={() => handleButtonClick(workExp[len-1].year)}>{workExp[len-1].year}  </button>
          <span className="inline text-white text-lg pl-16 pr-10">{workExp[len-1].from} to {workExp[len-1].to}
          </span>

        </div>
        <div className="mb-4 mt-8">
          <button className="inline text-white text-2xl px-6 py-3 hover:bg-pink-600 hover:border-pink-600 rounded-md" onClick={() => handleButtonClick(workExp[len-2].year)}>{workExp[len-2].year}</button>
          <span className="inline text-white text-lg pl-16">{workExp[len-2].from} to {workExp[len-2].to}</span>
        </div>
        <div className="mb-4 mt-8">
          <button className="inline text-white text-2xl px-6 py-3 hover:bg-pink-600 hover:border-pink-600 rounded-md" onClick={() => handleButtonClick(workExp[len-3].year)}>{workExp[len-3].year}</button>
          <span className="inline text-white text-lg pl-16">{workExp[len-3].from} to {workExp[len-3].to}</span>
        </div>
        <div className="mb-4 mt-8">
          <button className="inline text-white text-2xl px-6 py-3 hover:bg-pink-600 hover:border-pink-600 rounded-md" onClick={() => handleButtonClick(workExp[len-4].year)}>{workExp[len-4].year}</button>
          <span className="inline text-white text-lg pl-16">{workExp[len-4].from} to {workExp[len-4].to}</span>
        </div>
      </div>
      <div className="col-span-1 w-144">
        <div className="border border-gray-400 rounded-md p-2 w-full h-96 mb-4">
          <h2 className="text-2xl text-center"><span className="border-b-2 border-pink-600">{selectedWork.companyName}</span></h2>
          <h3 className="text-xl mt-6">
            <span className="bg-pink-600 p-1 rounded-md hover:border-pink-600">{selectedWork.design}</span></h3>
          <p className="text-base mt-4">{selectedWork.desc}</p>
        </div>
      </div>
    </div>
  </div>
</div>
// </div>
// border-b-2 border-pink-600
  );
};

export default Work;
