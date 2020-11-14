import '../index.css'
import React from 'react'

export const Footer = ({ onCancel , total , id , calculator }) =>{
    return (
        <div className="footer">
            <input type="button" className="footerButton" value="Cancel" onClick={onCancel} />
            <input disabled={id !== total ? true : false} type="button" className="footerButton" value="Calculate" onClick={calculator} />
        </div>
    )
}

export const ResultBox = ({hide , gpa , whenClicked }) => {
    return(
        <div className="dialog" hidden={hide === 'result' ? false : true}>
            <h1 style={{paddingTop : 40}}>{gpa >=2 ? 'Pass!.Your GPA Is: ' + gpa : 'Fail!!.Your GPA Is: ' + gpa}</h1>
            <input type="button"  value="Exit" onClick={whenClicked} />
        </div>
    )
}