import React from 'react'
import {Global} from './GlobalStyle' ;
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import { aboutObjOne, aboutObjTwo, aboutObjThree, aboutObjFour } from './components/About/Data';


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
      <About {...aboutObjThree} />
      <About {...aboutObjFour} />
    </Router>
  );
}

export default App;
