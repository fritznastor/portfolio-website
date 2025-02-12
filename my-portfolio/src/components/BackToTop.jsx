import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../styles/backtotop.css"; // Import styling

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(true);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <button className="back-to-top" onClick={() => scroll.scrollToTop({duration: 100})}>
          <span className="button_top">Top</span>
        </button>
      )}
    </>
  );
}
