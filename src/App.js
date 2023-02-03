import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import './App.css';

export default function App() {
  console.log(document.getElementById('about'))

  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

