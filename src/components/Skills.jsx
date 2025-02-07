import React from "react";
import { FaCss3, FaFire, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

export default function Skills() {
  return (
    <div>
      <div className="text-4xl font-bold text-center my-8">My Skills</div>
      {/* fontend skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-10">
        {/* fontend Skills */}

        <div className="space-y-5">
          <p className="text-2xl font-semibold">Fontend Skills</p>
          {/* html */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaHtml5 size={30} /> HTML
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="80"
              max="100"
            ></progress>
            <span className="font-semibold">80%</span>
          </div>

          {/* css */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaCss3 size={30} /> CSS
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="60"
              max="100"
            ></progress>
            <span className="font-semibold">60%</span>
          </div>

          {/* javascript */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaJs size={30} /> Javascript
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="60"
              max="100"
            ></progress>
            <span className="font-semibold">60%</span>
          </div>

          {/* javascript */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaReact size={30} /> React
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="60"
              max="100"
            ></progress>
            <span className="font-semibold">60%</span>
          </div>

          {/* tailwind */}
          <div>
            <p className="flex gap-2 font-semibold">
              <RiTailwindCssFill size={30} /> Tailwind CSS
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="70"
              max="100"
            ></progress>
            <span className="font-semibold">70%</span>
          </div>

          {/* Daisy ui */}
          <div>
            <p className="flex gap-2 font-semibold">
            <SiDaisyui size={30} /> Daisy Ui
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="80"
              max="100"
            ></progress>
            <span className="font-semibold">80%</span>
          </div>
        </div>

        {/* Backend skills */}
        <div className="space-y-5">
          <p className="text-2xl font-semibold">Backend Skills</p>
          {/* html */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaFire size={30} /> Firebase
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="80"
              max="100"
            ></progress>
            <span className="font-semibold">80%</span>
          </div>

          {/* css */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaNodeJs size={30} /> Node Js
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="60"
              max="100"
            ></progress>
            <span className="font-semibold">60%</span>
          </div>

          {/* javascript */}
          <div>
            <p className="flex gap-2 font-semibold">
            <SiExpress size={30} /> Express js
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="50"
              max="100"
            ></progress>
            <span className="font-semibold">50%</span>
          </div>

          {/* tailwind */}
          <div>
            <p className="flex gap-2 font-semibold">
              <SiMongodb size={30} /> MongoDb
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="50"
              max="100"
            ></progress>
            <span className="font-semibold">50%</span>
          </div>
        </div>


        {/* depops skills */}
        <div className="space-y-5">
          <p className="text-2xl font-semibold">DevOps Skills</p>
          {/* html */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaHtml5 size={30} /> HTML
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="80"
              max="100"
            ></progress>
            <span className="font-semibold">80%</span>
          </div>

          {/* css */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaCss3 size={30} /> CSS
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="60"
              max="100"
            ></progress>
            <span className="font-semibold">60%</span>
          </div>

          {/* javascript */}
          <div>
            <p className="flex gap-2 font-semibold">
              <FaJs size={30} /> Javascript
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="50"
              max="100"
            ></progress>
            <span className="font-semibold">50%</span>
          </div>

          {/* tailwind */}
          <div>
            <p className="flex gap-2 font-semibold">
              <RiTailwindCssFill size={30} /> Tailwind CSS
            </p>
            <progress
              className="progress progress-primary w-56 mr-2"
              value="70"
              max="100"
            ></progress>
            <span className="font-semibold">70%</span>
          </div>
        </div>


      </div>
    </div>
  );
}
