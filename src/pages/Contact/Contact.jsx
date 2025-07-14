import './Contact.css';

const ExternalLinkIcon = () => (
  <svg 
    className="external-link-icon" 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    style={{ marginLeft: '4px' }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <main className="main-content">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <section className="contact-section">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you're interested in joining the team, 
              want to learn more about rugby, or have any questions, feel free to reach out.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:butterugby@gmail.com">butterugby@gmail.com</a>
              </div>
              <div className="contact-item">
                <h3>Social Media</h3>
                <a 
                  href="https://www.facebook.com/ButteCRABSRugby" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Follow us on Facebook<ExternalLinkIcon />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact; 