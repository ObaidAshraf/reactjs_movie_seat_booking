import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function MovieSelect() {
    const { movies, change_moviePrice } = useContext(GlobalContext);

    function handleChange(evt) {
      change_moviePrice(Number(evt.target.value))
    }

    return (
      <div className="movie-container">
        <h4>Movie Seat Booking app by Obaid Ashraf</h4>
        <label>Pick a movie:</label>
        <select onChange={(e) => handleChange(e)}>
            {movies.map(movie => (
              <option key={movie.id} value={movie.price}>{movie.name}</option>
            ))}
        </select>
      </div>
    )
}

export default MovieSelect