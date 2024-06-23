import React from "react";
import FirstForm from "../components/FirstForm";
import HeadBarTwo from "../components/HeadBarTwo";
import discounts from "../images/discounts.png";
import earlyBooking from "../images/EarylDiscountBooking.png";
import lastMinuteDeals from "../images/LastMinuteDeals.png";
import familyPackages from "../images/familyPackages.png";
import anniversary from "../images/anniversayGifts.png";
import referProgram from "../images/RefererPrograms.png";
import rightPhoto from "../images/Photo Right.png";
import leftPhoto from "../images/Photo Left.png";
import banner1 from "../images/Banner1.png";
import banner2 from "../images/Banner2.png";
import banner3 from "../images/Banner3.png";
import FotterOne from "../components/FotterOne";

const HomePage = () => {
  return (
    <>
      <HeadBarTwo />
      <div className="bannerContainer">
        <div className="homeBanner"></div>
        <div className="homeBanner2">
          <div className="place hyd">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTW-ZLBNIGwvaM593ZJnpn5-xUxjyWJ9CbA&usqp=CAU"
              alt="hyderabad"
            />
            <h3>Hyderabad</h3>
          </div>

          <div className="place chennai">
            <img
              src="https://www.thomascook.in/blog/wp-content/uploads/2019/05/img-7-e1531194581524.jpg"
              alt="chennai"
            />
            <h3>Chennai</h3>
          </div>

          <div className="place delhi">
            <img
              src="https://www.holidify.com/images/bgImages/DELHI.jpg"
              alt="Delhi"
            />
            <h3>Delhi</h3>
          </div>

          <div className="place blr">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=300&h=300&s=1"
              alt="Kerela"
            />
            <h3>kerala</h3>
          </div>
        </div>

        <div className="homeBanner3">
          <h3>Special Offers</h3>

          <div className="container">
            <img src={discounts} alt="discount" className="smImage" />
            <img src={earlyBooking} alt="early" className="lgImage" />
            <img src={lastMinuteDeals} alt="lastMinute" className="smImage" />
          </div>

          <div className="container">
            <img src={familyPackages} alt="family" className="smImage" />
            <img src={anniversary} alt="anniversary" className="lgImage" />
            <img src={referProgram} alt="refer" className="smImage" />
          </div>
        </div>

        <div className="homeBanner4">
          <h3>Make A Comparison</h3>
          <div className="bannerBox">
            <img src={rightPhoto} alt="right" />
            <img src={leftPhoto} alt="left" />
          </div>
        </div>

        <div className="homeBanner5">
          <div className="experienceCard">
            <img
              src="https://c8.alamy.com/comp/GK7RMW/foreign-business-men-GK7RMW.jpg"
              alt="user"
            />
            <h6>James</h6>
            <p>
              Returning to this hotel is always a delight – their loyalty
              program showers us with exclusive discounts and amazing perks!
            </p>
          </div>

          <div className="experienceCard">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxPte2EVW8ygr3KkDUw9i-bD69-B0T6iBfg&usqp=CAU"
              alt="user"
            />
            <h6>Melisa </h6>
            <p>
              Accessing EasySet24 extraordinary special offers makes always our
              journey even more unforgettable.
            </p>
          </div>

          <div className="experienceCard">
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-man-outdoors-with-beanie_23-2149256267.jpg"
              alt="user"
            />
            <h6>John</h6>
            <p>
              Weekends here are pure bliss with their carefully crafted
              packages, and the extended stay discounts make relaxation even
              more enticing.
            </p>
          </div>
        </div>

        <div className="homeBanner6">
          <div className="bannerDiv">
            <img className="bannerImage1" src={banner1} alt="banner" />
            <img className="bannerImage1" src={banner2} alt="banner" />
          </div>

          <div className="bannerDiv">
            <img className="bannerImage" src={banner3} alt="banner" />
            <img className="bannerImage" src="https://quaysidehotel.co.uk/wp-content/uploads/2022/09/Benefits-to-booking-a-room-directly-with-a-hotel-over-a-third-party-travel-site.jpg" alt="banner" />
            
          </div>
        </div>

        <FotterOne />
      </div>
    </>
  );
};

export default HomePage;
