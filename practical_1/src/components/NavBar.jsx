import React from "react";

function NavBar({ activeSection, onSectionClick }) {
  const sections = ["About", "Skills"];

  return (
    <nav className="navbar" style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "25px",
      padding: "12px 20px",
      background: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
    }}>
      {sections.map((section) => {
        const isSelected = activeSection === section.toLowerCase();
        return (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: isSelected ? "#1e88e5" : "#555",
              fontWeight: "600",
              fontSize: "16px",
              padding: "8px 16px",
              borderRadius: "6px",
              background: isSelected ? "#e3f2fd" : "transparent",
              transition: "all 0.3s ease",
              border: isSelected ? "1px solid #1e88e5" : "1px solid transparent"
            }}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick(section.toLowerCase());
              const element = document.getElementById(section.toLowerCase());
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            {section}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
