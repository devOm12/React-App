import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handlClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    return (
        <>
            <div className='container my-3'>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label ">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={handleOnChange}></textarea>

                </div>
                <div className="mb-3"><button className='btn btn-primary' onClick={handlClick}>Conert into UpperCase</button></div>
            </div>
            <div className='container my-3'>

                <div className="mb-3">

                    Total No of Character {text.length}
                    Total No of Words {text.split(" ").length}
                </div>
            </div>
        </>
    )
}
