import React from 'react'
//importing useState from react
import {useState} from 'react'
import Orange from "./images/orange.jpg";

const Carousel = () => {
  //using useState to se the index of the image and starting at 0
  const [index, setIndex] = useState(0);

  //creating an array of images
  const images = [Orange];


  return (
    <div>Carousel</div>
  )
}

export default Carousel