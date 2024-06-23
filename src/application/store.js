import  { configureStore } from '@reduxjs/toolkit' 

import hotelReducer from '../Features/hotelSlice'

const store = configureStore({
   reducer : {
    hotel : hotelReducer
   }
})

export default store