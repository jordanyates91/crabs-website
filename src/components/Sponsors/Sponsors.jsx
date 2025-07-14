import { sponsors } from '../../data/sponsors-data';
import './Sponsors.css';

const WebsiteIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 4.08c.99 0 1.8.81 1.8 1.8s-.81 1.8-1.8 1.8-1.8-.81-1.8-1.8.81-1.8 1.8-1.8zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
  </svg>
);

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <h2>Our Sponsors</h2>
      <div className="sponsors-grid">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="sponsor-tile">
            <img 
              src={sponsor.logo} 
              alt={`${sponsor.name} logo`} 
              className="sponsor-logo"
            />
            <p className="sponsor-name">{sponsor.name}</p>
            <div className="sponsor-links">
              {sponsor.website && (
                <a
                  href={sponsor.website}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${sponsor.name}'s website`}
                >
                  <WebsiteIcon />
                </a>
              )}
              {sponsor.facebook && (
                <a
                  href={sponsor.facebook}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${sponsor.name}'s Facebook`}
                >
                  <FacebookIcon />
                </a>
              )}
              {sponsor.instagram && (
                <a
                  href={sponsor.instagram}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${sponsor.name}'s Instagram`}
                >
                  <InstagramIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors; 