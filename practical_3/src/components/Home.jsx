import { useState } from "react";
import About from "./About";
import Skills from "./Skills";

function Home() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const skillList = [
    "React JS",
    "JavaScript",
    "HTML",
    "CSS",
    "Node JS"
  ];

  return (
    <div className="home-container">
      <About />
      
      <div className="toggle-section">
        <button 
          className="btn-toggle" 
          onClick={() => setShowMoreInfo(!showMoreInfo)}
        >
          {showMoreInfo ? "Hide Profile Details" : "Show Profile Details"}
        </button>
        
        {showMoreInfo && (
          <div className="more-info-card fade-in">
            <h3>Additional Details</h3>
            <p>
              Beyond development, I enjoy contributing to open-source, learning cloud architectures, and solving algorithmic challenges.
            </p>
            <p><strong>Current Goal:</strong> Mastering full-stack development using modern web frameworks.</p>
          </div>
        )}
      </div>

      <Skills skills={skillList} />
    </div>
  );
}

export default Home;
