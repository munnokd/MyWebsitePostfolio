import React from 'react';
import AboutMe from "./components/AboutMe";
import BottomBar from './components/BottomBar';
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Technology/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <div className='border-b-2 my-[40px]' ></div>
      <BottomBar/>
    </>

  );
}

export default App;
