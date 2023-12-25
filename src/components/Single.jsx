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
         <img src={API_IMG + movie.backdrop_path} alt="" className="w-100" />
         <h1>{movie.title}</h1>
         <h2>{movie.vote_average}</h2>
       </div>
     </div>

    }
    </>
  );
};
export default DetailsPage;
