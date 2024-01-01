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
            {/* <Link to={`/single/${id}`}>
              <img className="py-0 my-0" src={API_IMG + show.poster_path} alt={show.title} />
              <p className="py-0 my-0 mt-3">{show.first_air_date}</p>
              <h6 className="py-0 my-0">{show.name}</h6>
              <p className="text-warning py-0 my-0 mb-3">Rating:{show.vote_average}</p>
            </Link> */}


            <Link to={`/single/${id}`}>
              <div className="parent">
                <img
                  className="py-0 my-0 "
                  src={API_IMG + show.poster_path}
                  alt={show.name}
                />

                <div className="child">
                  
                  <h6 className="py-0 my-0 mt-3 text-white">{show.name}</h6>
                  <p className="py-0 my-0  text-warning">{show.first_air_date}</p>
                  <p className="text-warning mb-3">
                    Rating:{show.vote_average}
                  </p>
                </div>
              </div>
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
