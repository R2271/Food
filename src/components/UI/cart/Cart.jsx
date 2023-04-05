

import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import '../../../styles/shopping-cart.css'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const dispatch = useDispatch();
    const cartProduct = useSelector((state)=>state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const toggleCart = ()=>{
        dispatch(cartUiActions.toggle())
    }

  return <div className="cart_container">
        <ListGroup className="cart">
            <div className="cart_close">
                <span onClick={toggleCart}>
                    <i class="ri-close-fill"></i>
                </span>
            </div>
            
            <div className="cart_item-list">
                {
                    cartProduct.length === 0 ? (
                    <h6 className="text-center mt-5">No item added to the cart</h6>
                        ) : (
                        cartProduct.map((item,index) => (
                            <CartItem item={item} key={index} />
                        ))
                )}
            </div>

            <div className="cart_bottom d-flex align-items-center justify-content-between">
                <h6>Subtotal: <span>Rs.{totalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
  </div>
}

export default Cart
