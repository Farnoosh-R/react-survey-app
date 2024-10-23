import React from 'react';
import './App.css';
import FormUserInfo from './components/FormUserInfo/FormUserInfo';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import QuestionOne from './components/QuestionOne/QuestionOne';
import ParentApp from './components/ParentApp/ParentApp';

function App() {
  return (
    <div className="App container">
    <BrowserRouter>
    <Routes>    
    <Route path='/' element={<Layout><FormUserInfo /></Layout>} />
    <Route path='/q-one' element={<Layout><QuestionOne /></Layout>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
