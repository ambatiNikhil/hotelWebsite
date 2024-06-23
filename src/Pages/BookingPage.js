import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import HeadBarThree from "../components/HeadBarThree";

const BookingPage = () => {
  const [people, setPeople] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  const errorMessage = "Please Enter All Values";
  const [submissionAttempted, setSubmissionAttempted] = useState(false);

  const { items } = useCart();
  const { hotelName, price, location, imageOfHotel } = items[0];


  const numberOfPeople = [
    { id: "1", value: 1 },
    { id: "2", value: 2 },
    { id: "3", value: 3 },
    { id: "4", value: 4 },
    { id: "5", value: 5 },
  ];

  const handlePeopleSelection = (value) => {
    setPeople(value[0].value);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionAttempted(true);
    if (people !== "" && startDate !== "" && endDate !== "") {
      navigate('/')
    } else {
      alert(errorMessage);
    }
  };

  const handleExit = () => {
    alert("Your booking is finished")
    navigate("/");
  };

  const days = endDate - startDate;
  const exactDays = Math.round(days / (1000 * 60 * 60 * 24));
  const totalPrice = exactDays * price;
  return (
    <>
     <HeadBarThree />
    <div className="bookingSlide">
      <div>
        <h2 className="text-success">
          {" "}
          confirm your stay at {hotelName} - {location}
        </h2>
        <img
          src={imageOfHotel}
          alt="hotel"
          style={{ height: "300px", width: "300px"  , margin : "25px"}}
        />
      </div>

      <h6>Please fill the form below</h6>
      <form>
        <div className="d-flex justify-content-center">
          <div className="w-30 p-3 border rounded">
            <Select
              options={numberOfPeople}
              labelField="id"
              valueField="value"
              placeholder="Select Number of people"
              onChange={(value) => handlePeopleSelection(value)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="w-30 p-3 border rounded">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              minDate={new Date()} // Set today's date as minDate
              dateFormat="dd/MM/yyyy"
              placeholderText="Please select start date"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="w-30 p-3 border rounded">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Please select end date"
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* <h6>totalDays = </h6> */}


    <div className="lastTextBox">
      <h3>
        congratulations
        <span className="text-primary">
          {hotelName} - {location}
        </span>
        is completed
      </h3>
      
      <p>Total {exactDays} days stay</p>
      <p>Your total cost for the stay is {totalPrice}</p>
      {/* <button className="btn btn-danger" onClick={handleExit}>
        Exit
      </button> */}
      </div>
    </div>
    </>
  );
};

export default BookingPage;
