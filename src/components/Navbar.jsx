import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-logo">
                LearnStack
            </NavLink>
            <div className="nav-links">
                <NavLink
                    to="/html"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    HTML
                </NavLink>
                <NavLink
                    to="/css"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    CSS
                </NavLink>
                <NavLink
                    to="/javascript"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    JavaScript
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
