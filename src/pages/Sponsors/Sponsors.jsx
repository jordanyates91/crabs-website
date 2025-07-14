import React from 'react';
import Sponsors from '../../components/Sponsors/Sponsors';
import './Sponsors.css';

function SponsorsPage() {
  return (
    <main className="sponsors-page">
      <div className="sponsors-container">
        <h1>Our Sponsors</h1>
        <p>We are grateful for the support of our amazing sponsors who help make our rugby program possible.</p>
        <Sponsors />
      </div>
    </main>
  );
}

export default SponsorsPage; 