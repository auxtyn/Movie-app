import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { selectMovies } from "../features/movieSlice";

const MovieList = () => {
  const movies = useSelector(selectMovies);

  return (
    <>
    {/* <h1>{movies.length}</h1> */}

      {movies.map((movie, index) => <MovieCard key={index} data={movie} />)}
    </>
  );
};

export default MovieList;
