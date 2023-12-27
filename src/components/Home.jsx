import axios from "axios";
import Carousel from "./Carousel";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movieSlice";
import MovieList from "./MovieList";
import Search from "./Search";



const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    ).then((response) => {
      const res = response.data;

      dispatch(setMovies(res.results));
    });
  }, [dispatch]);


  // const deleteMovie = (id) => {
  //   films(movies.filter((movie) => movie.id !== id));
  // };

  // const filterRating = () => {
  //   films.filter((movie, index) => movie.vote_average >= 7);
  // };

  // const addMovie = (movie) => {
  //     const id = Math.floor(Math.random() * 10000) + 1
  //     const newMov = { id, ...movie }
  //     check([...movies, newMov])
  // }
  return (
    <div>
      <div className="text-center">

        <Carousel />
        <Search />

        <br></br>
        <div className="container">
          <MovieList />
        </div>
      </div>
    </div>
  );
};
export default Home;
