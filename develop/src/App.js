import React from 'react';
import './App.css';
import Navbar from './components/NavBar/index';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';


function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' exact element={<About />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      
    </Router>
  );
}

export default App;