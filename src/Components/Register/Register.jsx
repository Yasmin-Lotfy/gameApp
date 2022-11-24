import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Register.module.scss'
import joi from 'joi'

export default function Register() {

const [user, setUser] = useState({
  "first_name":'',
  "last_name":'',
  "email":'',
  "age":'',
  "password":'',
});


const navigate = useNavigate();
const [errorMsg, setErrorMsg] = useState('');

const [validError, setValidError] = useState([]);

  let getInputValue = (e)=>{
    let myUser = {...user};
    myUser[e.target.name]= e.target.value;
    setUser(myUser)
  }

  // joi data validation function
  let ValidationFormData = ()=>{
    const schema = joi.object({
        first_name: joi.string().alphanum().min(4).max(10).required(),
        last_name: joi.string().alphanum().min(4).max(10).required(),
        email: joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
        age: joi.number().integer().required().min(18).max(90),
        password: joi.string().required().pattern(new RegExp('^[A-Z][0-9]{3,}$')),
       })
    return schema.validate(user,({abortEarly:false}));
  }
// submit function to send data to api
//but first it validate the data 
  let submitForm = async(e)=>{
    e.preventDefault()
    let validationResponse = ValidationFormData();
    console.log(user)
    console.log(validError)
    if(validationResponse.error){
      setValidError(validationResponse.error.details);
      console.log(validError)
       }else{
        let {data} =await axios.post('https://route-egypt-api.herokuapp.com/signup', user);
        console.log(data);
        if(data.message === "success"){
          goToLogin()
        }else{
          setErrorMsg(data.message)
          console.log("error")
        }
    }
    
  }
  // function to navigate for login component
  let goToLogin= ()=>{
    navigate('/log')
  }
  return (
    <>
    <div className="container">
        <div className="row mt-5 shadow-lg">
            <div className={`col-lg-6 ${style.imageDisplay}`}>
                
            </div>
            <div className={`col-lg-6 px-5 ${style.bgForm}`}>
                <h3  className='pt-2 text-center text-muted'>Create My Account!</h3>
                {errorMsg? <p className='alert alert-danger'>{errorMsg}</p>:''}
                <form onSubmit={submitForm}>
                    <div className="form-name d-flex">
                      <div className='w-50'>
                        <input onChange={getInputValue} type="text" className='form-control w-100' placeholder='First Name' name='first_name' />
                        {validError.map((error, index)=> error.context.label === "first_name"? <p className='mt-2 alert alert-warning me-2 py-1 px-3'>{error.message}</p>:'')}
                        </div>

                        <div className='w-50'>
                        <input onChange={getInputValue} type="text" className='form-control w-100 ' placeholder='Last Name' name='last_name' />
                        {validError.map((error, index)=> error.context.label === "last_name"? <p className='mt-2 alert alert-warning w-100 me-2 py-1 px-3'>{error.message}</p>:'')}
                        </div>
                    </div>
                    <input onChange={getInputValue} type="email" className='form-control w-100 ' placeholder='Email' name="email"/>
                    {validError.map((error, index)=> error.context.label === "email"? <p className='mt-2 alert alert-warning py-1 px-3'>{error.message}</p>:'')}

                    <input onChange={getInputValue} type="number" className='form-control w-100 ' placeholder='Age' name="age"/>
                    {validError.map((error, index)=> error.context.label === "age"? <p className='mt-2 alert alert-warning py-1 px-3'>{error.message}</p>:'')}
                    
                    <input onChange={getInputValue} type="password" className='form-control w-100 ' placeholder='password' name="password"/>
                    {validError.map((error, index)=> error.context.label === "password"? <p className='mt-2 alert alert-warning py-1 px-3'>{error.message}</p>:'')}

                    <button type='submit' class={`w-100 mb-2 text-white btn ${style.btnControl}`}> Create Account</button>
                  </form>
                <p className={`text-center text-muted`}>This site is protected by reCAPTCHA and the Google<a href='https://policies.google.com/privacy'>  Privacy Policy</a> and <a href="https://policies.google.com/terms"> Terms of Service</a> apply</p>
                <h6 className='text-muted text-center'>Already a member? 
                <span className={style.gotoLogin} onClick={goToLogin}> Log In</span>
                </h6>
            </div>
        </div>
    </div>
    </>
  )
}
