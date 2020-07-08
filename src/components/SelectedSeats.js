import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function SelectedSeats() {
    let { selectedSeats, ticketPrice } = useContext(GlobalContext)

    return (
        <>
            <p className="text">
                You have selected <span>{selectedSeats}</span> seats for a price of $<span>{ticketPrice}</span>
            </p>
        </>
    )
}

export default SelectedSeats