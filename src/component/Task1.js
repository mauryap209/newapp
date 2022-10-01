import React, { useState } from 'react'

const Task1 = () => {
    const toup = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const tolp = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const onChange1 = (event) => {
        setText(event.target.value);
    }


    let [text, setText] = useState("Default value");
    return (
        <>
            <div className="container bg bg-success  ">
                <label for="text" className="form-label">Example textarea</label>
                <textarea class="form-control " id="text" rows="3" value={text} onChange={onChange1}></textarea>
                <button type="button" className="btn btn-primary" onClick={toup}>Click to UperCase</button>
                <button type="button" className="btn btn-info" onClick={tolp}>Click to LowerCase</button>
            </div>
        </>
    )
}

export default Task1;