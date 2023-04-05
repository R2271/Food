

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Mobile from '../pages/Mobile'
import { UserAuthContextProvider } from '../context/AuthContext'


import  Forgote  from '../pages/Forgote'


 
const Router = () => {
  


  return (
    <>
    <UserAuthContextProvider>
    <Routes>
        <Route path='/' element={<ProtectedRoute />}>
        <Route path='/home' element={<Home /> }/>
        <Route path='/foods' element={<AllFoods />} />
        <Route path='/foods/:id' element={<FoodDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/forgote' element={<Forgote />} />

      </Routes>
    </UserAuthContextProvider>
    </>
    
    )
}

export default Router
