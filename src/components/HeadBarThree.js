import React from 'react'
import Logo from "../images/headLogo.png";
import { Link } from 'react-router-dom';
import './partsStyle.css'

const HeadBarThree = () => {
  return (
    <div>
        <div className="mainHeadBarOne">
        <div>
          <img src={Logo} alt="logo" />
        </div> 
        <div className='buttonBox' style={{display : "flex" , gap : "20px" , marginLeft : "32px"  }}>
        <Link  style={{color : "gray"}} to='/'>Home</Link>
        <Link  style={{color : "gray"}} to='/hotel'>Hotels</Link>
        <Link  style={{color : "gray"}} to='/whish-hotels'>WhishList</Link>
        
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HeadBarThree