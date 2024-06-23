import React from "react";
import { useState } from "react";
import HeadBarOne from "../components/HeadBarOne";
import { Container, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./pageStyles.css";
import loginImage from "../images/LoginImage.png";
import fbIcon from '../images/FaceBookIcon.png'
import GoogleIcon from '../images/GoogleButton.png'
import Apple from '../images/AppleButton.png'

const userMail = "nikhilambati02@gmail.com";
const userPassword = "nikhil#0205";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    if (email === "" && passWord === "") {
      setEmailError("Please Enter email");
      setPasswordError("Please enter correct password");
    } else if (email !== userMail) {
      setEmailError("Invalid email");
    } else if (passWord !== userPassword) {
      setPasswordError("Invalid password");
    } else {
      navigate("/");
    }
  };
  return (
    <div>
      <HeadBarOne />

      <div className="loginContainer">
       
      
        <img style={{ margin: "25px" }} src={loginImage} alt="log" />

        <div>
          <div>
            <TextField
              style={{
                width: "500px",
                margin: "15px",
                backgroundColor: "white",
                color : "red"
              }}
              type="text"
              label="Registered Email"
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />{" "}
            <br />
            <TextField
              style={{
                width: "500px",
                margin: "15px",
                backgroundColor: "white",
              }}
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
            />
            <br />
            <Button
              style={{ width: "500px", margin: "15px" }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
          <div className="loginBottom">
            <h4>or</h4>
            <div className="socialIcons">
                <img src={fbIcon} alt="SocialMediaIcon"/>
                <img src={Apple} alt="SocialMediaIcon"/>
                <img src={GoogleIcon} alt="SocialMediaIcon"/>
            </div>
            <p>"Don't have an account in EasySet24 yet?  <Link to="/signIn">Register !</Link></p>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default LoginPage;
