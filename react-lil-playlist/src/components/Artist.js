import React from "react"

function Artist ({id, artist}) {

    return(
        <li
            className = "singleItem" 
            key = {id}
        >
            <span className = "song-artist"> {artist || ""} </span> 

        </li>
    )
}

export default Artist
