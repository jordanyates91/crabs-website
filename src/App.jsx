import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Schedule from './pages/Schedule/Schedule';
import SponsorsPage from './pages/Sponsors/Sponsors';
import Contact from './pages/Contact/Contact';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import teamPhoto from '../assets/team-photo.jpg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="content-wrapper">
                <div className="main-column">
                  <section className="hero-section">
                    <h1>Welcome to C.R.A.B.S. Rugby</h1>
                    <p className="subtitle">Home of Butte C.R.A.B.S. rugby football club</p>
                  </section>
                  <section className="about-section">
                    <h2>About Us</h2>
                    <p className="about-text">
                      The Butte C.R.A.B.S. were founded in 1977 by Tech students and are a member of the Montana Rugby Union which has clubs spread across Montana, Idaho and Washington. The C.R.A.B.S. practice and play their home games on the <a href="https://maps.app.goo.gl/aCk19QobTHEZLdHX6" target="_blank" rel="noopener noreferrer">field</a> located south of the Montana Tech HPER Complex.
                    </p>
                    <div className="team-photo-container">
                      <img 
                        src={teamPhoto} 
                        alt="Team Photo @ South HPER field. September 8th, 2022" 
                        title="Team Photo @ South HPER field. September 8th, 2022"
                        className="team-photo"
                      />
                      <div className="photo-caption">Team Photo @ South HPER field. September 8th, 2022</div>
                    </div>
                  </section>
                  <div className="mobile-events">
                    <UpcomingEvents />
                  </div>
                </div>
                <aside className="side-column">
                  <UpcomingEvents />
                </aside>
              </div>
            </main>
          } />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
