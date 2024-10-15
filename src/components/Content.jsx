// src/components/Content.js
import React from 'react';
import './Content.css'; // Create this file for Content-specific styles

function Content({ title, content }) {
    return (
        <div className="content">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export default Content;
