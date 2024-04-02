import React, {useState} from 'react'

export default function TextFrom(props) {
    const [text,setText] = useState('Enter text here')
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On Change Clicked")
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
    }
    const handleFirstUpperClick = ()=>{
        const words = text.split(" ")
        if(words.length > 0){
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            let newText = words.join(" ");
            setText(newText)
        }
        else{
            let newText = ""
            setText(newText)
        }
    }


    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleFirstUpperClick}>Capitalize Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}