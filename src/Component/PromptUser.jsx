import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import InputItem from './InputItem'
import {HiArrowRight} from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GiAges} from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import 'animate.css'
import Resume from './Resume'

const PromptUser = ({handleChange, imageSource, OnButtonClick,  userObject}) => {
    const navigate = useNavigate()
    const onButtonClick = () => {
        alert(`WINDOWS DIMENSION : ${window.innerWidth}, ${window.innerHeight}`)
        navigate('/resume')

    }


    return (
    <>
    {OnButtonClick ? <Resume userObject ={userObject} imageSource = {imageSource}/> : <div className='prompt-container animate_animated animate_bounce'>
        <div className='inputs'>
            <InputItem className = 'First-name' onChange = {handleChange} label = 'First Name' placeholder = 'Enter Your First Name' name = 'firstName'/>
            <InputItem className = 'last-name' onChange = {handleChange} label = 'Last Name' placeholder = 'Enter Your Last Name' name = 'lasttName'/>
            <InputItem className = 'email' onChange = {handleChange} label = {<AiOutlineMail/>} placeholder = 'Enter Your mail' name = 'mail'/>
            <InputItem className = 'Phone' onChange = {handleChange} label = {<BsTelephone/>} placeholder = 'Enter Your Phone number' name = 'phoneNumber'/>
            <InputItem className = 'website' onChange = {handleChange} label = {<CgWebsite/>} placeholder = 'Enter Your website' name = 'Website'/>
            <InputItem className = 'birth-date' onChange = {handleChange} label = {<FaBirthdayCake/>} type = 'date' name = 'DOB'/>
            <InputItem className = 'age' onChange = {handleChange} label = {<GiAges/>} type = 'number' name = 'age'  placeholder = 'Enter Your age'/>

            <InputItem className = 'skills' onChange = {handleChange} label = 'skills' name = 'skills' placeholder = 'List one relevent skill'/>
            <InputItem className = 'experience' onChange = {handleChange} label = {<MdOutlineSchool/>} name = 'eeperience' placeholder='Enter Your Experience' />
            <InputItem className = 'graduationYear' onChange = {handleChange} label = 'Graduation Year' name = 'graduationYear' placeholder = 'Enter Your Graduation Year'/>
            <InputItem className = 'accomplishments' onChange = {handleChange} label = 'Accomplishment' name = 'accomplishment' placeholder = 'List One Major Accomplishment'/>
            <InputItem className = 'university' onChange = {handleChange} label = 'University' name ='university' placeholder = 'Enter University Name'/>
            <InputItem className = 'profile' onChange = {handleChange}  placeholder = 'Write About YourSelf' name = 'Profile' isTextArea = {true}/>
           
            {/*< InputItem className = 'profile' onChange = {handleChange} placeholder = 'Write About YourSelf' name = 'Profile' isTextArea = {true}/> */}
 
            <button className = 'generate-button' onClick={() => {
                onButtonClick()
              }}> Generate Resume <HiArrowRight/></button>
        </div>
        </div>}

    </>
    )
            }
export default PromptUser