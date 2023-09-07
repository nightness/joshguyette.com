import React from "react";
import { Button } from "primereact/button";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      style={{
        width: "320px",
        height: "100%",
        display: "flex", // Set display to flex
        flexDirection: "column", // Set direction to column
        border: "1px solid #ccc", // Optional: Add a border to mimic card style
        borderRadius: "4px", // Optional: Add rounded corners
        overflow: "hidden", // Ensure content doesn't overflow
        padding: "10px", // Add some padding
      }}
      className="p-mb-4"
    >
      {/* {project.imageURL ? (
        <img
          draggable={false}
          alt={project.title}
          height={230}
          src={project.imageURL}
          onError={(e) =>
            (e.currentTarget.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          style={{ width: "100%" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#ccc",
          }}
        />
      )} */}
      <h3>{project.title}</h3>
      <h4>{project.date}</h4>
      <p className="p-m-0" style={{ lineHeight: "1.5", flex: 1 }}>
        {project.description}
      </p>
      <span
        style={{
          display: "flex",
          marginTop: "auto", // Push footer to the bottom
          justifyContent: "space-evenly",
        }}
      >
        {project.link && (
          <Button
            label="Learn More"
            icon="pi pi-check"
            onClick={() => window.open(project.link, "_blank")}
          />
        )}
        {project.githubLink && (
          <Button
            label="GitHub"
            icon="pi pi-github"
            className="p-button-secondary p-ml-2"
            onClick={() => window.open(project.githubLink, "_blank")}
          />
        )}
      </span>
    </div>
  );
};

export default ProjectCard;
