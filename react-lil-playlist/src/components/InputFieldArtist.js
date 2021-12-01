// import React from "react"

// class InputFieldArtist extends React.Component {
//     state = {
//         input: " "
//     }
    
//     render() {
//         const onInput = event => {
//             this.setState({
//                 input: event.target.value
//             })
//         }

//         const onSubmit = e => {
//             e.preventDefault()
//             this.props.onSubmit (this.state.input)
//             this.setState({
//                 input: " "
//             })
//         }

//         return(
//             <form className="songs-input" onSubmit= {onSubmit}>
//                 <input 
//                     placeholder = "Type artist here..."
//                     type="search" 
//                     onChange= {onInput} 
//                     value = {this.state.input} 
//                     className = 'new-input'
//                 ></input>

//                 <button className = "button-new-input" type="submit"> Add To List! </button>
//             </form>
//         )
//     }
    
// }
// export default InputFieldArtist