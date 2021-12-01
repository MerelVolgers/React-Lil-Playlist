import React from "react"

function Artist ({id, title, artist, genre, rating}) {

    return(
        <li
            className = "singleItem" 
            key = {id}
        >
            <span className = "song-title"> {artist || ""} </span> 

        </li>
    )
}

export default Artist
