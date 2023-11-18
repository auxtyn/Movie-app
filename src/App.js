
import React from 'react'
import MovieCard from './components/MovieCard'
import AddMovie from './components/AddMovie'
import axios from 'axios'
import Nav from './components/Nav'

import { useState, useEffect } from 'react'

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=32434d8aedd8cdecaf3b72ebaca02f48'

const App = () => {
  const [movies, setMovies] = useState([])

  const findMovies = () => {
    axios(API_URL)
      .then((response) => {
        const res = response.data
        setMovies(res.results)
      })
  }


  useEffect(() => {
    findMovies()
  }, [])

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const filterRating = () => {
    setMovies(movies.filter((movie) => movie.vote_average >= 8))
  }

  // const filterDescription = () => {
  //   setMovies(movies.filter((movie) => movie.description === 'Bloody'))
  // }

  // const filterAction = () => {
  //   setMovies(movies.filter((movie) => movie.description === 'Action'))
  // }
  // Add movie
  const addMovie = (movie) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newMov = { id, ...movie }
    setMovies([...movies, newMov])
  }

  return (
    <div>
      <div className="container text-center">
        <Nav />
        <h1 className='text-center'>Movies</h1>

        <AddMovie onAdd={addMovie} />
        <br></br>

        <button onClick={filterRating} className='btn text-center btn-info'>Highest rated movies</button>
        <br></br>

        {movies.length > 0 ?
          movies.map((movie) => (

            <MovieCard className="col-md-4" movie={movie} deleteMovie={deleteMovie} key={movie.id} />
          ))
          : <p className='text-info'>No movies to view</p>}
      </div>
    </div>
  )
}

export default App
