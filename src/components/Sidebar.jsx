// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Create this file for Sidebar-specific styles

function Sidebar({ topics }) {
    return (
        <aside className="sidebar">
            <ul>
                {topics.map((topic) => (
                    <li key={topic.path}>
                        <NavLink
                            to={topic.path}
                            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
                        >
                            {topic.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
