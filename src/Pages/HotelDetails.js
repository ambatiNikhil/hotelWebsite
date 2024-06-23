import React from "react";
import { useParams } from "react-router-dom";
import json from "../db.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../images/headLogo.png";
import {Link} from "react-router-dom"


const data = json;

const HotelDetails = () => {
  const { hotelId } = useParams();
  const hotel = data.find((eachItem) => eachItem.id == hotelId);
  
  const {
    hotelName,
    imageOfHotel,
    similarPicsRelatedToFacilities,
    location,
    costPerDay,
  } = hotel;

  

  return (
    <div> 

      <div>
      <div className="mainHeadBarOne">
        <div>
          <img src={Logo} alt="logo" />
        </div> 
        <div className='buttonBox' style={{display : "flex" , gap : "20px" , marginLeft : "32px"  }}>
        <Link  style={{color : "gray"}} to='/hotel'>Hotels</Link>
        <Link  style={{color : "gray"}} to='/whish-hotels'>WhishList</Link>
        </div>
      </div>
      <hr />
      </div>
      
      <h1>Welcome to {hotelName}</h1>
      <div className="imageBox">
        <img src={imageOfHotel} className="detailedPhoto" alt="hotelPic" />
        <div className="sliderBox">
          <h4>Some related pics</h4>
          <div className="imagesSlide">
            <img
              src={similarPicsRelatedToFacilities[0]}
              alt="facility"
              className="slideImage"
            />
            <img
              src={similarPicsRelatedToFacilities[1]}
              alt="facility"
              className="slideImage"
            />
          </div>
          <div className="imagesSlide">
            <img
              src={similarPicsRelatedToFacilities[2]}
              alt="facility"
              className="slideImage"
            />
            <img
              src={similarPicsRelatedToFacilities[3]}
              alt="facility"
              className="slideImage"
            />
          </div>
        </div>
      </div>
      <div className="hotelText">
        <p>
          Dear customer we are located in the prime location in{" "}
          <span style={{ color: "red", fontWeight: "bolder" }}>{location}</span>{" "}
          <br /> which will help you to cover all the planned destinations
          within less time
        </p>
        <p>
          We charge{" "}
          <span style={{ color: "red", fontWeight: "bolder" }}>
            {costPerDay}
          </span>{" "}
          for one day and night which is unmatched for the perks you are getting{" "}
          <br />
          but we provide discount of{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>10%</span> for
          the early bookings
        </p>
      </div>
    </div>
  );
};

export default HotelDetails;
