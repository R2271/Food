

import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/checkout.css'

const Checkout = () => {
  const cartTotalAmount = useSelector(state=> state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)

  return ( <Helmet title='CheckOut'>
    <CommonSection title='Checkout' />
    <section>
      <Container>
        <Row>
          <Col lg='8' md='6'>
            <h6 className='mb-4'>Shipping Address</h6>
            <form className='checkout_form'  method="POST"> 
              <div className='form_group'>
                <input type='text' name='name' placeholder='Enter your name'  required />
              </div>
              <div className='form_group'>
                <input type='email' name='email' placeholder='Enter your email'  required />
              </div>
              <div className='form_group'>
                <input type='text' name='number' placeholder='phone number' required />
              </div>
              <div className='form_group'>
                <input type='text' name='country' placeholder='Country' required />
              </div>
              <div className='form_group'>
                <input type='text' name='city' placeholder='City'   required/>
              </div>
              <div className='form_group'>
                <input type='text' name='number' placeholder='postal code'       required />
              </div>
              <button className='addTOCart_btn'>Payment</button>
            </form>
           
          </Col>
          <Col lg='4' md='6'>
            <div className='checkout_bill'>
              <h6 className=' d-flex align-items-center
              justify-content-between mb-3'>
                Subtotal: <span>Rs{cartTotalAmount}</span></h6>
              <h6 className=' d-flex align-items-center
              justify-content-between mb-3'>
                Shipping Amount: <span>Rs{shippingCost}</span></h6>
              <div className='checkout_total'>
                <h5 className=' d-flex align-items-center
              justify-content-between'>Total: <span>Rs{totalAmount}</span></h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Checkout
