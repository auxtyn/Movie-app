import axios from "axios";
import Carousel from "./Carousel";
import { useEffect } from "react";
import Hero from "./Hero";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movieSlice";
import MovieList from "./MovieList";
import Search from "./Search";

// https://api.themoviedb.org/3/find/572802/external_source=imdb_id?api_key=32434d8aedd8cdecaf3b72ebaca02f48

// api.themoviedb.org/3/find/572802?external_source=imdb_id

const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    ).then((response) => {
      const res = response.data;
      // console.log(res.results)
      dispatch(setMovies(res.results));
    });
  }, [dispatch]);

  // Search single movie  https://api.themoviedb.org/3/find/external_id?external_source='

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
        <Search />

        <Carousel />
        <Hero />

        <br></br>
        <div className="container">
          <MovieList />
        </div>
      </div>
    </div>
  );
};
export default Home;
