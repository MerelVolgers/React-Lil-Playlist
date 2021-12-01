import React from "react"

function Title ({id, title}) {

    return(
        <li
            className = "singleItem" 
            key = {id}
        >
            <span className = "song-title"> {title || ""} </span> 

        </li>
    )
}

export default Title
