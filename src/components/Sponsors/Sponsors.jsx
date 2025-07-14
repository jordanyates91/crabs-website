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
    <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>
);

const Sponsors = () => {
  return (
    <section className="sponsors-section">
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