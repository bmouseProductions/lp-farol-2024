import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import './global.css'
import Home from './pages/Home/Home'
import ErrorPage from './pages/Error/ErrorPage';
import BackToTop from './components/BackToTop/BackToTop';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
    </Router>
  </React.StrictMode>,
)
