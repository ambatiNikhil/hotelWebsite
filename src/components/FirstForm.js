import React, { useState } from 'react';
import Select from "react-dropdown-select";
import { useDispatch } from 'react-redux';
import { selectPlace, selectNumberOfPeople, selectCheckInDate , selectCheckOutDate} from '../Features/hotelSlice';
import DatePicker from "react-datepicker";
import './partsStyle.css'
import "react-datepicker/dist/react-datepicker.css";

const FirstForm = () => {
    const dispatch = useDispatch();
    const [place , setPlace] = useState('')
    const [people,setPeople] = useState('')
    const [startDate, setStartDate] = useState('');
    const [endDate , setEndDate] = useState('');
    const errorMessage = "Please Enter All Values"
    const [submissionAttempted, setSubmissionAttempted] = useState(false);


    const places = [
        { id: "hyderabad", name: "hyderabad" },
        { id: "chennai", name: "chennai" },
        { id: "delhi", name: "delhi" },
        { id: "kerala", name: "kerala" }
    ];

    const numberOfPeople = [
        { id: "1", value: 1 },
        { id: "2", value: 2 },
        { id: "3", value: 3 },
        { id: "4", value: 4 },
        { id: "5", value: 5 },
    ];

    const handleSelection = (value) => {
        dispatch(selectPlace(value[0].name));
        setPlace(value[0].name)
        localStorage.setItem("place",place)
    };

    const handlePeopleSelection = (value) => {
        dispatch(selectNumberOfPeople(value[0].value));
        setPeople(value[0].value)
    };

    const handleDateChange = (date) => {
      const formattedDate = date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
  
      dispatch(selectCheckInDate(formattedDate))
      setStartDate(date);
    }

    const handleEndDateChange = (date) => {
      const formattedDate = date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      dispatch(selectCheckOutDate(formattedDate))
      setEndDate(date)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmissionAttempted(true);
      if (place !== '' && people !== '' && startDate !== '' && endDate !== '') {
          console.log(place, people, startDate, endDate);
      }
     };
    return (
      <>
        <form>
            <div className="d-flex justify-content-center">
                <div className="w-30 p-3 border rounded">
                    <Select 
                        options={places}
                        labelField='id'
                        valueField='name'
                        placeholder='Select the place'
                        onChange={(value) => handleSelection(value)}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-30 p-3 border rounded">
                    <Select 
                        options={numberOfPeople}
                        labelField='id'
                        valueField='value'
                        placeholder='Select Number of people'
                        onChange={(value) => handlePeopleSelection(value)}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-30 p-3 border rounded">
                    <DatePicker 
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-30 p-3 border rounded">
                    <DatePicker 
                        selected={endDate}
                        onChange={handleEndDateChange}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <button className='btn btn-primary' onClick={handleSubmit} type='submit'>Submit</button>
        </form>
        {submissionAttempted && (place === '' || people === '' || startDate === '' || endDate === '') && (
                <p style={{ color: "red" }}>Please Submit all the options</p>
            )}
        </>
    );
};

export default FirstForm;
