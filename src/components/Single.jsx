import { useSelector } from "react-redux";
import {  selectSingle, setSingleMovie } from "../features/movieSlice";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const DetailsPage = () => {
  const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

const {id} = useParams();


  const dispatch = useDispatch();
  // `https://api.themoviedb.org/3/find/external_id=tt0050083&external_source=imdb_id&api_key=${API_KEY}`
  // https://api.themoviedb.org/3/search/movie?query=harry&include_adult=false&language=en-US&page=1&region=harry&api_key=${API_KEY}

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?language=en-US&&api_key=${API_KEY}`
    ).then((response) => {
      const res = response.data;
      console.log(res);
      dispatch(setSingleMovie(res));
    });
  }, [dispatch, id]);

  let movie = useSelector(selectSingle);
  // console.log(movie)

  const API_IMG = "https://image.tmdb.org/t/p/original/";

  return (
    <>
    {
       <div className="row mt-5 pt-5 bg-dark">
       <div className="text-white">
         {/* <h1>{movie.title}</h1>
         <h2>{movie.vote_average}</h2> */}
         {/* <img src={API_IMG + movie.poster_path} alt="" className="w-50" /> */}
         <img src={API_IMG + movie.backdrop_path} alt="" className="w-100" />

         <h1>{movie.title}</h1>
         <h2>{movie.vote_average}</h2>
       </div>
     </div>

    }
      {/* {movie.map((film) => (

        <div className="row">
          <div className="col-4">
            <h1>{film.title}</h1>
            <h2>{film.vote_average}</h2>
            <img src={API_IMG + film.poster_path} alt="" className="w-50" />
          </div>
        </div>
       ))} */}
    </>
  );
};
export default DetailsPage;
