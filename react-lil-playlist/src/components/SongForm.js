import React from "react"

class SongForm extends React.Component {
    constructor () {
        super()
        this.state = {
            title: " ",
            artist: " ",
            genre: " ",
            rating: " ",
        }
        this.onInput = this.onInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInput (event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit (event) {
        event.preventDefault()
        this.props.addSong(this.state)
        this.setState({
            title: " ",
            artist: " ",
            genre: " ",
            rating: " ",
        })
    }

    render() {
        return(      
            <div className= "songForm">
                <h2> Song Form </h2>

                <form className="songs-input" style={{width: "100%"}} onSubmit={this.onSubmit}>
                    <input
                        type = "text"
                        value = {this.state.title}
                        name = "title"
                        placeholder = "Type title here..."
                        onChange = {this.onInput}
                    />

                    <input
                        type = "text"
                        value = {this.state.artist}
                        name = "artist"
                        placeholder = "Type artist here..."
                        onChange = {this.onInput}
                    />

                    <select
                        value = {this.state.genre}
                        name = "genre"
                        onChange = {this.onInput}
                    >
                        <option value= "choose"> Choose genre </option>
                        <option value= "Pop"> Pop </option>
                        <option value= "Reggae"> Reggae </option>
                        <option value= "Techno"> Techno </option>
                        <option value= "Rock"> Rock </option>
                        <option value= "Other"> Other </option>
                    </select>

                    <input
                        type = "number"
                        value = {this.state.rating}
                        name = "rating"
                        min ="1"
                        max = "5"
                        placeholder="1-5"
                        onChange = {this.onInput}
                    />

                    <button className = "button-new-input" type="submit"> Add To List! </button>
                </form>
            </div>
        )
    }
}

export default SongForm