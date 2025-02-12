// src/components/Navbar.jsx
import { Link } from "react-scroll";
import "../styles/global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={500}>Home</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  );
}
