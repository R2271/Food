

import React, { useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/AuthContext';
import '../styles/register.css'
import { Alert } from 'reactstrap';



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState('')
  const { login, googleSignIn } = useUserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
      await login(email, password);
      console.log('login')
      navigate("/home");
    }catch (err) {
      setError(err.message)
    }
  } 
  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try{
      await googleSignIn();
      navigate("/home")
    }catch(err){
      setError(err.message)
    }
  }
  
  return <Helmet title='Login'>
    <CommonSection title='Login' />
    <div className='formContainer'>
        <div className='formWrapper'>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' />
          <button className='addTOCart_btn-btn' >Log In</button>
          <div>
            <div className='checkbox_btn'>
              <input type='checkbox' className='checkbox' />Remember me
            </div>
          </div>
          </form>
          <div>
             <p><Link to='/forgote'> Forgote Password </Link></p>
           <p>Don't have an account?<Link to="/register"> Sign Up </Link></p>
           </div>
          
         <div  className="social_links d-flex align-item-center gap-3 justify-content-end">
        <span><i class="ri-google-fill"  onClick={handleGoogleSignIn} ></i></span>
        <span><i class="ri-facebook-line"></i></span>
        <span><i class="ri-instagram-line"></i></span>
        </div>
        </div>
    </div>
  </Helmet>
}

export default Login;
