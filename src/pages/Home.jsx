// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this file for Home-specific styles

function Home() {
  return (
    <div className="home">
      <h1>Welcome to W3School Clone</h1>
      <p>Select a topic to get started:</p>
      <div className="home-links">
        <Link to="/html" className="home-link">
          HTML
        </Link>
        <Link to="/css" className="home-link">
          CSS
        </Link>
        <Link to="/javascript" className="home-link">
          JavaScript
        </Link>
      </div>
    </div>
  );
}

export default Home;
