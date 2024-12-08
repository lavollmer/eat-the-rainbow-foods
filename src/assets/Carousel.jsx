import React from 'react'
//importing useState from react
import {useState} from 'react'
import Orange from "./images/orange.jpg";

const Carousel = () => {
  //using useState to se the index of the image and starting at 0
  const [index, setIndex] = useState(0);

  //creating an array of images
  const images = [Orange];

  const nextSlide = () => {
    //if index is less than the length of the images array, increment the index by 1
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      //if index is equal to the length of the images array, set the index to 0
      setIndex(0);
    }
  }

  const prevSlide = () => {
    //if index is greater than 0, decrement the index by 1
    if (index > 0) {
      setIndex(index - 1);
    } else {
      //if index is equal to 0, set the index to the length of the images array - 1
      setIndex(images.length - 1);
    }


  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className='overflow-hidden relative h-64'>
        {images.map((images, imageIndex) => {
        <div></div>
        )}
      </div>
    </div>
  )
}

export default Carousel;