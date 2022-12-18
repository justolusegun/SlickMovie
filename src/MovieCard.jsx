import React from 'react'
import './App.css'

const MovieCard = (props) => {
  return (
    <div className="movie">
                    {props.movies.map((movie, index) => (
                        <div className='card'>
                        <img src={movie.Poster} alt="movie" />
                        </div>
                    ))}
                </div> 
  )
}

export default MovieCard