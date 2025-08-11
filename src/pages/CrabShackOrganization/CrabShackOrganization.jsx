import React from 'react';
import './CrabShackOrganization.css';

function CrabShackOrganization() {
  return (
    <div className="cso-page">
      <main className="main-content">
        <div className="cso-container">
          <h1>Crab Shack Organization</h1>
          <p className="cso-description">
            The brainchild of Samuel 'Sue' Warner that started as a simple idea to have a crash pad in Butte as we used to have with the OG Crab Shack courtesy of Mr Clean's parents. This idea through many conversations swelled into the idea that we as alumni that had benefited so much from the Crab Shack could make the effort to provide that same type of gathering place to the current team. Sue was the driving force behind organizing and recruiting members and still serves on the Board of Directors today. The CSO was founded as a non-profit in 2023 and continues to raise money for education and affordable housing for rugby players in Butte and the Montana region. 
As of writing the CSO is on track to purchase a new home for the Crabs by 2028! We are also granting scholarships to three members of the Crabs every season as well as providing education through clinics and training sessions with the current team.
If you'd like to learn more about our mission or to donate please reach out to <a href="mailto:crabshackorganization@gmail.com">crabshackorganization@gmail.com</a>!
          </p>
          <div className="cso-sections-row">
            <div className="cso-merch-section">
              <h2>
                <a href="https://stores.inksoft.com/crabshackorganization/shop/home" className="cso-section-link" target="_blank" rel="noopener noreferrer">
                  CSO Merch Store
                </a>
              </h2>
              <img src="/assets/crab-shack-organization.png" alt="Crab Shack Organization Logo" className="cso-logo" />
              <p className="cso-merch-description">Purchase Crab Shack Organization branded gear using the link above to help fund the CSO. A portion of the profits will be put towards scholarships, affordable housing, and education for rugby players in Butte, Montana.</p>
            </div>
            <div className="cso-qr-section">
              <h2>
                <a href="https://www.zeffy.com/en-US/donation-form/98768829-2906-478c-84e1-8878b937ef40" className="cso-section-link" target="_blank" rel="noopener noreferrer">
                  Donate to the CSO Non-Profit
                </a>
              </h2>
              <img src="/assets/CSO_QR_code.png" alt="CSO Non-Profit Donation QR Code" className="cso-qr" />
              <p>Click the link above or scan the QR code to make a tax-deductible donation to the Crab Shack Organization non-profit. Your support helps provide scholarships, affordable housing, and education for rugby players in Butte,Montana region.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CrabShackOrganization;