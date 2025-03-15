import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectsCards() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);
  console.log(projects);

  return (
    <div id="project" className="my-10">
      <div className="text-center font-bold text-4xl mb-5">My Projects</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7">
        {projects.map((project) => {
          return (
            <div key={project.id} className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  src={project.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <div className="card-actions justify-end">
                  <Link to={`/porject/${project.id}`} className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
