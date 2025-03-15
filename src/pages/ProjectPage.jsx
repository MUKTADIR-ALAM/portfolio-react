import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { id } = useParams(); // Get the id from the URL
  const [projects, setProjects] = useState([]);
  const [filteredProject, setFilteredProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        const project = data.find((project) => project.id === parseInt(id));
        setFilteredProject(project);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, [id]);
  console.log(filteredProject);

  return (
    <div>
      <div className="border-2 p-4 rounded-xl my-4">
        <img src={filteredProject?.img} alt="" />
      </div>
      <div className="space-y-8">
        <p>
          <span className="font-bold text-lg">Project Name : </span>{" "}
          <span className="font-semibold">{filteredProject?.name}</span>
        </p>
        <div className="flex flex-row gap-2 items-center flex-wrap">
          <p>
            {" "}
            <span className="font-bold text-lg">Main Technology : </span>{" "}
          </p>
          {filteredProject?.technologyStack.map((item) => (
            <p className="border rounded-xl bg-blue-200 p-2">{item}</p>
          ))}
        </div>
        <p>
          <span className="font-bold text-lg">Description : </span>{" "}
          {filteredProject?.description}
        </p>
        <p>
          <span className="font-bold text-lg">Live project link : </span>
          <a
            className="underline"
            href={filteredProject?.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {filteredProject?.LiveLink}
          </a>
        </p>
        <p>
          <span className="font-bold text-lg">GitHub repository link : </span>
          <a
            className="underline"
            href={filteredProject?.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {filteredProject?.repositoryLink}
          </a>
        </p>
        <p> <span className="font-bold text-lg">Challenges : </span> {filteredProject?.Challenges}</p>
        <p> <span className="font-bold text-lg">Potential Improvements : </span>{filteredProject?.improvements}</p>
      </div>
    </div>
  );
}
