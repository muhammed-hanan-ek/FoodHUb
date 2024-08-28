import React from 'react'
import pizza1 from './images/pizza1.jpg'
import pizza2 from './images/pizza2.jpeg'
import pizza3 from './images/pizza3.jpeg'
import pizza4 from './images/pizza4.jpg'
import pizza5 from './images/pizza5.jpg'
import cola from './images/cocacola.jpg'
import fanta from './images/fanta.jpg'
import mirinda from './images/mirinda.jpg'
import pepsi from './images/pepsi.jpg'
import sevenup from './images/sevenup.jpg'




const Menu = () => {
  return (
    <div className='mt-2' id='menu'>
      <h1 className='ps-5 fw-bold bg-dark m-0 text-light p-4'>Menu</h1>
      {/* pizza menu */}
      <div id='pizza' className='mb-5'>
        <h1 className='ms-5 mt-5'>Pizza:</h1>
        <div className='mt-5 d-flex flex-wrap justify-content-around'>
          <div className="card" style={{ width: "18rem" }}>
            <img src={pizza1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Neapolitan Pizza</h5>
              <p className="card-text fw-bold text-center">₹ <s>499</s>/- <br /> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={pizza2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Chicago Style Pizza</h5>
              <p className="card-text fw-bold text-center">₹ <s>299</s>/- <br /> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={pizza3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Italian Pizza</h5>
              <p className="card-text fw-bold text-center">₹ <s>449</s>/- <br /> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={pizza4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">California Pizza</h5>
              <p className="card-text fw-bold text-center">₹ <s>549</s>/- <br /> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={pizza5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Sicilian Pizza</h5>
              <p className="card-text fw-bold text-center">₹ <s>499</s>/- <br /> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* cooldrinks */}

      <div id='Beverages' className='mb-5'>
        <h1 className='ms-5 mt-5'>Beverages:</h1>
        <div className='mt-5 d-flex flex-wrap justify-content-around'>
          <div className="card" style={{ width: "18rem" }}>
            <img src={cola} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Coca-cola</h5>
              <p className="card-text fw-bold text-center"> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={fanta} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Fanta</h5>
              <p className="card-text fw-bold text-center">Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={mirinda} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Mirirnda</h5>
              <p className="card-text fw-bold text-center"> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={pepsi} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Pepsi</h5>
              <p className="card-text fw-bold text-center"> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={sevenup} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">7up</h5>
              <p className="card-text fw-bold text-center"> Now only ₹99/-</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-outline-dark ">Order Now</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

