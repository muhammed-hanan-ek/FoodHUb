import React from 'react'
import './bg1.css'

const Bg1 = () => {
  return (
    <div>
        <div id="bg1">
        <nav className="navbar navbar-expand-lg " id='nav1'>
  <div className="container-fluid">
    <a className="navbar-brand text-light ms-3" href="#" id='fudhub'>FudHub</a>
    <button className="navbar-toggler btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav fw-bold fs-5 me-3"id='navitems'>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#menu">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='text-light' id='Fh-and-slogan'>
        <h1 id='fhub'>FudHub</h1>
        <span id='slogan'>Your Hub for <br /> All Things Delicious</span>
        </div>
        </div>

       
    </div>
  )
}

export default Bg1