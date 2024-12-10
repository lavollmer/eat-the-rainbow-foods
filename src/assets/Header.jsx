import React from "react";
import Carousel from "./Carousel";
import Orange from "./images/orange.jpg";
import Banana from "./images/banana.jpg";
import Avocado from "./images/avocado.jpg";

const Header = () => {
  //creating an array of images
  const images = [Orange, Banana, Avocado];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row p-10">
        <Carousel images={images}/>
      </div>
    </div>
  );
};

export default Header;
