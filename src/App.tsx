import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className='_app'>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
