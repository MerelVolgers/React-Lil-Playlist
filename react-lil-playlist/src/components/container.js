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
        this.sortByAZ = this.sortByAZ.bind(this)
        this.sortByZA = this.sortByZA.bind(this)
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
        const updatedList = this.state.songs.filter (song => {
            return id !== Number(song.id)
        })
        this.setState({ songs: updatedList })
    }
////////////////// sorting songs by key /////////////////////////////

    sortByAZ = (key) => {
        const sortedSongs = [...this.state.songs]
        sortedSongs.sort( (a,b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? -1 : 1)
        this.setState( {songs:sortedSongs} )
    }

    sortByZA = (key) => {
        let sortedSongs = [...this.state.songs]
        sortedSongs.sort( (a,b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? 1 : -1)
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
                    sortByAZ = {this.sortByAZ}
                    sortByZA = {this.sortByZA}
                />
                
            </div>
        )
    }
}

export default Container;