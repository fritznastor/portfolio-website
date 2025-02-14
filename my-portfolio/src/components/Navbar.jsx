import { Link } from "react-scroll";
import "../styles/global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="home" smooth="easeInOutQuad" duration={0} offset={-50}>Home</Link>
      <Link to="about" smooth="easeInOutQuad" duration={0} offset={-50}>About</Link>
      <Link to="experience" smooth="easeInOutQuad" duration={0} offset={-50}>Experience</Link>
      <Link to="projects" smooth="easeInOutQuad" duration={0} offset={-50}>Projects</Link>
      <Link to="contact" smooth="easeInOutQuad" duration={0} offset={-50}>Contact</Link>
    </nav>
  );
}
// The Navbar component is a functional component that renders a navigation bar with links to the Home, Projects, About, and Contact sections of the portfolio page. The links use the react-scroll library to smoothly scroll to the corresponding sections when clicked.  