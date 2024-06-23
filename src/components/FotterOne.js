import React from "react";
import apple from "../images/apple.png";
import "./partsStyle.css";

const FotterOne = () => {
  return (
    <div>
      <div className="footerOne">
        <div className="textContainer1">
          <h4 style={{ color: "blue" }}>Go Further With The EasySet24 App</h4>
          <p>
            Enjoy savings on chosen hotels and flights when you book through the<br />
            EasySet24 website. Additionally, earn One Key Cash for every booking <br />
            made through the app.
          </p>
          <h4>Secured By Europe GTP</h4>
        </div>

        <div>
          <div className="playStoreBox">
            <div className="playStore">
              <img src={apple} alt="apple" />
              <img
                className="qrStyle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmryBwKcEkdb7xcYTOM6wc1iXzwh12DW6EsA&usqp=CAU"
                alt="qrCode"
              />
            </div>

            <div className="playStore">
              <img
                className="playStoreStyle"
                src="https://i.blogs.es/09f767/play/1366_521.jpg"
                alt="google"
              />
              {/* <img className="qrStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmryBwKcEkdb7xcYTOM6wc1iXzwh12DW6EsA&usqp=CAU" alt="qrCode" /> */}
            </div>
          </div>
         
        </div>
        <hr />
      </div>
      <div>
        <div className="ListContainer">
          <div className="listStyle">
            
            <ul>
            <li><h6>About Us</h6></li>
              <li>Our Story</li>
              <li>Work with us</li>
              <li>Press & media</li>
              <li>Privacy & Security</li>
            </ul>
          </div>

          <div className="listStyle">
            
            <ul>
                <li><h6>We Offer</h6></li>
              <li>Trip Sponsorship</li>
              <li>Last Minutes Flights</li>
              <li>Best Deals</li>
              <li>AI-Driven Search </li>
            </ul>
          </div>

          <div className="listStyle">
            <ul>
                <li><h6>Headquarters</h6></li>
              <li>Bali Travel Guide</li>
              <li>Sri Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Swiss Travel Guide</li>
            </ul>
          </div>

          <div className="listStyle">
            
            <ul>
                <li><h6>Travel Blogs</h6></li>
              <li>Bali Travel Guide</li>
              <li>Sri Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Swiss Travel Guide</li>
            </ul>
          </div>

          <div className="listStyle">
            <ul>
               <li><h6>Activities</h6></li>
              <li>Bali Travel Guide</li>
              <li>Sri Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Swiss Travel Guide</li>
            </ul>
          </div>
          <ul>
            <li><h6>Services</h6></li>
            <li>Tour Leading</li>
              <li>Cruising & sailing</li>
              <li>Camping </li>
              <li>Kayaking</li>
          </ul>
        </div>
      </div>
      <div className="lastFooterBox">
        <div className="paymentBox">
            <img className="paymentApp" src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png" alt="visa" />
            <img className="paymentApp" src="https://cdn.iconscout.com/icon/free/png-256/free-american-express-6-675747.png?f=webp" alt="americanExpress"/>
            <img className="paymentApp" src="https://beachpackagingdesign.com/wp-content/uploads/2013/02/MarsterCard-early-design.jpg" alt="masterCard"/>
            <img className="paymentApp"  src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Logo.jpg" alt="paypal"/>
        </div>

        <div>
            <img className="socialLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvB6LKGmqNJQvNhEVOkB-kfn8TSfFGkMDWw&usqp=CAU" alt="LinkedIn" />
            <img className="socialLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png" alt="Telegram" />
            <img className="socialLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="Twitter" />
            <img className="socialLogo" src="https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png" alt="fb" />
            {/* <img className="socialLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6EG_3G4-_if1Y7JM1oRjhZgXpXhDSS3OsA&usqp=CAU" alt="instagram" /> */}
        </div>

        <div>
            <p>Email</p>
            <div>
                <input className="lastInput" />
                <button className="inputButton">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FotterOne;
