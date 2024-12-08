import React from "react";
import Carousel from "./Carousel";
import Orange from "./images/orange.jpg";

const Header = () => {
  //creating an array of images
  const images = [Orange];

  return (
    <div>
      <h1>Food Slideshow</h1>
      <div>
        <Carousel images={images}/>
      </div>
    </div>
  );
};

export default Header;
