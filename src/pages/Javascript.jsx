// src/pages/HTML.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import jsTopics from '../data/htmlTopics';

function Javascript() {
  return (
    <div className="page-container">
      <Sidebar topics={jsTopics} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Navigate to={jsTopics[0].path} />} />
          {jsTopics.map((topic) => (
            <Route
              key={topic.path}
              path={topic.path}
              element={<Content title={topic.title} content={topic.content} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Javascript;
