import axios from "axios";
import Carousel from "./Carousel";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies, setShows } from "../features/movieSlice";
import MovieList from "./MovieList";
import Search from "./Search";
import ShowList from "./ShowList";
// import { useParams } from "react-router";

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://api.example.com/data');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []);
// return (
//   <div>
//     {data ? (
//       <p>{data}</p>
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
// );

const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

const Home = () => {
  const dispatch = useDispatch();

  //  const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://api.example.com/data');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

    const fetchMovies = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        const res = response.data;
        dispatch(setMovies(res.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  useEffect(() => {
    fetchMovies();
  }, [dispatch]);

    axios(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`).then(
      (response) => {
        const res = response.data;

      }
    );
  useEffect(() => {
        dispatch(setShows(res.results));
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
        <div className="ml-2 container mb-5 text-warning card-header">
          <MovieList />
        </div>
        <div className="ml-2 container text-warning card-header">
          <ShowList />
        </div>
      </div>
    </div>
  );
};
export default Home;
