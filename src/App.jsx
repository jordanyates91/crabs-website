import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Schedule from './pages/Schedule/Schedule';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <section className="hero-section">
                <h1>Welcome to C.R.A.B.S Rugby</h1>
                <p className="subtitle">Home of Butte C.R.A.B.S rugby football club</p>
              </section>
              <section className="about-section">
                <h2>About Us</h2>
                <p className="about-text">
                  The Butte C.R.A.B.S were founded in 1977 by Tech students and are a member of the Montana Rugby Union which has clubs spread across Montana, Idaho and Washington. The Crabs practice and play their home games on a <a href="https://maps.app.goo.gl/aCk19QobTHEZLdHX6" target="_blank" rel="noopener noreferrer">field</a> located south of the Montana Tech HPER Complex.
                </p>
              </section>
            </main>
          } />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
