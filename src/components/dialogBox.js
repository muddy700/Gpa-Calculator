import '../index.css'

export const DialogBox = ({course , whenChanged , error , hide , whenKeyIsUp , whenClicked}) => {

    return (
        <div className="dialog" hidden={hide === 'home' ? false : true}>
            <h1>Welcome</h1>
            <label className="dialogLabel">How Many Courses Do You Have ?</label> <br /> <br />
            <input autoFocus type="number" placeholder="Enter Total " value={course} onKeyUp={whenKeyIsUp} onChange={(e) => whenChanged(e.target.value)} />
            <input type="button" onClick={whenClicked} value="Go" />  <br />
            <span className="errorClass" hidden={error === 'size' ? false : true}>Number Of Courses Is required</span>
        </div>
    )
}


export const Header = ({ title1 , title2 , title3}) => {
    return (
        <div className="heading" >
            <h1 className="title">{title1}</h1>
            <h1 className="title">{title2}</h1>
            <h1 className="title">{title3}</h1>
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
    return(
        <div className="formRow" hidden={id === total ? true : false}>
            <label className="row">{message} </label>
            <select value={selectedOption} className="row" onChange={(e) => changeGrade(e.target.value)}  disabled={id === total ? true : false}>
                <option value="t">Select Grade</option>
                {options}
            </select> <br />
            <span className="errorClass" hidden={error === 'grade' ? false : true}>Grade Is required</span>
            <input type="number"  className="row" placeholder="Enter credit " value={creditValue}  onChange={(e) => changeCredit(e.target.value)}  disabled={id === total ? true : false}/> <br />
            <span className="errorClass" hidden={error === 'credit' ? false : true}>Credit Is required</span>
            <input type="button" value="Save" className="saveButton" onClick={saveInfo} disabled={id === total ? true : false} />
        </div>
    )
}