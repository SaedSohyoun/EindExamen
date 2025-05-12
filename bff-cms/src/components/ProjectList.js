import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, onDelete, onEdit }) => {
    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default ProjectList;
