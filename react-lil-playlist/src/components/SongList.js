import React from "react"
import Title from "./Title"
import Artist from "./Artist"
import Genre from "./Genre"
import Rating from "./Rating"

function SongList ({songs, addSong, emptyList}) {

    const ListTitle = songs ? songs.map (song => (
        <Title
            key = {song.id}
            title = {song.title}
        />
    )) : " "

    const ListArtist = songs ? songs.map (song => (
        <Artist
            key = {song.id}
            artist = {song.artist}
        />
    )) : " "

    const ListGenres = songs ? songs.map (song => (
        <Genre
            key = {song.id}
            genre = {song.genre}
        />
    )) : " "

    const ListRatings = songs ? songs.map (song => (
        <Rating
            key = {song.id}
            rating = {song.rating}
        />
    )) : " "


    return(
        <div className="songList">
            <h2> Song list: </h2>

            <table style={{width: "100%"}}>
                <tr className="song-header">  
                    <th className="song-row__item"> Title {ListTitle} </th>
                    <th className="song-row__item"> Artist {ListArtist} </th>
                    <th className="song-row__item"> Genre {ListGenres} </th>
                    <th className="song-row__item"> Rating {ListRatings} </th>
                </tr>
            </table>
            
            <button onClick={emptyList}> Empty List </button>
        </div>
    )
}

export default SongList