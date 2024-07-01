import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav>
                <div>{props.title} <span className='halfname'>M</span> </div>
                <ul>
                    <li>{props.liText}</li>
                    <li>Content</li>
                    <li>About</li>
                </ul>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search Here' />
                    <button className="btn">Search</button>
                </div>
            </nav>
        </div>
    )
}

