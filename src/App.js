import React from 'react'
import {Global} from './GlobalStyle' ;
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import { aboutObjOne, aboutObjTwo } from './components/About/Data';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  const [isOpen,setIsOpen] = React.useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Global />
      <Sidebar isOpen={isOpen} toggle ={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <About {...aboutObjOne} />
      <About {...aboutObjTwo} />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
