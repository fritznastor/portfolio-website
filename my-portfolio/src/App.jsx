import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // Import the button
import Popup from "./components/Popup"; 

function App() {
  return (
    <>
      <Popup /> {/* ✅ Show Popup on page load */}
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <BackToTop /> {/* Add the Back to Top button */}
    </>
  );
}

export default App;
