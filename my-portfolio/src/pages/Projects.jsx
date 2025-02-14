import "../styles/projects.css";
import GradientText from "../components/GradientText/GradientText";
import { useState } from "react";

const projects = [
  {
    name: "Compound Interest Calculator",
    keywords: "Web Development, Design, Finance",
    year: "2024",
    description:
      "A user-friendly calculator that visualizes compound interest over time, making complex financial concepts simple.",
    images: ["my-portfolio/public/images/tastequest/tastequest_homepage.png"],
  },
  {
    name: "Browser Agnostic Tab Manager",
    keywords: "Web Development, Productivity, Organization",
    year: "2022",
    description:
      "A tool designed to manage and organize learning resources across different devices and browsers seamlessly.",
    images: ["/images/project2-1.png", "/images/project2-2.png"],
  },
  {
    name: "AI-Powered Task Scheduler",
    keywords: "Machine Learning, Web App, Automation",
    year: "2023",
    description:
      "An AI-driven task manager that helps optimize productivity by automatically scheduling tasks based on priority and deadlines.",
    images: ["/images/project3-1.png", "/images/project3-2.png"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      {/* Left-Aligned Title */}
      <div className="projects-title-container">
        <h1 className="projects-title">
          <GradientText colors={["#2E4E1E", "#3D6B26", "#4C8530", "#5A9E3A", "#6CBF44"]}>
            projects
          </GradientText>
        </h1>
      </div>

      {/* Divider Line */}
      <div className="divider"></div>

      {/* Project Entries */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-row">
            {/* Left Side - Project Info */}
            <div className="project-left">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-keywords">{project.keywords}</p>
              <p className="project-year">{project.year}</p>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="project-right">
              <ImageCarousel images={project.images} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Image Carousel Component */
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={prevImage}>&#8592;</button>
      <img src={images[currentIndex]} alt="Project Screenshot" className="carousel-image" />
      <button className="carousel-btn right" onClick={nextImage}>&#8594;</button>
    </div>
  );
}
