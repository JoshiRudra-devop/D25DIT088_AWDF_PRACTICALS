function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calibration Management System",
      description: "A web application for tracking equipment calibration schedules, managing certificate logs, and automated maintenance reminders.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Quotation Management System",
      description: "A comprehensive tool to create, track, and generate professional PDF sales quotations and invoices with real-time tax calculation.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Android Service Book Offline App",
      description: "An offline-first mobile app for field service engineers to log maintenance records, job sheets, and service history without internet connectivity.",
      tech: ["Android", "Kotlin", "SQLite", "Room DB"],
      link: "#"
    }
  ];

  return (
    <section className="projects-container">
      <h2>My Projects</h2>
      <p className="projects-sub">A curated selection of the projects I've built recently.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tag, idx) => (
                <span key={idx} className="tech-tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" onClick={(e) => e.preventDefault()}>
              View Details &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;