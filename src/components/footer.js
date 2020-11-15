import '../index.css'
import React from 'react'
import { Button, H1 } from './inputs'

export const Footer = ({ onCancel , total , id , calculator }) =>{

    const muter = id !== total ? true : false

    return (
        <div className="footer">
            <Button Value="Cancel" Style="footerButton" clicked={onCancel} />
            <Button Value="Calculate"  Style="footerButton" clicked={calculator} isDisabled={muter} />
        </div>
    )
}

export const ResultBox = ({hide , gpa , whenClicked }) => {

    const message = gpa >=2 ? 'Pass!.Your GPA Is: ' + gpa.toFixed(1) : 'Fail!!.Your GPA Is: ' + gpa.toFixed(1)
    
    return(
        <div className="dialog" hidden={hide === 'result' ? false : true}>
            <H1 title={message} />
            <Button Value="Exit" clicked={whenClicked} />
        </div>
    )
}