import { sponsors } from '../../data/sponsors-data';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <h2>Our Sponsors</h2>
      <div className="sponsors-grid">
        {sponsors.map(sponsor => (
          <a 
            key={sponsor.id}
            href={sponsor.url}
            className="sponsor-tile"
            target="_blank"
            rel="noopener noreferrer"
            title={sponsor.name}
          >
            <img 
              src={sponsor.logo} 
              alt={`${sponsor.name} logo`} 
              className="sponsor-logo"
            />
            <p className="sponsor-name">{sponsor.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors; 