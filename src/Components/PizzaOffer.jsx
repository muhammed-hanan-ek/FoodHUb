import React from 'react'
import pizza from './images/pizza.png'
import './offer.css'
import pizzabg from './images/pizzabg.png'

const pizzaOffer = () => {
  return (
    <div className='p-0 m-0 bg-dark row continer' id='bgoffer'>
        <div className="col-lg-4 text-light m-0 p-0 container"><img id='pizzabg' src={pizza} alt="" /></div>
        <div className="col-lg-4 text-light m-0 p-0 container">
            <p className='mt-5 pt-' id='offdialogue'>Now Get Any Pizza at Just</p>
            <h1 id='price'>99/-</h1>
            <a href="#pizza" className='btn btn-outline-light fs-5 mt-3'>Order Now</a>
        </div>
        <div className="col-lg-4 text-light m-0 p-0 container"><img id='pizzabg' src={pizza} alt="" /></div>
        
    </div>
  )
}

export default pizzaOffer