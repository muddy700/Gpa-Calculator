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
  const [courses , setCourses ] = useState(initialCourse)
  const [gpa , setGpa ] = useState(0)

  const handleTotalCourse = (value) => {
    setTotalCourse(value)
  }

  const handleGrades = (value) => {
    setGrade(value)
  }
  const handleCredit = (value) =>  {
    setCredit(value)
  }
  const saveCourse = () => {
    setCourses([...courses , {grade : grade , credit : credit}])
    setCredit(0)
    setGrade('')
  }
  const showForm = () => {
    setFormCaller('form')
    setTotalCourse(totalCourse)
  }
  const hideForm = () => {
    setFormCaller('home')
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
  
}

   const getUserStars =() => {
     let i = 0;
     let stars = [];
     while (i < totalCourse) {
       i++;
       stars.push( 
         <FormRow grades={initialGrades} saveInfo={saveCourse} changeGrade={handleGrades} changeCredit={handleCredit} selectedOption={grade} creditValue={credit} /> 
         );
     }
     return stars;
   }
  return (
    <div className="container">
      <DialogBox course={totalCourse} whenChanged={handleTotalCourse} whenClicked={showForm} hide={formCaller} /> 
        <div hidden={formCaller === 'form' ? false : true}>
          <h1>{formCaller ? totalCourse : '' }</h1>   
          <h1>Fill The Form Bellow</h1> 
          <Header title1="Course_Id" title2="Grade"  title3="Credit" />
          <FormRow grades={initialGrades} saveInfo={saveCourse} changeGrade={handleGrades} changeCredit={handleCredit} selectedOption={grade} creditValue={credit} /> 
          <FormRow grades={initialGrades} saveInfo={saveCourse} changeGrade={handleGrades} changeCredit={handleCredit} selectedOption={grade} creditValue={credit} /> 
          <Footer onCancel={hideForm} calculator={calculateGpa} />
        </div>
          <ResultBox hide={resultCaller}  />
    </div>
  );
}

