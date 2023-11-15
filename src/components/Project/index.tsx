import React from "react";
import "./Project.css";

import { IProject } from "../../sections/Projects";
import ArrowIcon from "../../assets/other/ceta-perguntas.png";

interface IProps {
  project: IProject;
  onClick: (titulo: string) => void;
}

const Project: React.FC<IProps> = ({ project, onClick }) => {
  return (
    <div className={`project ${project.active && "active"}`}>
      <h1 onClick={onClick.bind(this, project.title)}>
        <img src={ArrowIcon} alt="arrow icon" draggable={false} />{" "}
        {project.title}
      </h1>
      <p className="preview-text">{project.previewText}</p>
      <p className="description-text">{project.description}</p>
    </div>
  );
};

export default Project;
