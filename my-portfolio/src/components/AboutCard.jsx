import React, { useState } from "react";
import styled from "styled-components";

const AboutCard = ({ title, description, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevImage}>&#8592;</button>
          <img src={images[currentIndex]} alt="Project Screenshot" className="carousel-image" />
          <button className="carousel-btn right" onClick={nextImage}>&#8594;</button>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 1250px;
    height: 700px;
    border-radius: 30px;
    background: rgb(251, 251, 251);
    box-shadow: 15px 15px 30px #bebebe, -10px -10px 20px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    padding: 15px;
    transition: 0.3s ease-in-out; /* ✅ Removes hover zoom effect */
  }

  /* Image Carousel */
  .carousel {
    position: relative;
    width: 100%;
    height: 100%; /* ✅ Increases image size */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    filter: brightness(80%); /* Decrease brightness */
    transition: 0.4s ease-in-out;
  }

  /* Remove hover transform effect */
  .card:hover {
    transform: scale(1.01); /* ✅ Stops zooming */
  }

  /* Carousel Navigation Buttons */
  .carousel-btn {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    font-size: 18px;
    border-radius: 50%;
  }

  .carousel-btn.left {
    left: 10px;
  }

  .carousel-btn.right {
    right: 10px;
  }

  .carousel-btn:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  /* Card Content */
  .card-content {
    padding: 20px;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`;



export default AboutCard;
