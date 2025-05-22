import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleDelete = (projectToDelete) => {
    setProjects(projects.filter((project) => project !== projectToDelete));
  };

  const handleEdit = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project.title === updatedProject.title ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>🎬 BFF-CMS</h1>
      <input
        type="text"
        placeholder="Zoek op titel..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <AddProjectForm onAdd={addProject} />
      <ProjectList
        projects={filteredProjects}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;