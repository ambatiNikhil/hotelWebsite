import React, { useState } from 'react';
import json from '../db.json';
import HotelCard from './HotelCard';
import Select from 'react-dropdown-select';
import HeadBarThree from '../components/HeadBarThree';
import { useCart } from 'react-use-cart';

export const selectedHotels = [];

const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(json);
  const [place, setPlace] = useState('');
  const [range, setRange] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = json.length/5;

  const { addItem } = useCart();

  const places = [
    { id: 'hyderabad', name: 'Hyderabad' },
    { id: 'chennai', name: 'Chennai' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'kerala', name: 'Kerala' }
  ];

  const prices = [
    { id: '4500', value: '4500' },
    { id: '5000', value: '5000' },
    { id: '6000', value: '6000' },
    { id: '7000', value: '7000' },
    { id: '27000', value: '2700' }
  ];

  const handleHotelSelection = (id) => {
    console.log('Selected hotel id:', id);
    alert(`you added a hotel to whish list`)
    addItem(json[id]);
  };

  const handleSelection = (value) => {
    if (value.length > 0) {
      const selectedPlace = value[0].name;
      setPlace(selectedPlace);
      const locationHotels = json.filter((item) => item.location === selectedPlace);
      setFilteredHotels(locationHotels);
      setCurrentPage(1); // Reset to first page on filter change
    } else {
      setFilteredHotels(json);
      setCurrentPage(1); // Reset to first page if no selection
    }
  };

  const handleRange = (value) => {
    if (value.length > 0) {
      const selectedRange = value[0].value;
      setRange(selectedRange);
      const rangeHotels = json.filter((item) => item.price <= parseInt(selectedRange));
      setFilteredHotels(rangeHotels);
      setCurrentPage(1); // Reset to first page on filter change
    } else {
      setFilteredHotels(json);
      setCurrentPage(1); // Reset to first page if no selection
    }
    console.log(value[0]);
  };

  // Pagination Logic
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeadBarThree />
      <div>
        <div className='hotelsPageStyle'>
          <div className='d-flex justify-content-center align-items-center' style={{ border: '2px solid brown', width: '90%' }}>
            <div className="d-flex justify-content-center">
              <div className="w-30 p-3 border rounded">
                <Select 
                  options={places}
                  labelField='name'
                  valueField='id'
                  placeholder='Select the place'
                  onChange={handleSelection}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-30 p-3 border rounded">
                <Select 
                  options={prices}
                  labelField='value'
                  valueField='id'
                  placeholder='Select the range'
                  onChange={handleRange}
                />
              </div>
            </div>
          </div>
          {currentHotels.map((item) => (
            <HotelCard
              key={item.id}
              data={item}
              onSelect={handleHotelSelection}
            />
          ))}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''} paginationButton`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
