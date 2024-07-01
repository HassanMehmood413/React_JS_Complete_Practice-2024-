import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav>
                <div>{props.title}  </div>
                <ul>
                    <li>{props.liText}</li>
                    <li>{props.ContentText}</li>
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

// You have to specify the proptypes if you want to avoid the error in future. basically these proptypes specifies whether you are using string,number or anything. If in future you mistakly use number as a title instead of string because you specify title prpptypes as a string here so you can easily find the error by coming here 
Navbar.propTypes = {
    title: PropTypes.string,
    liText: PropTypes.string
}

//If i use isRequired in proptypes then i MUST MUST have to specify the title and liText in Navbar. If not then it will give me an error that says (you use isRequired then you must have to give title and liText... Another img thing is when i give default props then it ignores isRequired but when i dont give defaultProps then it gives error  ) 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    liText: PropTypes.string.isRequired
}


//If I am not passing the title and liText then it will use these defaultProps as default but when i set the title and liText then these defaultProps will not be in use
Navbar.defaultProps = {
    title : "Delta Stop D",
    liText : "Home D",
    ContentText : "Content"
}
