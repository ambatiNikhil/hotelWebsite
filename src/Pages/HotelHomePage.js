import React from 'react'
import { useSelector } from 'react-redux'

const HotelHomePage = () => {

    const place = useSelector((state) => state.hotel.placeSelected)
    const numberOfPeople = useSelector((state) => state.hotel.numberOfPeople)
    const startingDate = useSelector((state) => state.hotel.checkInDate)
    const endDate = useSelector((state) => state.hotel.checkOutDate)

    console.log(localStorage.getItem("place"))
    let ww=localStorage.getItem("place")
  return (
    <div>
        <h1>Selected Hotel is  : {ww}</h1>
        <h1>Number of People Selected : {numberOfPeople}</h1>
        <h1>The starting Date of journey is : {startingDate}</h1>
        <h2>The ending date of trip is  : {endDate}</h2>
    </div>
  )
}

export default HotelHomePage