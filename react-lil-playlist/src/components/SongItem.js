import React from "react"

function SongItem ({id, title, artist, genre, rating, deleteSong}) {

    return(
        <tr
            className = "singleItem" 
            key = {id}
        >
            <td> {title || ""} </td>
            <td> {artist || ""} </td>
            <td> {genre || ""}  </td>
            <td> {rating || ""}  </td>
            
            <button className="delete-song" onClick={ () => {deleteSong(id)} }> Delete </button>
        </tr>
    )
}

export default SongItem
