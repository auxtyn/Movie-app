import React from "react";
import { useSelector } from "react-redux";
import { selectSingle, setSingleMovie } from "../features/movieSlice";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import MovieList from './MovieList'

const DetailsPage = () => {
  const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&&api_key=${API_KEY}`
    ).then((response) => {
      const res = response.data;
      console.log(res);
      dispatch(setSingleMovie(res));
    });
  }, [dispatch, id]);

  let movie = useSelector(selectSingle);
  console.log(movie)

  const API_IMG = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {
        <>
          <div className="row single-row mt-5 pt-5">
            <div className="text-white single-parent bg-dark">
              <div className="singlee">
                <img
                  src={API_IMG + movie.backdrop_path}
                  alt=""
                  className="w-100 d-none d-md-block singlee"
                />
                <img
                  src={API_IMG + movie.poster_path}
                  alt=""
                  className="w-100 d-md-none d-sm-block singlee"
                />
              </div>

              <div className="header bg-dark container">
                <h1 className="text-info">{movie.title}</h1>
                <h2 className='text-warning'>Rating: {movie.vote_average}</h2>
                <hr></hr>
                <h3>{movie.overview}</h3>
                <hr />

                <h3 className="text-info">Release Date: {movie.release_date}</h3>

                <h3 
                className="text-warning">{movie.tagline}</h3>
              </div>

              <div className="single-child hero pt-5">


              </div>
            </div>
          </div>
          <div className="container">
          <MovieList />
          </div>

        </>
      }
    </>
  );
};
export default DetailsPage;
