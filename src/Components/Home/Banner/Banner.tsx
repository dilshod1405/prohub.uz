import React, { useState, useEffect } from 'react'
import './banner.scss'
import { Container, Box } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { motion } from "motion/react"
import buttons from '../../Constants/Buttons/Buttons';

const Banner:React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const specialities = [
    {
      name: <div data-aos="fade-down" dara-aos-duration="2000" className="name"><h1><span>Bilimga</span> tikilgan sarmoya <span>Kelajakka</span> tikilgan sarmoyadir</h1></div>,
      src: "banner.png",
      description: "prohub platformasi zamonaviy kasblarni arzon va sifatli tarzda o'rgatish maqsadida ishlab chiqilgan.",
      buttons: <div className='menus'>
        <p>Dasturlash</p>
        <p>Arxitektura</p>
        <p>Dizayn</p>
        <p>Video montaj</p>
      </div>,
      button: <div className='button'>{buttons.start}</div>
    },
    {
      name: <div data-aos="fade-down" dara-aos-duration="2000" className='name'><CodeIcon className='icons'/> <h1><span>Dasturlash</span> kurslari</h1></div>,
      description: "Dasturlash sohasi bugungi kunda eng yuqori talab va maoshga ega sohalardan biri hisoblanadi. Shu sababli uni o'rganuvchilar soni kundan kunga ortib bormoqda.",
      src: "banner2.png",
      button: <div className='button'>{buttons.start}</div>,
      buttons: <div className='menus'>
        <p>Frontend</p>
        <p>Backend</p>
        <p>Mobile</p>
      </div>
    },
    {
      name: <div data-aos="fade-down" dara-aos-duration="2000" className="name"><ArchitectureIcon className='icons'/> <h1><span>Arxitektura </span>kurslari</h1></div>,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      src: "arch.png",
      button: <div className='button'>{buttons.start}</div>,
      buttons: <div className='menus'>
        <p>Arxitektura</p>
        <p>Konstruksiya</p>
        <p>Dizayn</p>
        <p>Smeta</p>
      </div>
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % specialities.length);
        setFade(false);
      }, 950);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, fade, specialities.length]);

    return (
      <div className='banner'>
        <Container maxWidth="xl">
        <motion.div initial={{ x: "0%" }} animate={{ y: "calc(4vw - 3%)" }} className='box animate__animated animate__fadeIn'>
          <div className={`content  ${fade ? "fade-out" : "fade-in"}`}>
            <Box className='left'>
              {specialities[currentIndex].name}
              <p>{specialities[currentIndex].description}</p>
              {specialities[currentIndex].buttons}
              {specialities[currentIndex].button}
            </Box>
            <Box className='right'>
              <img src={specialities[currentIndex].src} alt="" data-aos="zoom-in" data-aos-duration="1500"/> 
            </Box>
          </div>
        </motion.div>
        </Container>
      </div>
    )
  }

  export default Banner