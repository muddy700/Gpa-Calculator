import '../index.css'
import React from 'react'

export const Footer = ({ onCancel , calculator }) =>{
    return (
        <div className="footer">
            {/* <input type="button" className="footerButton" value="Cancel" onClick={onCancel} /> */}
            <input type="button" className="footerButton" value="Calculate" onClick={calculator} />
        </div>
    )
}

export const ResultBox = ({hide}) => {
    return(
        <div className="dialog" hidden={hide === 'result' ? false : true}>
            <h1>ResultBox</h1>
        </div>
    )
}