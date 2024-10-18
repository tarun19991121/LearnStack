// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this file for Home-specific styles

function Home() {
  return (
    <div className="home">
      <h1 className='main-heading'>Welcome to LearnStack</h1>
      <p>Select a topic to get started with your journey in LEARNING</p>
      <div className="topics">
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
        <div className="home-link-info">
          <p>Learn HTML, the building structure of a site</p>
          <p>Learn CSS, provide styling to a site</p>
          <p>Learn CSS, provide interactivity to a site</p>
        </div>
      </div>
      <div className="site-info">
        <h2 className='sub-heading'>Learn all the things that will get you started with your journey in becoming a web developer</h2>
        <p>This site is for all the beginners who are interested in learning web development but don't know where to start or how much of information is required for starting a career in this field</p>
      </div>
      <div className="img">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img src="src\assets\images\html-logo.png" alt="" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src="src\assets\images\css-logo.png" alt="" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="src\assets\images\js-logo.png" alt="" /></a>
      </div>
      <div className="learn_more">
        <h3>want to learn more advance topics? click on the above images</h3>
      </div>
    </div>
  );
}

export default Home;
