import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // Import the button

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop /> {/* Add the Back to Top button */}
    </>
  );
}
