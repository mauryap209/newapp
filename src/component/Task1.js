import React, { useState } from 'react'

const Task1 = () => {
    const toUc = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const toLc = () => {
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
                <button type="button" className="btn btn-primary" onClick={toUc}>Click to UperCase</button>
                <button type="button" className="btn btn-info" onClick={toLc}>Click to LowerCase</button>
            </div>
        </>
    )
}

export default Task1;