import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-sub">Have a question or want to work together? Let's connect!</p>

      <div className="contact-layout">
        {submitted ? (
          <div className="submission-success fade-in">
            <h3>Thank You, {formData.name}!</h3>
            <p>Your message has been sent successfully. I will get back to you at <strong>{formData.email}</strong> as soon as possible.</p>
            <button className="btn-reset" onClick={handleReset}>Send Another Message</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        )}

        {/* Real-time controlled preview section */}
        <div className="preview-card">
          <h3>Real-time Input Preview</h3>
          <div className="preview-field">
            <span className="preview-label">Name:</span>
            <span className="preview-value">{formData.name || <em className="placeholder">Not entered yet</em>}</span>
          </div>
          <div className="preview-field">
            <span className="preview-label">Email:</span>
            <span className="preview-value">{formData.email || <em className="placeholder">Not entered yet</em>}</span>
          </div>
          <div className="preview-field">
            <span className="preview-label">Message:</span>
            <p className="preview-value message-preview">{formData.message || <em className="placeholder">Start typing to see preview...</em>}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
