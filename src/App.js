import React from 'react';
import AboutMe from "./components/AboutMe";
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
    </>

  );
}

export default App;
