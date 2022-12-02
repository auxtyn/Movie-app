
import React from 'react'
import MovieCard from './MovieCard'

const Movie = ({movies, deleteMovie}) => {

  return (
    <div>
        {movies.map((movie)=>(<MovieCard movie={movie} deleteMovie={deleteMovie}  key={movie.id}/>))}
    </div>
  )
}

export default Movie