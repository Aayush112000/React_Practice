import React, {useState} from 'react'

export default function TextFrom(props) {
    const [text,setText] = useState('Enter text here')
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked')
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!","sucess");
    }
    const handleOnChange = (event)=>{
        // console.log('On Change Clicked')
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!","sucess");
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Clear text!","sucess");
    }
    const handleFirstUpperClick = ()=>{
        let newText="";
        for(let word of text.split(" ")){
            if(word){
                newText = newText+ " " + word[0].toUpperCase() + word.slice(1).toLowerCase()
            }
        }
        setText(newText)
        props.showAlert("Converted first to UpperCase!","sucess");
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","sucess");

    }

    function wordCount(text){
        let counter = 0
        for(let word of text.split(" ")){
            if(word){
                counter = counter+1;
            }
        }
        return counter
    }

    function charCount(text){
        let counter = 0
        for(let c in text){
            if(text[c]!==" "){
                counter = counter+1;
            }
        }
        return counter
    }


    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>    
            <div className='mb-3'>
            <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} id='myBox' rows='8'></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleFirstUpperClick}>Capitalize Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{wordCount(text)} words and {charCount(text)} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}