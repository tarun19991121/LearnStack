import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import JavaScript from './pages/JavaScript';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html/*" element={<HTML />} />
            <Route path="/css/*" element={<CSS />} />
            <Route path="/javascript/*" element={<JavaScript />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;