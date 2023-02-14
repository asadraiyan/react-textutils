import React from 'react'
import "../styles/Alert.css"
const Alert = ({ alert }) => {
    return (
        alert && <div className='alert-box'>
            <span>{alert.type}: {alert.message}</span>
        </div>
    )
}

export default Alert
