import React, {useRef, useEffect, useContext} from 'react'
import { Container } from 'reactstrap';
import logo from '../../assets/img/logo.jpg'
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/header.css'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'
import { useUserAuth } from '../../context/AuthContext';
import { async } from '@firebase/util';




const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
  
]


const Header = () => {   
  

  const menuRef = useRef(null);
  const headerRef =useRef(null);
  const totalQuantity = useSelector(state=> state.cart.totalQuantity);
  const dispatch = useDispatch()
  

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  useEffect(()=>{

    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          headerRef.current.classList.add('header_shrink')
        }

        else{
          headerRef.current.classList.remove('header_shrink')
        }
    })

    return()=> window.removeEventListener('scroll', this)

  },[])
const { logOut } = useUserAuth()
const handleLogOut = async () => {
  try{
    await logOut()
  }catch(err) {
    console.log(err.message)
  }
}

  return <header className='header' ref={headerRef}>

      <Container>
        <div className="nav_wrapper d-flex align-items-center
        justify-content-between">
            <div className="logo">
                <Link to='/home'><img src={logo} alt="logo" /></Link>
                <h5>Tast of Best</h5>
            </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">

                 {
                  nav__links.map((item,index)=>(
                    <NavLink 
                    
                    to={item.path} 
                    key={index}
                    className={(navclass)=>
                      navclass.isActive ? "active_menu" : " "
                    }
                    >
                      {item.display}
                      </NavLink>
                  ))}   

              </div>
          </div>
          <div className="nav_right d-flex align-items-center gap-4">
              <span className="cart_icon" onClick={toggleCart}>
              <i class="ri-shopping-cart-line"></i>
                    <span className="cart_badge">{totalQuantity}</span>
              </span>

              {/* <span className="user">
                    <Link to='/login'><i class="ri-user-line"></i></Link>
              </span> */}
              
              <span className="mobile_menu" onClick={toggleMenu}>
              <i class="ri-menu-fill"></i>
              </span>
              <span className='.addTOCart_btn-btn'>
                
                
                 {/* { <button className='addTOCart_btn-btn-btn'><Link to={'/login'}>login</Link></button>}  */}
                 {<button className='addTOCart_btn-btn-btn'onClick={handleLogOut} >login</button>} 
              </span>
          </div>

        </div>
      </Container>

  </header>
}

export default Header
