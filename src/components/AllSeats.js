import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AllSeats() {
    let _seats = []
    let i, j = 0;
    const { seats, toggle_seat } = useContext(GlobalContext)

    function handleChange(evt) {
        toggle_seat({
            id: evt.target.id,
            class: evt.target.className
        })
    }


    for (i = 0; i < 2; i++) {
        _seats.push(
            <div key={i+1} className="row">
                <div key={j+1} id={j+1} className={seats[j+1] === 'seat' ? "seat" : "seat selected"} 
                    onClick={(e) => handleChange(e)}></div>
                <div key={j+2} id={j+2} className={seats[j+2] === 'seat' ? "seat" : "seat selected"}
                    onClick={(e) => handleChange(e)}></div>
                <div key={j+3} id={j+3} className={seats[j+3] === 'seat' ? "seat" : "seat selected"}
                    onClick={(e) => handleChange(e)}></div>
                <div key={j+4} id={j+4} className={seats[j+4] === 'seat' ? "seat" : "seat selected"}
                    onClick={(e) => handleChange(e)}></div>
                <div key={j+5} id={j+5} className={seats[j+5] === 'seat' ? "seat" : "seat selected"}
                    onClick={(e) => handleChange(e)}></div>
                <div key={j+6} id={j+6} className={seats[j+6] === 'seat' ? "seat" : "seat selected"}
                    onClick={(e) => handleChange(e)}></div>
                <div key={j+7} id={j+7} className={seats[j+7] === 'seat' ? "seat" : "seat selected"}
                    onClick={(e) => handleChange(e)}></div>
            </div>
        )
        j += 8;
    }

    return (
        <div className="container">
        <div className="screen"></div>
            {_seats}
        </div>
    )
}

export default AllSeats