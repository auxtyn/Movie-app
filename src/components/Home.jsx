import MovieCard from './MovieCard'
// import AddMovie from './AddMovie'
import axios from 'axios'
import Carousel from './Carousel'
import { useState, useEffect } from 'react'
import Hero from './Hero'
import Single from './Single'
import { Routes, Route } from 'react-router-dom'

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=32434d8aedd8cdecaf3b72ebaca02f48'

const Home = () => {


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
        setMovies(movies.filter((movie) => movie.vote_average >= 7))
    }

    // const addMovie = (movie) => {
    //     const id = Math.floor(Math.random() * 10000) + 1
    //     const newMov = { id, ...movie }
    //     setMovies([...movies, newMov])
    // }
    return (
        <div>
            <div className="text-center">

                <Carousel />
                <Hero />

                {/* <AddMovie onAdd={addMovie} /> */}
                <br></br>

                <button onClick={filterRating} className='btn text-center btn-info'>Highest rated movies</button>
                <br></br>

                <div className='container'>
                    {movies.length > 0 ?
                        movies.map((movie, index) => (
                            <MovieCard className="col-md-4" movie={movie} deleteMovie={deleteMovie} key={movie.id} index={index} />
                        ))
                        : <p className='text-danger'>No movies to view</p>}
                </div>
            </div>

            <Routes>
                <Route path="/single" element={<Single />} />
            </Routes>
        </div>
    )
}
export default Home;