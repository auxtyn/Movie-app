import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSingleMovie, setSingleMovie } from "../features/movieSlice";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import MovieList from "./MovieList";
// import ShowList from "./ShowList";

export const YouTubeVideo = () => {
  const [video, setVideo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios async(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=32434d8aedd8cdecaf3b72ebaca02f48&language=en-US`
    )await.then((response) => {
      const res = response.data.results;
      setVideo(res[1]?.key);
    });
  }, [id]);
  return (
    <div>
      <iframe
        className="container"
        sandBox="allow-scripts allow-same-origin"
        width="100%"
        height="484"
        src={`https://www.youtube.com/embed/${video}`}
        title="Introduction To WiseGPT"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const DetailsPage = () => {
  const API_KEY = "32434d8aedd8cdecaf3b72ebaca02f48";

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`).then(
      (response) => {
        const res = response.data;
        dispatch(setSingleMovie(res));
      }
    );
  }, [dispatch, id]);

  let movie = useSelector(selectSingleMovie);
  const API_IMG = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {
        <>
          <div className="single-row mt-5 pt-5">
            <YouTubeVideo />
            <div className="text-white single-parent bg-dark">
              <div className="row">
                <div className="col-md-6">
                  <div className="singlee">
                    <img
                      src={API_IMG + movie.backdrop_path}
                      alt=""
                      className="w-100 d-none d-md-block singlee"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="header bg-dark mt-3 container">
                    <h1 className="text-info ">{movie.title}</h1>
                    <h5 className="text-warning">
                      {movie.release_date}
                    </h5>
                    <hr></hr>
                    <h6>{movie.overview}</h6>
                    <hr />
                    <h6 className="text-info ">
                      Rating: {movie.vote_average}
                    </h6>

                    <h6 className="text-warning">{movie.tagline}</h6>
                  </div>
                </div>
              </div>

              <div className="single-child hero pt-5"></div>
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
