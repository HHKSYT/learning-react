import {useState} from 'react'

import './Colorpicker.css'

function ColorPicker(){

    const [color, setColor] = useState("#ffffff")
    const [Text,setText] = useState('#')
    function handleColorChange(event){
        setColor(event.target.value)
    }
    function handleClear(){
        setText("")
        setColor("#ffffff")
    }
    function handleSetColor(){
        setColor(text)
    }
    return(
        <>
            <div className="color-picker-container">
                <h1>Welcome to Color Picker made by Liam</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected color: {color}</p>
                </div>
                <label>Select a color: </label>
                <input type="color" value={color} onChange={handleColorChange}/>
                <input type="text" maxLength={7} value={Text} onChange={(e) => {
                    let value = e.target.value
                    if(!value.startsWith("#")) value = "#" + value
                    setText(value)
                    setColor(value)
                    }} />
                <button onClick={handleClear}>Clear</button>
            </div>
        </>
    )
}

export default ColorPicker