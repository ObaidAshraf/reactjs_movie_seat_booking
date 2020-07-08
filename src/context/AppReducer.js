function AppReducer(state, action) {
    switch(action.type) {
        case 'TOGGLE_SEAT':
            let newSeatClass = action.payload.class === "seat" ? "seat selected" : "seat";
            let newSeats = state.seats;
            newSeats[action.payload.id] = newSeatClass
            let numSeats = state.selectedSeats
            if (newSeatClass === "seat selected") {
                ++numSeats
            }
            else {
                --numSeats
            }

            return {
                ...state,
                seats: newSeats,
                selectedSeats: numSeats,
                ticketPrice: state.moviePrice * numSeats
            }
        case 'MOVIE_SELECTED':
            return {
                ...state,
                moviePrice: action.payload,
                ticketPrice: action.payload * state.selectedSeats
            }
        default:
            return state
    }
}

export default AppReducer