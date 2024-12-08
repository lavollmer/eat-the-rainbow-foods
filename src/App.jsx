import "./App.css";
import React from "react";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Learn from "./assets/LearnBenefits";
import Play from "./assets/PlayTheGame";
import Scoreboard from "./assets/Scoreboard";

function App() {
  return (
    <>
      <div>
        <h1 className="flex flex-row items-center justify-center text-lg">Eat the Rainbow Foods Game</h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Header />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Learn />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Play />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Scoreboard />
      </div>
      <div className="flex flex-row items-center justify-center pt-10">
        <Footer />
      </div>
    </>
  );
}

export default App;
