import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import BackToTop from "./components/BackToTop"; // Import the button

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <BackToTop /> {/* Add the Back to Top button */}
    </>
  );
}
