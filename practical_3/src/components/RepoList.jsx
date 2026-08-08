function RepoList({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="empty-repos">
        <p>No public repositories found for this user.</p>
      </div>
    );
  }

  return (
    <div className="projects-grid fade-in">
      {data.map((repo) => (
        <div key={repo.id} className="project-card">
          <div className="repo-header">
            <h3>{repo.name}</h3>
            <span className="repo-stars">⭐ {repo.stargazers_count}</span>
          </div>
          <p>{repo.description || "No description provided for this GitHub repository."}</p>
          <div className="project-tags">
            {repo.language && <span className="tech-tag">{repo.language}</span>}
            <span className="tech-tag">Branch: {repo.default_branch}</span>
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Open on GitHub &rarr;
          </a>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
