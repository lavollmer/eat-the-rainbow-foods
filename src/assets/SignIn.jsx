import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signin = () => {
  //create state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //prevent page from reloading
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      });
      //set cookie
      Cookies.set("token", response.data.jwt);
      //navigate to admin page
      navigate("/admin");
    } catch (error) {
      alert("Sign in failed. Please try again.");
    }
  };

  return <div>Signin</div>;
};

export default Signin;
