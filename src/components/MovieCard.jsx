import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setRemoveMovie } from "../features/movieSlice";

const MovieCard = ({ data }) => {
  const API_IMG = "https://image.tmdb.org/t/p/original/";
  const id = data.id;
  const dispatch = useDispatch();

  // const search = useSelector(selectSearch);

  // const filterRating = useSelector(state=> state.movies.movies)

  // const filterRating = useSelector(selectMovies) => {
  //     movies.filter((movie, index) => movie.vote_average >= 7)

  // };
  // const rating = filterRating.filter((movie, index) => movie.vote_average >= 7);

  //   const filterRating = useSelector(selectMovies) => {
  //     movies.filter((movie, index) => movie.vote_average >= 7)
  //  }

  return (
    <>
      {/* <div className=" movie-card-outer col-6 col-md-3 "> */}
      <div className=" movie-card-outer">
        <div className="movie-card">
          <div className="card">
            <Link to={`/single/${id}`}>
              <div className="parent">
                <img
                  className="py-0 my-0 "
                  src={API_IMG + data.poster_path}
                  alt={data.title}
                />

                <div className="child">
                  
                  <h5 className="py-0 my-0 mt-3 text-white">{data.title}</h5>
                  <p className="py-0 my-0  text-warning">{data.release_date}</p>
                  <p className="text-warning mb-3">
                    Rating:{data.vote_average}
                  </p>
                </div>
              </div>
            </Link>

            {/* <button
              onClick={() => dispatch(setRemoveMovie({ id }))}
              type="button"
              className="btn btn-dark"
            >
              remove
            </button> */}
          </div>
        </div>
      </div>

      {/* Modal  */}
      {/* <div
            className="modal fade"
            id={`exampleModal${data.id}`}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id={`exampleModal${data.id}`}
                  >
                    {data.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-50"
                    src={API_IMG + data.poster_path}
                    alt={data.title}
                  />

                  <p className="pt-4">{data.overview}</p>
                  <h6 className="text-warning">
                    Language: {data.original_language}
                  </h6>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div> */}
      {/* Modal  Ends  */}
    </>
  );
};

export default MovieCard;
