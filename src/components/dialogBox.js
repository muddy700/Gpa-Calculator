import { H1 , Span , Label , Button , NumberInput } from './inputs'
import '../index.css'

export const DialogBox = ({course , whenChanged , error , hide , whenKeyIsUp , whenClicked}) => {

        const hider = error === 'size' ? false : true
    return (
        <div className="dialog" hidden={hide === 'home' ? false : true}>
            <H1 title="Welcome" />
            <Label Style="dialogLabel" message="How Many Courses Do You Have ?" />
             <br /> <br />
            <NumberInput placeHolder="Enter Total" Value={course} hasChanged={whenChanged}  keyIsUp={whenKeyIsUp} />
            <Button Value="Go" clicked={whenClicked} /> <br />
            <Span message="Number Of Courses Is required" hide={hider} Style="errorClass" />
        </div>
    )
}


export const Header = ({ title1 , title2 , title3}) => {
    return (
        <div className="heading" >
            <H1 title={title1} Style="title" />
            <H1 title={title2} Style="title"/>
            <H1 title={title3} Style="title"/>
        </div>
    )
}

export const FormRow = ({ grades , changeGrade , id , saveInfo , changeCredit , error , selectedOption , total , creditValue }) => {

    const options =  grades.map((data) => {
        return(
            <option key={data.value} value={data.value} >{data.name}</option>
        )
    })
    
    const message = id === total ? 'Completed, Press Calculate' : 'Course ' + (id+1) 
    const hider1 = error === 'grade' ? false : true
    const hider2 = error === 'credit' ? false : true
    const muter1 = id === total ? true : false
    const muter2 = id === total ? true : false
    return(
        <div className="formRow" hidden={id === total ? true : false}>
            <Label Style="row" message={message} />
            <select value={selectedOption} className="row" onChange={(e) => changeGrade(e.target.value)}  disabled={id === total ? true : false}>
                <option value="t">Select Grade</option>
                {options}
            </select> <br />
            <Span Style="errorClass" hide={hider1} message="Grade Is required" />
            <NumberInput Style="row" placeHolder="Enter Credit" Value={creditValue} hasChanged={changeCredit} isDisabled={muter2} />
            <Span Style="errorClass" hide={hider2}  message="Credit Is required"/>
            <Button Value="Save" Style="saveButton" clicked={saveInfo} isDisabled={muter1} />
        </div>
    )
}