import React from "react"
import InputField from "./Inputfield"
// import InputFieldArtist from "./InputFieldArtist"

function SongForm ({addSong}) {
        return(
            <div className= "songForm">
                <h2> Song Form </h2>

                <InputField onSubmit = {addSong} />

                {/* <InputFieldArtist /> */}

            </div>
        )
}

export default SongForm