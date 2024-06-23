import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HotelHomePage from "./Pages/HotelHomePage";
// import { Provider } from "react-redux";
// import store from "./application/store";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Hotels from "./Pages/Hotels";
import HotelDetails from "./Pages/HotelDetails";
import SelectedHotels from "./Pages/SelectedHotels";
import { CartProvider } from "react-use-cart";
import BookingPage from "./Pages/BookingPage";

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signIn" element={<SignUpPage />} />
          <Route path="/hhome" element={<HotelHomePage />} />

          
          <Route path="/hotel" element ={<Hotels />} />
          <Route path="/whish-hotels" element={<SelectedHotels />} />
         
          <Route path="/hotel-details/:hotelId" element={<HotelDetails />}/>
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
      </CartProvider>
      {/* <HomePage />
      <HotelHomePage /> */}
    </> 
  );
}

export default App;
