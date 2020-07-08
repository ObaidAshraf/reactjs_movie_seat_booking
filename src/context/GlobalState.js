import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    movies: [
        {id: '1', name: 'Avengers: Endgame ($10)', price: '10'},
        {id: '2', name: 'Joker ($12)', price: '12'},
        {id: '3', name: 'Toy Story 4 ($8)', price: '8'},
        {id: '4', name: 'The Lion King ($9)', price: '9'},
    ],
    seats: {
        1: 'seat',
        2: 'seat',
        3: 'seat',
        4: 'seat',
        5: 'seat',
        6: 'seat',
        7: 'seat',
        8: 'seat',
        9: 'seat',
        10: 'seat',
        11: 'seat',
        12: 'seat',
        13: 'seat',
        14: 'seat',
        15: 'seat',
        16: 'seat',
    },
    ticketPrice: 0,
    moviePrice: 10,
    selectedSeats: 0
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function toggle_seat(seatObj) {
        dispatch({
            type: "TOGGLE_SEAT",
            payload: seatObj
        })
    }

    function change_moviePrice(price) {
        dispatch({
            type: 'MOVIE_SELECTED',
            payload: price
        })
    }

    return (
        <GlobalContext.Provider value={{
            movies: state.movies,
            ticketPrice: state.ticketPrice,
            seats: state.seats,
            moviePrice: state.moviePrice,
            selectedSeats: state.selectedSeats,
            toggle_seat,
            change_moviePrice,
        }}>
            {children}
        </GlobalContext.Provider>        
    )

}
