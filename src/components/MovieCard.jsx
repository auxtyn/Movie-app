
const MovieCard = ({ movie, deleteMovie }) => {
  return (
    <div className="movie-card-outer">
      <div className="movie-card ">
        <div className="card">
          <img src={movie.posterURL} alt={movie.title} />
          <h5>{movie.description}</h5>
          <h4>{movie.title}</h4>
          <p className='text-warning'>Rating:{movie.rating} stars</p>
          <button onClick={() => deleteMovie(movie.id)} className='btn text-center btn-damger'>Delete movie</button>
        </div>
      </div>
    </div>

  )
}

export default MovieCard
