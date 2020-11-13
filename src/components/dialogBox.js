import '../index.css'

export const DialogBox = ({course , whenChanged , hide , whenClicked}) => {

    return (
        <div className="dialog" hidden={hide === 'home' ? false : true}>
            <h1>Welcome</h1>
            <label className="dialogLabel">How Many Courses Do You Have ?</label> <br /> <br />
            <input type="number" placeholder="Enter Total " value={course}  onChange={(e) => whenChanged(e.target.value)} />
            <input type="button" onClick={whenClicked} value="Go" />
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

export const FormRow = ({ grades , changeGrade , saveInfo , changeCredit , selectedOption , creditValue }) => {
    let id = 0

    const options =  grades.map((data) => {
        return(
            <option key={data.value} value={data.value} >{data.name}</option>
        )
    })
    return(
        <div className="formRow">
            <label className="row">Course  {id +1} </label>
            <select value={selectedOption} className="row" onChange={(e) => changeGrade(e.target.value)}>
                <option value="t">Select Grade</option>
                {options}
            </select> 
            <input type="number"  className="row" placeholder="Enter credit " value={creditValue}  onChange={(e) => changeCredit(e.target.value)} />
            <input type="button" value="Save" className="saveButton" onClick={saveInfo} />
        </div>
    )
}