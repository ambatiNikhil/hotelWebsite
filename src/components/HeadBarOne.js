import React from "react";
import "./partsStyle.css";
import Logo from "../images/headLogo.png";
import England from "../images/England.png";
import markButton from "../images/markButton.png";

const HeadBarOne = () => {
  return (
    <>
      <div className="mainHeadBarOne">
        <div>
          <img src={Logo} alt="logo" />
        </div> 
        <div>
          <img src={England} alt="England" />
          <img src={markButton} alt="IconButton" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default HeadBarOne;
