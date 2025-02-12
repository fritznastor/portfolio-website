import projectData from "../data/projects.json";

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projectData.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </section>
  );
}
