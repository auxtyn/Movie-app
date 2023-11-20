import React from 'react'

const Carousel = () => {
  return (
    <>

      {/* <div id="carouselExample" className="carousel slide container">
        <div className="carousel-inner">
         
          <div className="carousel-item active">
            <img src="images/pexels2.jpg" className="d-block w-100" alt="Cinema" />
          </div>
          <div className="carousel-item active">
            <img src="images/pexels3.jpg" className="d-block w-100" alt="Cinema" />
          </div>
          <div className="carousel-item active">
            <img src="images/pexels1.jpg" className="d-block w-100" alt="Cinema" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}


<div id="carouselExampleFade" className="carousel slide carousel-fade container">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="images/pexels1.jpg" className="d-block w-100" alt="Cinema" />
    </div>
    <div className="carousel-item">
    <img src="images/pexels3.jpg" className="d-block w-100" alt="Cinema" />
    </div>
    <div className="carousel-item">
    <img src="images/pexels2.jpg" className="d-block w-100" alt="Cinema" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </ >
  )
}

export default Carousel