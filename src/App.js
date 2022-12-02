
import React from 'react'
import Movie from './components/Movie'
import AddMovie from './components/AddMovie'

import { useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState(
    [
      {
        id: 1,
        title: "Avengers",
        description: "Action",
        posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_480x.progressive.jpg?v=1573616089",
        rating: 5
      },
      {
        id: 2,
        title: "Loki",
        description: "Action",
        posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54362_2_480x.progressive.png.jpg?v=1634831916",
        rating: 4
      },
      {
        id: 3,
        title: "Wanda Vision",
        description: "Bloody",
        posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wandavision.mp_480x.progressive.jpg?v=1614371756",
        rating: 5
      },
      {
        id: 4,
        title: "Thor",
        description: "Action",
        posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d8994c1a1ce870c6da978c950ffb5278_62899afe-82e0-4c72-a60b-85d7e912daee_500x749.jpg?v=1573587378",
        rating: 5
      }
    ]
  )

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const filterRating = () => {
    setMovies(movies.filter((movie) => movie.rating >= 5))
  }

  const filterDescription = () => {
    setMovies(movies.filter((movie) => movie.description === 'Bloody'))
  }

  const filterAction = () => {
    setMovies(movies.filter((movie) => movie.description === 'Action'))
  }

  // Add movie


  const addMovie = (movie) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newMov = { id, ...movie }
    setMovies([...movies, newMov])
  }

  return (
    <div>
      <div className="container text-center">
        <h1 className='text-center'>Movies</h1>
        
        <AddMovie onAdd={addMovie} />
        <br></br>

        <button onClick={filterRating} className='btn text-center btn-info'>5 star movies</button>
        <button onClick={filterDescription} className='btn text-center btn-info'>Bloody movies</button>
        <button onClick={filterAction} className='btn text-center btn-info'>Action movies</button>




        {movies.length > 0 ? <Movie movies={movies} deleteMovie={deleteMovie} addMovie={addMovie}></Movie> : <p className='text-info'>No movies to view</p>}
      </div>
    </div>
  )
}

export default App
