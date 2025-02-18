import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub & LinkedIn icons

const Footer = () => {
  return (
    <>
      <TitleContainer> 
        <GradientText>let's build</GradientText> {/* ✅ Gradient Title */}
      </TitleContainer>
      <FooterWrapper>
        <ContactContainer>
          <EmailLink href="mailto:fritznastor@gmail.com">fritznastor@gmail.com</EmailLink>
        </ContactContainer>
        <SocialIcons>
          <a href="https://github.com/fritznastor" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/fritz-n-999187213/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="linkedin-icon" />
          </a>
        </SocialIcons>
      </FooterWrapper>
    </>
  );
};

const GradientText = styled.h1`
  font-size: 100px;
  font-weight: bold;
  text-transform: lowercase;
  background: linear-gradient(90deg, #00274D, #00509E, #003366, #0077B6, #001F3F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Animate gradient */
  background-size: 300% 300%;
  animation: gradientShift 3s infinite alternate ease-in-out;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;




const TitleContainer = styled.div`
  width: 100%;
  text-align: center; /* Centers text */
  padding-bottom: 0px;
  padding-top: 20px;
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Ensures vertical centering */
  margin-top: 0px;
  margin-bottom: -20px;
`;



const FooterWrapper = styled.footer`
  width: 92%;
  max-width: 1200px;
  background: rgb(232, 232, 232);
  padding: 5px 35px;
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    
  margin: 40px auto;
`;

const ContactContainer = styled.div`
  font-size: 20px;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

// ✅ Email Animation Added
const EmailLink = styled.a`
  font-size: 20px;
  color: #333;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  display: inline-block;

  /* Animation for the underline */
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: black;
    transition: width 0.3s ease-in-out;
    position: absolute;
    bottom: -3px;
    left: 0;
  }

  /* On Hover, underline expands */
  &:hover:after {
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  a {
    font-size: 65px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  /* Ensuring LinkedIn stays its original blue */
  .linkedin-icon {
    color: #0a66c2; /* LinkedIn's official blue */
  }

  /* Keeping GitHub icon default */
  a:first-child {
    color: black; /* Default GitHub color */
  }
`;

export default Footer;
