// import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Form from './components/Form';

function App() {
  return <>
  <Navbar/>
  <About/>
  <Skills/>
  <Projects/>
  <Education/>
  <Form/>
  </>
}

export default App;
