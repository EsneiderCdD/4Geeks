import React from 'react'
import Carrusel from '../components/Carrusel'
import Inicio from '../components/Inicio'
import Slider from '../components/Slider'
import Calificaciones from '../components/Calificaciones'
import Acordeon from '../components/Acordeon'
import Presentacion from '../components/Presentacion'
import TituloSlider from '../components/TituloSlider'
import DescripcionServicios from '../components/DescripcionServicios'
import MiCarrusel from '../components/Carrusel'
const Home = () => {
  return (
    <div>
     <Presentacion/>
     <MiCarrusel/>
     <TituloSlider/>
     <Slider/>
     <Acordeon/>
     <DescripcionServicios/>
     <Calificaciones/>
     
      
    </div>
  )
}

export default Home
