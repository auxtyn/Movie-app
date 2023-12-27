import React from "react";
import { selectMovies } from "../features/movieSlice";
import { useSelector } from "react-redux";

const Carousel = () => {
  let movie = useSelector(selectMovies);

  const API_IMG = "https://image.tmdb.org/t/p/original/";

  console.log(API_IMG + movie[0].poster_path)
  // console.log(API_IMG + movie[0].poster_path)

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
                src={API_IMG + movie[0].backdrop_path}
                className="d-none d-md-block w-100 "
                alt="..."
              />
              <img
                src={API_IMG + movie[0].poster_path}
                className="d-md-none d-sm-block  w-100"
                alt="..."
              />
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
              <div className=" col-md-12">
                <img
                  src={API_IMG + movie[1].backdrop_path}
                  className="d-none d-md-block w-100 "
                  alt="..."
                />
                <img
                  src={API_IMG + movie[1].poster_path}
                  className="d-md-none d-sm-block  w-100"
                  alt="..."
                />
              </div>
            </div>
            
            <div className="carousel-item" data-bs-interval="1000">
              <div className="col-md-12">
                <div className=" col-md-12">
                  <img
                    src={API_IMG + movie[2].backdrop_path}
                    className="d-none d-md-block w-100 "
                    alt="..."
                  />
                  <img
                    src={API_IMG + movie[2].poster_path}
                    className="d-md-none d-sm-block  w-100"
                    alt="..."
                  />
                </div>
              </div>
            {/* </div> */}
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
