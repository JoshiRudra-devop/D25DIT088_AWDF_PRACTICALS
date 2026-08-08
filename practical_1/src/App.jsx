import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const studentName = "Rudra Joshi";
  const [activeSection, setActiveSection] = useState("about");
  const themeColor = "#2e7d32"; // Dark green theme color for inline style demo

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
      setActiveSection(section);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, 100);
    }
  }, []);

  const skillList = [
    "React JS",
    "JavaScript",
    "HTML",
    "CSS",
    "Node JS"
  ];

  return (
    <div className="container">

      <NavBar activeSection={activeSection} onSectionClick={setActiveSection} />

      <Header name={studentName} themeColor={themeColor} />

      <About />

      <Skills skills={skillList} />

      <Footer name={studentName} />

    </div>
  );
}
export default App;