import React from "react";
// import { selectBackdrop, setBackdrop } from "../features/movieSlice";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

const Carousel = () => {
  // const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

  const API_IMG = "https://image.tmdb.org/t/p/original/";

  const images = [
    {
      backdrop_path: API_IMG + "jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      poster_path: API_IMG + "8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
    },
    
    {
      backdrop_path: API_IMG + "5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      poster_path: API_IMG + "ePquoeNxJ6vg8U7iSjRAZ2KdztX.jpg",
    },

    {
      backdrop_path: API_IMG + "gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
      poster_path: API_IMG + "tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
    },
  ];

  // console.log(images[0].backdrop_path);

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <div className=" col-md-12">
              <img
                src={images[0].backdrop_path}
                className="d-none d-md-block w-100 "
                alt="..."
              />
              <img
                src={images[0].poster_path}
                className="d-md-none d-sm-block  w-100"
                alt="..."
              />
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className=" col-md-12">
              <img
                src={images[1].backdrop_path}
                className="d-none d-md-block w-100 "
                alt="..."
              />
              <img
                src={images[1].poster_path}
                className="d-md-none d-sm-block  w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <div className="col-md-12">
              <div className=" col-md-12">
                <img
                  src={images[2].backdrop_path}
                  className="d-none d-md-block w-100 "
                  alt="..."
                />
                <img
                  src={images[2].poster_path}
                  className="d-md-none d-sm-block  w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
