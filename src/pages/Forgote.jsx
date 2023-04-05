import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { useUserAuth } from '../context/AuthContext';
import { Alert } from 'reactstrap';


const Forgote = () => {
  const [email, setEmail] = useState('')
  const [error ] = useState('')
    const { forgotPassword } = useUserAuth()

    

  return <Helmet title='Login'>
  <CommonSection title='Login' />
  <div className='formContainer'>
        <div className='formWrapper'>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={async e => {
            e.preventDefault()
            forgotPassword(email)
            .then(response => {

            }).catch(error)
          }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' />
          
          <button className='addTOCart_btn-btn' >Send Mail</button>
          <div>
          </div>
           
          </form>
        </div>
        
    </div>
  </Helmet>
}

export default Forgote
