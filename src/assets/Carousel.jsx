import React from "react";
//importing useState from react
import { useState } from "react";

const Carousel = ({ images }) => {
  //using useState to se the index of the image and starting at 0
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden w-96 h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-lg"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="abssolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
