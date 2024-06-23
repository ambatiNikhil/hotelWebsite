import {createSlice} from '@reduxjs/toolkit'

const initialHotel = {
    placeSelected : '',
    numberOfPeople : "",
    checkInDate : "",
    checkOutDate : ""
}
const hotelSlice = createSlice({
    name : "hotel",
    initialState : initialHotel,
    reducers : {
        selectPlace : (state,action) => {
            state.placeSelected = action.payload
        },
        selectNumberOfPeople : (state,action) => {
            state.numberOfPeople = action.payload
        },
        selectCheckInDate : (state,action) => {
            state.checkInDate = action.payload
        },
        selectCheckOutDate : (state,action) => {
            state.checkOutDate = action.payload
        }

    }
}) 

export default hotelSlice.reducer 
export const { selectPlace , selectNumberOfPeople  , selectCheckInDate , selectCheckOutDate} = hotelSlice.actions


