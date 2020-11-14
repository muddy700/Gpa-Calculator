import React , { useState } from 'react'
import './index.css'
import { DialogBox , Header , FormRow } from './components/dialogBox'
import { Footer , ResultBox } from './components/footer'

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

  const initialCourse = [
    { grade : 5 , credit : 10} ,
    { grade : 4 , credit : 10}
  ]

  const [totalCourse , setTotalCourse ] = useState('')
  const [formCaller , setFormCaller ] = useState('home')
  const [resultCaller , setResultCaller ] = useState(false)
  const [grade , setGrade ] = useState(null)
  const [credit , setCredit ] = useState(null)
  const [courses , setCourses ] = useState([])
  const [gpa , setGpa ] = useState(0)
  const [errorMessage , setErrorMessage ] = useState('')

  const handleTotalCourse = (value) => {
     if (totalCourse <= 0) {
       setErrorMessage(true)
     } 
     else {
       setErrorMessage(false)
     }
    const changedValue = parseInt(value)
    setTotalCourse(changedValue)
  }

  const handleGrades = (value) => {
    setGrade(value)
  }
  const handleCredit = (value) =>  {
    const changedValue = parseFloat(value)
    setCredit(changedValue)
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
  console.log('arraylength ' + courses.length)

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
    setGpa('')
    setGrade('')
    setCredit('')
    setFormCaller('home')
    setResultCaller('')
    setTotalCourse('')
    setCourses([])
    setErrorMessage('')
    
   }
  
  return (
    <div className="container">
      <DialogBox course={totalCourse} whenChanged={handleTotalCourse} whenClicked={showForm} hide={formCaller} error={errorMessage}  whenKeyIsUp={removeError}/> 
        <div hidden={formCaller === 'form' ? false : true}>
          {/* <h1>You have Selected :{formCaller ? totalCourse : '' } Courses</h1>    */}
          <h1>Fill The Form Bellow</h1> 
          <Header title1="Course" title2="Grade"  title3="Credit" />
          <FormRow error={errorMessage} id={courses.length} total={totalCourse} grades={initialGrades} saveInfo={saveCourse} changeGrade={handleGrades} changeCredit={handleCredit} selectedOption={grade} creditValue={credit} /> 
          <Footer onCancel={hideForm} calculator={calculateGpa} id={courses.length} total={totalCourse} />
        </div>
          <ResultBox hide={resultCaller}  gpa={gpa} whenClicked={resetValue}/>
    </div>
  );
}

// 