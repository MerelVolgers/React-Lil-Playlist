import React from "react"

function Rating ({id, rating}) {

    return(
        <li
            className = "singleItem" 
            key = {id}
        >
            <span className = "song-rating"> {rating || ""} </span> 

        </li>
    )
}

export default Rating
