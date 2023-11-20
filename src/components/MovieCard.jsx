

const MovieCard = ({ movie, deleteMovie, index }) => {
  const API_IMG = 'https://image.tmdb.org/t/p/original/';

  return (
    <>
      <div className=" movie-card-outer col-md-3 ">
        <div className="movie-card">
          <div className="card">
            <img src={API_IMG + movie.poster_path} alt={movie.title} />
            <p>{movie.release_date}</p>
            <h6>{movie.title}</h6>
            <p className='text-warning'>Rating:{movie.vote_average}</p>
            {/* <button onClick={() => deleteMovie(movie.id)} className='btn text-center btn-damger'>Delete movie</button> */}
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
              See more
            </button>
          </div>
        </div>
        {/* Modal   */}
        <div className="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModal1Label">{movie.title}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img className="w-50" src={API_IMG + movie.poster_path} alt={movie.title} />
                <p className="pt-4">{movie.overview}</p>
                <h6 className="text-warning">Language: {movie.original_language}</h6>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal  Ends */}


        
      </div>


    </>



  )
}

export default MovieCard
