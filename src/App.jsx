import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        {/* Show Nav only after login */}
        {isLoggedIn && (
          <nav style={{ padding: '15px', background: '#f0f0f0' }}>
            <div>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src="/vite.svg" className="logo react" alt="React logo" />
              </a>
            </div>
            <Link to="/home" style={{ marginLeft: '10px' }}>Home</Link>
            <Link to="/about" style={{ marginLeft: '10px' }}>About</Link>
            <Link to="/projects" style={{ marginLeft: '10px' }}>Projects</Link>
            <Link to="/contact" style={{ marginLeft: '10px' }}>Contact</Link>
          </nav>
        )}

        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {/* Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </>
          ) : (
            // Redirect to login if trying to access other pages
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
