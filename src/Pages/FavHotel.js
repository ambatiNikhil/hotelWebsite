import React from 'react'
import { Link } from 'react-router-dom'
import './pageStyles.css'
import { useCart } from 'react-use-cart'

export const selectedHotel = []

const FavHotel = ({data , onBooking , bookedHotels}) => {
    const {removeItem} = useCart()  

    const {imageOfHotel , id, hotelName,location,price,numberOfRooms,hotelDescription} = data 

    const handleRemove = (data) => {
        alert("you removed a item for whish list")
       
    }
  return (
    <div className='favHotelCard'>
    <Link to={`/hotel-details/${id}`}> <img  src={imageOfHotel} alt='hotelImage' className='hotelImageStyle'/>  </Link>

     <div className='hotelText'>
         <h2>{hotelName}</h2>
         <h4>Location <span style={{color : "brown"}}>{location}</span></h4>
         <p>Breakfast Available</p>
         <h5>Price for day = {price}</h5>
         <p>Number of Rooms Available {numberOfRooms}</p>
         {/* <h6>About Hotel : {hotelDescription}</h6> */}
     </div>
     <div className='addToFavBox'>
        {/* <h3>Want to add this to your whishList</h3> */}
         {/* <button className='btn btn-warning' onClick={() => handleSelection(data)} >Book Hotel</button>  */}
        <button className='btn btn-success' onClick={() =>  removeItem(data.id)}>Remove</button>
     </div>
 </div>
  )
}

export default FavHotel