import React from "react"

function Genre ({id, genre}) {

    return(
        <li
            className = "singleItem" 
            key = {id}
        >
            <span className = "song-genre"> {genre || ""} </span> 

        </li>
    )
}

export default Genre
