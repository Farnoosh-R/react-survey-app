import React, { useState } from 'react';
import './App.css';
import FormUserInfo from './components/FormUserInfo/FormUserInfo';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ParentApp from './components/ParentApp/ParentApp';
import UserInfoContext, { UserInfoProvider } from './components/Contexts/UserInfoContext';
import { AnswerContextProvider } from './components/Contexts/AnswerContext';






function App() {


  return (
    <UserInfoProvider>
    <AnswerContextProvider>
    <div className="App container">
    <BrowserRouter>
    <Routes>    
    <Route path='/' element={<Layout><FormUserInfo /></Layout>} />
    <Route path='/q' element={<Layout><ParentApp /></Layout>} />
    </Routes>
    </BrowserRouter>
    </div>
    </AnswerContextProvider>
    </UserInfoProvider>
  );
}

export default App;
