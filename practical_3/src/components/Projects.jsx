import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import RepoList from "./RepoList";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Check query parameter for search term
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, []);

  // Using JoshiRudra-devop or fall back to a public github user
  const githubUsername = "JoshiRudra-devop";

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
      if (!response.ok) {
        throw new Error(`Failed to fetch repositories (HTTP status ${response.status})`);
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching repositories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="projects-container">
      <h2>My Projects</h2>
      <p className="projects-sub">
        Dynamically loaded public repositories fetched directly from GitHub API for <strong>{githubUsername}</strong>.
      </p>

      {!loading && !error && (
        <div className="search-container" style={{ marginBottom: "25px", width: "100%" }}>
          <input
            type="text"
            placeholder="🔍 Search repositories by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            style={{
              width: "100%",
              padding: "12px 18px",
              fontSize: "16px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              outline: "none",
              transition: "border-color 0.3s, box-shadow 0.3s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}
          />
        </div>
      )}

      {loading && <Spinner />}

      {error && <ErrorMessage message={error} onRetry={fetchRepos} />}

      {!loading && !error && <RepoList data={filteredRepos} />}
    </section>
  );
}

export default Projects;
