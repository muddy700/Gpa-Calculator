import React , { useState } from 'react'
import { DialogBox , Header , FormRow } from './components/dialogBox'
import { Footer , ResultBox } from './components/footer'
import { H1} from './components/inputs'
import './index.css'

export const App = () => {

  const initialGrades = [
    { name : 'A' , value : 5} , 
    { name : 'B+' , value : 4} , 
    { name : 'B' , value : 3} , 
    { name : 'C' , value : 2} , 
    { name : 'D' , value : 1} , 
    { name : 'E' , value : 0.5} , 
    { name : 'F' , value : 0 }
  ]

  // const initialCourse = [
  //   { grade : 5 , credit : 10} ,
  //   { grade : 4 , credit : 10}
  // ]

  const [totalCourse , setTotalCourse ] = useState('')
  const [formCaller , setFormCaller ] = useState('home')
  const [resultCaller , setResultCaller ] = useState(false)
  const [grade , setGrade ] = useState(null)
  const [credit , setCredit ] = useState(null)
  const [courses , setCourses ] = useState([])
  const [gpa , setGpa ] = useState(0)
  const [errorMessage , setErrorMessage ] = useState('')

  const handleTotalCourse = (value) => {
    const changedValue = parseInt(value)
    setTotalCourse(changedValue)
  }

  const handleGrades = (value) => {
    setErrorMessage('')
    setGrade(value)
  }

  const handleCredit = (value) =>  {
    const changedValue = parseFloat(value)
    setCredit(changedValue)
    setErrorMessage('')
  }

  const removeError = () => {
    setErrorMessage('')

  }

  const saveCourse = () => {
    if(!grade){
      setErrorMessage('grade')
    }
    else if(!credit){
      setErrorMessage('credit')
    }
    else{
      setCourses([...courses , {grade : grade , credit : credit}])
      setCredit('')
      setGrade('')
      setErrorMessage('')
    }
  }

  const showForm = () => {
    setTotalCourse(totalCourse)
    
    if(!totalCourse) {
      setErrorMessage('size')
    }
    else {
      setFormCaller('form')
      setErrorMessage('')
    }
    
  }

  const hideForm = () => {
    setFormCaller('home')
    setResultCaller('')
    setTotalCourse('')
    setCourses([])
  }

  const calculateGpa = () =>{
    setFormCaller('')
  setResultCaller('result')
  
  const product = courses.map((data) => {return data.credit * data.grade})
  console.log('product '+ product)
  const sumOfProduct = product.reduce((total , data) => total = total + data )
  console.log('sop ' + sumOfProduct)
  const credits = courses.map((data) => {return data.credit })
  const sumOfCredit = credits.reduce((total ,data) => {return total = total + data })
  console.log('totalCredit ' + sumOfCredit)
  const gpa = sumOfProduct/sumOfCredit
  console.log('gpa ' + gpa)
  console.log(courses)
  setGpa(gpa)  
}

  const resetValue = () => {
    setGpa(0)
    setGrade('')
    setCredit('')
    setCourses([])
    setTotalCourse('')
    setResultCaller('')
    setErrorMessage('')
    setFormCaller('home')
    
   }
  
  return (
    <div className="container">
        <DialogBox course={totalCourse} whenChanged={handleTotalCourse} whenClicked={showForm} hide={formCaller} error={errorMessage}  whenKeyIsUp={removeError}/> 
        <div hidden={formCaller === 'form' ? false : true}>
            <H1 title="Fill The Form Bellow" /> 
            <Header title1="Course" title2="Grade"  title3="Credit" />
            <FormRow error={errorMessage} id={courses.length} total={totalCourse} grades={initialGrades} saveInfo={saveCourse} changeGrade={handleGrades} changeCredit={handleCredit} selectedOption={grade} creditValue={credit} /> 
            <Footer onCancel={hideForm} calculator={calculateGpa} id={courses.length} total={totalCourse} />
        </div>
        <ResultBox hide={resultCaller}  gpa={gpa} whenClicked={resetValue}/>
    </div>
  );
}
