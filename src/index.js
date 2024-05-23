import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import './public/sass/style.scss'
import reportWebVitals from './reportWebVitals';
// import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/footer/Contact/Contact';
import Error404 from './components/Error/404';
// import Header from './components/header/Header';
import Layout from './components/Layout';
// import Footer from './components/footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
