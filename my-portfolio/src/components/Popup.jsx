import React, { useState, useEffect } from "react";
import "../styles/popup.css"; 

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-container">
          {/* Close button positioned at the top-left */}
          <button className="popup-close" onClick={() => setIsVisible(false)}>✖</button>
          <p>My website is best viewed on a full-screen laptop/monitor. I am currently working on making it look pretty for mobile!</p>
        </div>
      </div>
    )
  );
};

export default Popup;
