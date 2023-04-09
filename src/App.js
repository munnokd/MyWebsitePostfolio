import React from 'react';
import AboutMe from "./components/AboutMe";
import BottomBar from './components/BottomBar';
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import SnackbarProvider from 'react-simple-snackbar'

function App() {
  return (
    <div className='main_body'>
      <Navbar />
      <div className='w-[100%]'>
        <Home />
        <AboutMe />
        <Technology />
        <Experience />
        <Projects />
        <SnackbarProvider>
          <Contacts />
        </SnackbarProvider>
        <div className='border-b-2 my-[40px] ' ></div>
        <BottomBar />
      </div>
    </div>

  );
}

export default App;
