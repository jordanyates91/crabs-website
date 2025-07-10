import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Schedule from './pages/Schedule';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <h1>Welcome to C.R.A.B.S Rugby</h1>
              <p>Home of Butte C.R.A.B.S rugby football team</p>
            </main>
          } />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
