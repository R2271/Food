

import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../styles/register.css'
import { useNavigate, Link } from "react-router-dom";
import { Alert } from 'reactstrap';
import { useUserAuth } from '../context/AuthContext'






const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState('')
  const { signUp } = useUserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
      await signUp(email, password);
      navigate("/home")
    }catch (err) {
      setError(err.message)
    }
  }

 


      
  

  return <Helmet title='Signup'>
    <CommonSection title='Signup' />
    <div className='formContainer'>
      <div className='formWrapper'>
      {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit} >
          <input type='text' placeholder='name' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' />
          <input type='text' placeholder='Mobile number' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' />
          
          <button className='addTOCart_btn-btn' >Sing Up</button>
          
        </form>
        <button className='addTOCart_btn-btn mt-2'><Link to="/login"> Login </Link></button>

      </div>
    </div>
  </Helmet>
}

export default Register

