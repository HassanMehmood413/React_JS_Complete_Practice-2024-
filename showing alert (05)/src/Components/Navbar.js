import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav style={{ ...props.mode,...props.green }}>
                <div>{props.title} <span className='halfname'>M</span> </div>
                <ul>
                    <li>{props.liText}</li>
                    <li>Content</li>
                    <li>About</li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.togglebutton} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn}</label>
                </div>


                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.GreenButton} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Greenish</label>
                </div>
                
            </nav>
        </div>
    )
}

