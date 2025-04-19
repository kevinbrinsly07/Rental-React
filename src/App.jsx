import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import VehiclesSection from './components/vehiclesSection/vehiclesSection'
import Footer from './components/footer/footer'
import Services from './components/servicesSection/services' 
import Contact from './components/contact/contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <VehiclesSection/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;