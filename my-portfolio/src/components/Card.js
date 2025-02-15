import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Card = ({ images, title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Image Carousel (Top Half) */}
        <Slider className="carousel" dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
          {images.map((img, index) => (
            <div key={index} className="carousel-item">
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>

        {/* Text Content (Bottom Half) */}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 350px;
    border-radius: 20px;
    background: #e0e0e0;
    box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Carousel */
  .carousel {
    width: 100%;
    height: 50%;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  /* Card Content */
  .card-content {
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
  }

  .card-content h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .card-content p {
    font-size: 14px;
    color: #555;
  }
`;

export default Card;
