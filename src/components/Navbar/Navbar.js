import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
 
 const [click,setClick] = useState(false);

 const clicked = ()  =>
 {
    setClick(!click);
 }
 
  return (
    <>
    <div className='nav-items'>
      <div className='nav-logo'>
      <Link to='/'><h2>AlgoCheck</h2></Link>
      </div>
      <div>
        <ul className='nav-links'>
            <li className='nav-link'><Link to='/'>Home</Link></li>
            <li className='nav-link'><Link to='/about'>About Us</Link></li>
        </ul>
      </div>
      <div>
        <button className='nav-button'>Log In</button>
      </div>
    </div>
    
    <div className='nav-items-mobile'>
      <div className='nav-logo-mobile'>
      <h2><Link to='/'>AlgoCheck</Link></h2>
      </div>
      <div id='bar' onClick={clicked}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </div>
        <div className={click ? 'nav-li-mo ' : 'nav-li-mo active'}>
        <ul className='nav-links-mobile'>
            <li className='nav-link-mobile'><Link to='/'>Home</Link></li>
            <li className='nav-link-mobile'><Link to='/about'>About Us</Link></li>
        </ul>
      <div>
        <button className='nav-button-mobile'>Log In</button>
      </div>
      </div>      
    </>
  )
}
