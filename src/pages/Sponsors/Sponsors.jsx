import React from 'react';
import Sponsors from '../../components/Sponsors/Sponsors';
import './Sponsors.css';

function SponsorsPage() {
  return (
    <div className="sponsors-page">
      <main className="main-content">
        <div className="sponsors-container">
          <h1>Our Sponsors</h1>
          <p className="sponsors-description">
            We are grateful for the support of our amazing sponsors who help make our rugby program possible. 
            Through their support, the C.R.A.B.S. are able to provide jerseys, tournament entry fees, and 
            field equipment to enable us to play at home and away.
          </p>
          <div className="sponsors-content">
            <Sponsors />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SponsorsPage; 