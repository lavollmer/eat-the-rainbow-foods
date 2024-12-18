import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">
          The Easiest Game to Track Healthy Food Eating
        </h1>
        <p className="pt-10">
          A great game that helps you eat better, by gamifying your health.
        </p>
      </div>
      <Header />
    </div>
  );
};

export default Home;
