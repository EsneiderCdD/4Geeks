import React from 'react'
import Carrusel from '../components/Carrusel'
import Inicio from '../components/Inicio'
import Slider from '../components/Slider'
import Calificaciones from '../components/Calificaciones'
import Acordeon from '../components/Acordeon'
import Presentacion from '../components/Presentacion'
import TituloSlider from '../components/TituloSlider'
const Home = () => {
  return (
    <div>
     <Presentacion/>
     <Carrusel/>
     <TituloSlider/>
     <Slider/>
     <Acordeon/>
     <Calificaciones/>
      
    </div>
  )
}

export default Home
