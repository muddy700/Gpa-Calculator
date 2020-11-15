import '../index.css'

export const H1 = ({ title , Style }) => {
    return(
        <h1 className={Style}>{title}</h1>
    )
}

export const Span = ({ message , Style , hide }) => {
    return(
        <span className={Style} hidden={hide} >{message}</span>
    )
}

export const Label = ({ Style , message}) => {
    return(
        <label className={Style}>{message}</label>
    )
}

export const Button = ({ Value , isDisabled , Style , clicked }) =>{
    return(
        <input type="button" value={Value} className={Style} onClick={clicked} disabled={isDisabled} />
    )
}

export const NumberInput = ({ hasChanged , Style , keyIsUp , Value , isDisabled , placeHolder}) => {
    return(
        <input type="number" className={Style} placeholder={placeHolder} disabled={isDisabled} value={Value} onKeyUp={keyIsUp} onChange={(e) => hasChanged(e.target.value)} autoFocus />
    )
}