import React from 'react'
import "../styles/Alert.css"
const Alert = (props) => {
    return (
        props.alert && <div className='alert-box'>
            <span>{props.alert.type}</span> : {props.alert.message}
        </div>
    )
}

export default Alert
