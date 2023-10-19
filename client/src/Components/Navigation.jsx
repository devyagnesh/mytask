import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
const Navigation = () => {
  const countAddtoCart = useSelector(state=>state.cart.inCart)
  return (
    <nav className='nav'>
        <h1>Cart Task</h1>
            
            <Link to={'/cart'} className='gotocart'>Cart {countAddtoCart}</Link>
       
    </nav>
  )
}

export default Navigation