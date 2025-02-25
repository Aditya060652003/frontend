import React from 'react'
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Qualities from '../components/Qualities';
import Menu from '../components/Menu';
import WhoAreWe from '../components/WhoweAre';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Reservation from '../components/Reservation';

const Home = () => {
  return (
    <>
        <HeroSection />
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Team/>
        <Footer/>
        <Reservation/>
    </>
  )
}

export  default Home;