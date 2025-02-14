import "../styles/projects.css";
import GradientText from "../components/GradientText/GradientText";
import { useState } from "react";

const projects = [
  {
    name: "taste quest",
    keywords: "Web Application, Python/Django, HTML/Tailwind CSS, Docker",
    year: "2024",
    description:
      "TasteQuest is a social dining web application that helps users discover the best restaurants based on cuisine, price, and location. Users can search for restaurants, track their visited locations, add ratings and reviews, and follow friends to see where they've been dining. The platform integrates social networking features, including friend requests and shared favorites, making it easier for users to explore and recommend dining spots. Built with Python/Django for the backend and Google Places API for restaurant data.",
    images: ["/images/tastequest/tastequest_homepage.png", 
      "/images/tastequest/tastequest_profilepage.png",
      "/images/tastequest/tastequest_favoritespage.png",
      "/images/tastequest/tastequest_socialpage.png",
      "/images/tastequest/tastequest_friendinfopage.png",
      "/images/tastequest/tastequest_docker.png",
    ],
  },
  {
    name: "Northern Trust FX Dashboard",
    keywords: "Web Application , Python/Flask, Javascript/CSS",
    year: "2024",
    description:
      "A tool designed to manage and access real-time foreign exchange rates for quick decision making. The application provides a dashboard with current exchange rates, historical data, and currency conversion tools.",
    images: ["/images/northerntrusthackathon/northerntrust_homepage.png", "/images/northerntrusthackathon/northerntrust_fxpage.png", "/images/northerntrusthackathon/northerntrust_currentholdings.png", "/images/northerntrusthackathon/northerntrust_currencyconverter.png", "/images/northerntrusthackathon/northerntrust_fxprediction.png", "/images/northerntrusthackathon/northerntrust_fxpredictiongraph.png",],
  },
  {
    name: "To Do List",
    keywords: "Web Application, Python/Django, HTML/CSS, Docker",
    year: "2024",
    description:
      "Ahh yes, the todo list, a classic. you can add multiple people to the list, and they can add tasks to the list. It's a good way to stay organized and get things done.",
    images: ["/images/todolist/todolist_dashboard.png", "/images/todolist/todolist_settings.png", "/images/todolist/todolist_teams.png"],
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
      <img src={images[currentIndex]} alt="Project Screenshot" className="carousel-image" />

      {/* Navigation Buttons Below Image */}
      <div className="carousel-controls">
        <button className="carousel-btn left" onClick={prevImage}>&#8592;</button>
        <button className="carousel-btn right" onClick={nextImage}>&#8594;</button>
      </div>
    </div>
  );
}
