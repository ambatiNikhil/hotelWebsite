import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import signInImg from "../images/LoginImage.png"
import { Link, useNavigate } from "react-router-dom";
import HeadBarOne from "../components/HeadBarOne";

import fbIcon from '../images/FaceBookIcon.png'
import GoogleIcon from '../images/GoogleButton.png'
import Apple from '../images/AppleButton.png'

const SignUpPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, cell, password, confirmPassword } = formData;
    if (firstName && lastName && email && cell && password && confirmPassword && password === confirmPassword) {
      setFormData({
        firstName: "",
    lastName: "",
    email: "",
    cell: "",
    password: "",
    confirmPassword: "",
      })
      setSuccessMessage("Registration successfully completed");
      
    } else {
      setSuccessMessage("Please fill all fields correctly.");
    }
  };

  const handleBack = () => {
    navigate('/login')
  }
  return (
    <div>
        <HeadBarOne />
    <div className="SignInContainer">
      <img src={signInImg} alt="signInImage" />

      <Container>
        <div>
          <TextField
            style={{ width: "200px", margin: "15px", backgroundColor: "white" }}
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <TextField
            style={{ width: "200px", margin: "15px", backgroundColor: "white" }}
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <TextField
          style={{ width: "500px", margin: "15px", backgroundColor: "white" }}
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "15px", backgroundColor: "white" }}
          label="Cell"
          type="phone"
          name="cell"
          value={formData.cell}
          onChange={handleChange}
        />{" "}
        <br />
        <TextField
          style={{ width: "500px", margin: "15px", backgroundColor: "white" }}
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "15px", backgroundColor: "white" }}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <Button
          style={{ width: "500px", margin: "15px" }}
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Register Now
        </Button>
        <br />
        <h6>Already have a Account then <Link to='/login'>Login</Link></h6>
        {/* <Button
          style={{ width: "500px", margin: "15px" }}
          variant="contained"
          color="secondary"
          onClick={handleBack}
        >
          Go Back
        </Button>  */}
        {successMessage && (
          <Typography style={{ marginTop: "15px", color: "green" }}>
            {successMessage}
          </Typography>
        )}
      </Container>

      {/* <div className="loginBottom">
            <h4>or</h4>
            <div className="socialIcons">
                <img src={fbIcon} alt="SocialMediaIcon"/>
                <img src={Apple} alt="SocialMediaIcon"/>
                <img src={GoogleIcon} alt="SocialMediaIcon"/>
            </div>
    </div> */}

    </div> 

   

    </div>
  );
};

export default SignUpPage;
