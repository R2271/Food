

import React from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart-page.css';

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Container, Row , Col } from 'reactstrap'
import { cartActions } from '../store/shopping-cart/cartSlice'

const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return( <Helmet title='Cart'>
    <CommonSection title='Cart'/>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              cartItems.length === 0 ? <h5>Your 
                Cart is Empty</h5> : <table className="table table-bordered" >
              <thead>
                <tr>
                  <th className='text-center'>Image</th>
                  <th className='text-center'>Product Title</th>
                  <th className='text-center'>Price</th>
                  <th className='text-center'>Quantity</th>
                  <th className='text-center'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(item=> <Tr item={item} key={item.id} /> )
                }                
              </tbody>
            </table> 
            }
            <div className="mt-4">
              <h6>Subtotal: Rs
                <span className='cart_subtotal'>{totalAmount}</span></h6>
              <p>Taxes and shipping will calculate at checkout</p>
              <div className="cart_page-btn">
                <button className='addTOCart_btn me-4'><Link to='/foods'>Continue Shopping</Link></button>
                <button className='addTOCart_btn'><Link to='/checkout'>Procced to Checkout</Link></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
)
}

const Tr = props=> {
  const { id, image01, title, price, quantity } = props.item
  const dispatch = useDispatch()

  const deletItem = ()=>{
    dispatch(cartActions.deleteItem(id))
  }
  return<tr>
    <td className='text-center cart_img-box'><img src={image01} alt='image01' /></td>
    <td className='text-center'>{title}</td>
    <td className='text-center'>{price}</td>
    <td className='text-center'>{quantity}</td>
    <td className='text-center cart_item-del' onClick={deletItem}><i class="ri-delete-bin-line"></i> </td>
  </tr>
}


export default Cart
