import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-20">
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Our Story</h1>
        <p>This is our story.</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Meet the Creator</h1>
        <p>Bio</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Our Mission</h1>
        <p>Mission</p>
      </div>
    </div>
  );
};

export default About;
