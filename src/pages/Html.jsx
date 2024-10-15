import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import htmlTopics from '../data/htmlTopics';

function HTML() {
  return (
    <div className="page-container">
      <Sidebar topics={htmlTopics} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Navigate to={htmlTopics[0].path} />} />
          {htmlTopics.map((topic) => (
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

export default HTML;
