import { NavLink } from "react-router-dom";

function NavBar({ isDarkMode, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Rudra's Portfolio
      </div>
      <ul className="navbar-links" style={{ display: "flex", alignItems: "center" }}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button 
            onClick={onToggleTheme} 
            className="theme-toggle-btn"
            style={{
              background: "transparent",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: "50%",
              width: "38px",
              height: "38px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              marginLeft: "10px",
              transition: "all 0.3s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
