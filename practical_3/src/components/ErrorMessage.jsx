function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container fade-in">
      <div className="error-icon">⚠️</div>
      <h3>Failed to Load Projects</h3>
      <p className="error-text">{message || "An unexpected error occurred while fetching data from the API."}</p>
      {onRetry && (
        <button className="btn-retry" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
