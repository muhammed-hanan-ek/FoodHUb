import { useState } from 'react'
import './App.css'
import Bg1 from './Components/Bg1'
import Menu from './Components/Menu'
import PizzaOffer from './Components/PizzaOffer1'

import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Bg1/>
    <PizzaOffer/>
    <Menu/>
    <Footer/>
    </>
  )
}

export default App
