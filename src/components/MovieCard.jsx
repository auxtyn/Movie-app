


const MovieCard = ({ movie, deleteMovie }) => {
  const API_IMG = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="movie-card-outer col-md-3">
      <div className="movie-card ">
        <div className="card">
          <img src={API_IMG + movie.poster_path} alt={movie.title} />
          <p>{movie.release_date}</p>
          <h6>{movie.title}</h6>
          <p className='text-warning'>Rating:{movie.vote_average}</p>
          <button onClick={() => deleteMovie(movie.id)} className='btn text-center btn-damger'>Delete movie</button>
        </div>
      </div>
    </div>

  )
}

export default MovieCard
