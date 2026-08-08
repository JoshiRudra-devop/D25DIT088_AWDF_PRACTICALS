function Spinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Fetching projects from GitHub...</p>
    </div>
  );
}

export default Spinner;
