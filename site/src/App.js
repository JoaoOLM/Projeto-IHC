//import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import Header from './components/layout/header/Header'

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
