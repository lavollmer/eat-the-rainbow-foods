import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signin = () => {
  //create state for email and password where inputs are blank
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useNavigate hook to navigate to admin page
  const navigate = useNavigate();

  //handle form submission
  const handleSubmit = async (e) => {
    //prevent page from reloading
    e.preventDefault();
    try {
      //sends a POST request to the /api/login endpoint with the email and password
      const response = await axios.post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      });
      //set cookie
      Cookies.set("token", response.data.jwt);
      //navigate to admin page
      navigate("/");
    } catch (error) {
      alert("Sign in failed. Please try again.");
    }
  };

  return <div>
    <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <input/>
    </form>
  </div>;
};

export default Signin;
