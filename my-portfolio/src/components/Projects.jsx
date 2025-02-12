// src/components/Projects.jsx
import projects from "../data/projects.json";
import { motion } from "framer-motion";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Work</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
