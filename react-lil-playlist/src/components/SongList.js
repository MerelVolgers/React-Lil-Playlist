import React from "react"
import SongItem from "./SongItem"

function SongList ({songs, addSong, emptyList, deleteSong, sortBy, sortOther}) {

    const ListSongs = songs ? songs.map (song => (
        <SongItem 
            key = {song.id}
            id = {song.id}
            title = {song.title}
            artist = {song.artist}
            genre = {song.genre}
            rating = {song.rating} 
            deleteSong = {deleteSong}
            sortBy = {sortBy}
        />
    )) : " "

    return(
        <div className="songList">
            <h2> Song list: </h2>

            <table style={{width: "100%"}}>

                <thead> 
                    <th className="song-row__item" > Title  
                        <button type="submit" onClick= { () => {sortBy("title")} }> Sort Title A-Z </button> 
                        <button type="submit" onClick= { () => {sortOther("title")} }> Sort Title Z-A </button></th>
                    
                    <th className="song-row__item"> Artist 
                        <button type="submit" onClick= { () => {sortBy("artist")} }> Sort Artist A-Z </button> 
                        <button type="submit" onClick= { () => {sortOther("artist")} }> Sort Artist Z-A </button></th>
                    
                    <th className="song-row__item"> Genre  
                        <button type="submit" onClick= { () => {sortBy("genre")} }> Sort Genre A-Z </button> 
                        <button type="submit" onClick= { () => {sortOther("genre")} }> Sort Title Z-A </button></th>
                    
                    <th className="song-row__item"> Rating  
                        <button type="submit" onClick= { () => {sortBy("rating")} }> Sort Rating 1-5 </button> 
                        <button type="submit" onClick= { () => {sortOther("rating")} }> Sort Title 5-1 </button></th> 
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