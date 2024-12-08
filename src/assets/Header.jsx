import React from 'react'
import Carousel from './Carousel'
import Orange from "./images/orange.jpg";

const Header = () => {
  const images = [Orange];

  return (
    <div>
        <h1>Food Slideshow</h1>
        <Carousel images={image}/>
    </div>
  )
}

export default Header