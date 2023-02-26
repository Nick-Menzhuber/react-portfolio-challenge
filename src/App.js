import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  console.log(document.getElementById('about'))

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
      <Route exact path='/' element={ <About /> } />
      <Route exact path='project' element={ <Project /> } />
      <Route exact path='contact' element={ <Contact /> } />
      <Route exact path='resume' element={ <Resume /> } />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

