import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, settext] = useState("Enter your text here")
    const handletype = (e) => {
        settext(e.target.value)
    }
    const toUpper = () => {
        let a = text.toUpperCase();
        settext(a)
    }

    const toLower = () => {
        let a = text.toLowerCase();
        settext(a)

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    return (
        <div>
            <>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handletype} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn" onClick={toUpper}>Convert to UpperCase</button>
                <button className="btn" onClick={toLower}>Convert to LowerCase</button>
                <button className="btn" onClick={speak}>Convert to EmailFinder</button>

                <h3>Text Summary</h3>
                <p>{text.split(' ').filter(value => value != "").length}  Words and {text.trim().length} Characters</p>
                <p>{0.0008 * text.split(' ').filter(value => value != "").length}  Minutes To Read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </>
        </div>
    )
}
