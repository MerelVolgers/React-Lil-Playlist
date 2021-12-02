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
        this.sortBy = this.sortBy.bind(this)
        this.sortOther = this.sortOther.bind(this)
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

    deleteSong (id) {
        const updated = this.state.songs.filter (song => {
            return id !== Number(song.id)
        })
        this.setState({ songs: updated })
    }
////////////////// sorting songs by key /////////////////////////////

    sortBy = (key) => {
        let sortedSongs = [...this.state.songs]
        sortedSongs.sort( (a,b) => {
            if (a[key] < b[key]) {
                return -1
            }
            if (a[key] > b[key]) {
                return 1
            }
            return 0
        })
        this.setState( {songs:sortedSongs} )
    }

    sortOther = (key) => {
        let sortedSongs = [...this.state.songs]
        sortedSongs.sort( (a,b) => {
            if (a[key] < b[key]) {
                return 1
            }
            if (a[key] > b[key]) {
                return -1
            }
            return 0
        })
        this.setState( {songs:sortedSongs} )
    }
///////////////////////////////////////////////////////////////////////
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
                    sortBy = {this.sortBy}
                    sortOther = {this.sortOther}
                />
                
            </div>
        )
    }
}

export default Container;