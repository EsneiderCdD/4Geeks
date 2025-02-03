import React from 'react'
import Carrusel from '../components/Carrusel'
import Inicio from '../components/Inicio'
import Slider from '../components/Slider'
import Calificaciones from '../components/Calificaciones'
import Acordeon from '../components/Acordeon'
import Presentacion from '../components/Presentacion'
import TituloSlider from '../components/TituloSlider'
import DescripcionServicios from '../components/DescripcionServicios'
const Home = () => {
  return (
    <div>
     <Presentacion/>
     <Carrusel/>
     <TituloSlider/>
     <Slider/>
     <Acordeon/>
     <DescripcionServicios/>
     <Calificaciones/>
      
    </div>
  )
}

export default Home
