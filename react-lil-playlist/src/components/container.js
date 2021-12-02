import React, {Component} from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songs: [
                {id:1, title: "Bohemian Rhapsody", artist: "Queen", genre:"Rock", rating:"5"},
                {id:2, title: "Deliver Me", artist: "The Milk", genre: "Rock", rating: "5"},
                {id:3, title: "ChanChan", artist: "Buena Vista Social Club", genre: "Cuban", rating: "5"},
            ]
        }
        this.addSong = this.addSong.bind(this)
        this.emptyList = this.emptyList.bind(this)
        this.deleteSong = this.deleteSong.bind(this)
    }

    addSong = (song) => {
        const newSong = {
            id: this.state.songs.length +1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
        }
        this.setState ({songs: this.state.songs.concat(newSong)})
    }

    emptyList(){
        this.setState({
            songs: []
        })
    }
//////////////////////////////// delete a single song from list: not working yet
    deleteSong (id) {
        const updated = this.state.songs.filter (song => {
            return id !== Number(id)
        })
        this.setState({ songs: updated })
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
                    deleteSong = {this.deleteSong}
                />
                
            </div>
        )
    }
}

export default Container;