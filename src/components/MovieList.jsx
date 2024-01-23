import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { selectMovies } from "../features/movieSlice";
import Slider from "react-slick";

const MovieList = () => {
  const movies = useSelector(selectMovies);

  var settings = {
    // dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-left">Trending</h1>
      <Slider {...settings}>
        {movies.length >= 1 ? (
          movies.map((movie, index) => <MovieCard key={index} data={movie} />)
        ) : (
          <h3 className="text-center">No film oo </h3>
        )}
      </Slider>
    </>
  );
};

export default MovieList;
