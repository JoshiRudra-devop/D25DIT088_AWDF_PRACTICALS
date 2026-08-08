import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      textAlign: "center",
      padding: "60px 20px",
      background: "rgba(255, 255, 255, 0.4)",
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
      margin: "40px 0"
    }}>
      <h2 style={{ fontSize: "72px", margin: "0", color: "#6366f1" }}>404</h2>
      <h3 style={{ fontSize: "24px", margin: "10px 0", color: "#1f2937" }}>Page Not Found</h3>
      <p style={{ margin: "20px 0 30px", color: "#4b5563" }}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={{
        padding: "12px 24px",
        background: "linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "inline-block"
      }}>
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
