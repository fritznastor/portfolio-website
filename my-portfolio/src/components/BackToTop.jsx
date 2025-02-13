import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../styles/backtotop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(true)
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to play the sound and scroll to the top
  const handleClick = () => {
    const audio = new Audio("/sounds/Home.mp3"); // Ensure path is correct
    audio.play(); // Play sound
    scroll.scrollToTop({ duration: 0 }); // Scroll up
  };

  return (
    <>
      {visible && (
        <button className="back-to-top" onClick={handleClick}>
          <span className="button_top">Top</span>
        </button>
      )}
    </>
  );
}
