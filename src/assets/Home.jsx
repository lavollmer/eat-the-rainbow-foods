import React from "react";
import Header from "./Header";

const Home = () => {
  const handleOnClick = () => {
    window.location.href = "/play";
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="font-bold text-3xl">
          The Easiest Game to Track Healthy Food Eating
        </h1>
        <p className="pt-10">
          A great game that helps you eat better, by gamifying your health.
        </p>
      </div>
      <div className="flex justify-center pt-10">
        <button onClick={handleOnClick} className="bg-black text-white rounded-lg px-4 py-4 hover:bg-grey hover:outline-green">
          Get Started Today!
        </button>
      </div>
      <Header />
    </div>
  );
};

export default Home;
