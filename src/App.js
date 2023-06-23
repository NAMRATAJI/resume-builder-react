import './App.css';
import React, {useState, useEffect, useRef} from 'react'
import Resume from './Component/Resume'
import NonExistentPage from './Component/NonExistentPage'
import PromptUser from './Component/PromptUser'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'


const converter = require('number-to-words')
function App() {
  const [userInfo, setUserInfo] = useState({})
  const[source, setSource] = useState('')
  const random_number = Math.floor(Math.random()* 10e4)
  const random_alpha_num = converter.toWords(random_number)
  const getRandomNumber = (randNum) => {
    return converter.toWords(randNum)
  }
  const generateImage = () => { 
  setSource(`https://robohash.org/stefan-${random_alpha_num}`)
    console.log(source)
  }
  useEffect(() => { 
    generateImage()
  }, )
  function handleChange(e) {
    setUserInfo(prevInfo =>{
      return{
        ...prevInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<PromptUser userObject = {userInfo} imageSource = {source} handleChange ={handleChange}/>}/>
        <Route path = '/resume' element = {<Resume userObject = {userInfo} imageSource = {source}/>}/>
        <Route path = '*' element = {<NonExistentPage />}/>
      </Routes>
    </Router>
         
  );
}
export default App;
