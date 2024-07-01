import React from 'react'
const captalized = (word)=>{
    let as = word.charAt(0).toUpperCase() + word.slice(1)
    return as
}
function Alert(props) {
    return (
       props.myAlert && <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.myAlert.message}</strong>{captalized(props.myAlert.type)}
            </div>
        </div>
    )
}

export default Alert

