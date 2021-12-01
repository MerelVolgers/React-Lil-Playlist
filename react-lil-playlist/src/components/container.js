import React, {Component} from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songInput: " ",
            songs: [
                {id:1, title: "Bohemian Rhapsody", artist: "Queen", genre:"Rock", rating:"5"},
                {id:2, title: "Deliver Me", artist: "The Milk", genre: "Rock", rating: "5"},
                {id:3, title: "ChanChan", artist: "Buena Vista Social Club", genre: "Cuban", rating: "5"},
            ]
        }
        this.addSong = this.addSong.bind(this)
        this.emptyList = this.emptyList.bind(this)
    }

    addSong = (song) => {
        const newSong = {
            id: this.state.songs.length +1,
            title: song,
            // artist: artist,
            // genre: genre,
            // rating: rating
        }
        this.setState ({songs: this.state.songs.concat(newSong)})
    }

    emptyList(){
        this.setState({
            songs: []
        })
    }

    render() {
        return (
            <div className = "song-container">

                <SongForm 
                    addSong={this.addSong}
                />

                <SongList 
                    songs= {this.state.songs}
                    addSong={this.addSong}
                    emptyList = {this.emptyList}
                    // title = {this.state.songs.title}
                    // artist = {this.state.songs.artist}
                    // genre = {this.state.songs.genre}
                    // rating = {this.state.songs.rating}
                    // deleteSong = {this.deleteSong}
                />
                
            </div>
        )
    }
}

export default Container;