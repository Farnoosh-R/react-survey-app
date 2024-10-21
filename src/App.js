import React from 'react';
import './App.css';
import FormUserInfo from './components/FormUserInfo/FormUserInfo';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App container">
    <BrowserRouter>
    <Routes>    
    <Route path='/' element={<Layout><FormUserInfo /></Layout>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
