import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  const API_IMG = "https://image.tmdb.org/t/p/original/";
  const id = show.id;


  return (
    <>
      {/* <div className=" movie-card-outer col-6 col-md-3 "> */}
      <div className=" movie-card-outer">
        <div className="movie-card">
          <div className="card">
            <Link to={`/single/${id}`}>
              <img src={API_IMG + show.poster_path} alt={show.title} />
              <p>{show.release_date}</p>
              <h6>{show.title}</h6>
              <p className="text-warning">Rating:{show.vote_average}</p>
            </Link>
            

            {/* <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal${show.id}`}
            >
              See more
            </button> */}
          </div>
        </div>
      </div>

   

     
    </>
  );
};

export default ShowCard;
