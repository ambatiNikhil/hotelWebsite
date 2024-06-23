import React from 'react';
import Logo from '../images/headLogo.png';
import England from '../images/England.png';
import markButton from '../images/markButton.png';
import dollarBtn from '../images/dollerButton.png';
import heart from '../images/heart.png';
import phone from '../images/Phone.png';
import user from '../images/userPic.png';
import './partsStyle.css';
import {Link} from 'react-router-dom'

const HeadBarTwo = () => {
  return (
    <div>
      <div className='mainHeadBarOne'>
        <div>
          <img src={Logo} alt='logo' />
        </div>

        <div className='leftBox'>
          <div>
            <img src={England} alt='England' />
            <img src={dollarBtn} alt='dol' />
            <img src={markButton} alt='IconButton' />
            <img src={heart} alt='heart' />
            <img src={phone} alt='cell' />
          </div>
          <div className='userBox'>
            <img style={{ height: '50px' }} src={user} alt='userPic' />
            <div>
              <h6>Your Account</h6>
              <p>Anna Jhones</p>
            </div>
          </div>
        </div>
      </div>
      <div className='buttonBox'>
         <Link style={{color : "gray"}}>Trip</Link>
         <Link style={{color : "gray"}}>Deals</Link>
         <Link style={{backgroundColor : "blueviolet"}} to='/hotel'>Hotel</Link>
         <Link style={{color : "gray"}}>Flight</Link>
         <Link style={{color : "gray"}}>Apartment</Link>
        <Link style={{color : "gray"}}>Camper</Link>
        
        <div style={{display : "flex" , gap : "20px" , marginLeft : "32px"  }}>
          <Link  style={{color : "gray"}} to='/login'>LogIn</Link>
          <Link  style={{color : "gray"}} to='/signIn'>Register</Link>
        </div>
        
        </div>
      <hr />
    </div>
  );
};

export default HeadBarTwo;
