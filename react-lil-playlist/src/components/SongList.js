import React from "react"
import SongItem from "./SongItem"

function SongList ({songs, addSong, emptyList, deleteSong}) {

    const ListSongs = songs ? songs.map (song => (
        <SongItem 
            key = {song.id}
            id = {song.id}
            title = {song.title}
            artist = {song.artist}
            genre = {song.genre}
            rating = {song.rating} 
            deleteSong = {deleteSong}
        />
    )) : " "

    return(
        <div className="songList">
            <h2> Song list: </h2>

            <table style={{width: "100%"}}>

                <thead> 
                    <th className="song-row__item"> Title </th>
                    <th className="song-row__item"> Artist </th>
                    <th className="song-row__item"> Genre  </th>
                    <th className="song-row__item"> Rating  </th> 
                </thead>
                
                <tbody>
                    {ListSongs}
                </tbody>
            </table>
            
            <button onClick={emptyList}> Empty List </button>
        </div>
    )
}

export default SongList