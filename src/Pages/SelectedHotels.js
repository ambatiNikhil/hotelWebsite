import React from 'react'
import { selectedHotels } from './Hotels'
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import FavHotel from './FavHotel';
import FotterOne from '../components/FotterOne';
import HeadBarThree from '../components/HeadBarThree';
import { Link, useNavigate } from 'react-router-dom';
import './pageStyles.css'
const hotelPicked = []

const SelectedHotels = () => {
  const navigate = useNavigate() 
  const [isPerfect , setIsPerfect] = useState(false) 

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const handleBooking = () => {
    if(items.length === 1){
      navigate("/booking")
    }
    if(items.length === 0){
      alert("Please add a hotel to your whish list")
    }
    else{
      setIsPerfect(true)
    }
  }

  if (isEmpty) return <h1 className='text-danger' style={{textAlign : "center"}}>Your cart is empty please add something <Link to='/hotel'>Click here</Link></h1>
  return (
    <>
     <HeadBarThree />
    <div className='selectedHotelsCont'>
       
        <div className='bookingBox'>
          <div className='bookingHead'>
        <h5> If You have Selected more than one hotel in order to book one remove remaining</h5>
        <button onClick={handleBooking} className='btn btn-danger'> Go to booking</button>
        </div>
        </div>
        {items.map((item) => (
        <FavHotel
          key={item.id}
          data={item}
          bookedHotels = {hotelPicked}
        />
      ))}

      <FotterOne />
        
    </div>
    </>
  )
}

export default SelectedHotels