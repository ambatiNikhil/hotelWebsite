import React from 'react'
import './pageStyles.css'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'


const HotelCard = ({data , onSelect}) => {
    const {addItem} = useCart() 

    const { imageOfHotel , location ,hotelName  , numberOfRooms , id, price,hotelDescription} = data 

    const handleAddingToCart = () => {
      onSelect(id)
    }
  return (
    <div className='hotelCard'>
       <Link to={`/hotel-details/${id}`}> <img  src={imageOfHotel} alt='hotelImage' className='hotelImageStyle'/>  </Link>

        <div className='hotelText'>
            <h2>{hotelName}</h2>
            <h4>Location <span style={{color : "brown"}}>{location}</span></h4>
            <p>Breakfast Available</p>
            <h5>Price for day = {price}</h5>
            <p>Number of Rooms Available {numberOfRooms}</p>
            <h6>About Hotel : {hotelDescription}</h6>
        </div>
        <div className='addToFavBox'>
           {/* <h3> Add to whishList</h3> */}
           <button  className='btn btn-primary' onClick={() => onSelect(data.id)}>Add</button>
        </div>
    </div>
  )
}

export default HotelCard