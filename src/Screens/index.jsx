import React from 'react';
import NavBar from '../Components/Navbar/navBar';
import Home from '../Components/Home/Home';
import Divider from '../Components/divider/Divider';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';
import Footer from '../Components/Footer/Footer';
import Portafolio from '../Components/Portafolio/Portafolio';
import FooterCopy from '../Components/Footer/FooterCopy';
const Screen = () => {
  return <>
    <NavBar/>
    <Home/>
    <Divider/>
    <AboutMe/>
    <Skills/>
    <Portafolio/>
    <Footer/>
  <FooterCopy/>
  </>;
};

export default Screen;
