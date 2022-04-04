import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Hobby from './Components/Hobby/Hobby';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Hobby/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;