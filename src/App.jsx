import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="mid">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}

export default App
