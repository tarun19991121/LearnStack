import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import cssTopics from '../data/cssTopics';

function CSS() {
  return (
    <div className="page-container">
      <Sidebar topics={cssTopics} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Navigate to={cssTopics[0].path} />} />
          {cssTopics.map((topic) => (
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

export default CSS;
