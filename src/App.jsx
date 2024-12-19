import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./assets/Footer";
import Learn from "./assets/LearnBenefits";
import Play from "./assets/PlayTheGame";
import Scoreboard from "./assets/Scoreboard";
import About from "./assets/About";
import Support from "./assets/Support";
import Home from "./assets/Home";
import Game from "./assets/Game";
import Logo from "./assets/images/logobgremove.png";
import EatButton from "./assets/images/eatbutton.png";

function App() {
  const handleOnClick = () => {
    window.location.href = "/play";
  };

  return (
    <>
      <div className="bg-mint-cream min-h-screen font-roboto">
        <div className="flex flex-row justify-center items-center space-x-4">
          <img src={Logo} alt="logo" className="h-80 w-80" />
        </div>
        <div>
          <h1 className="flex flex-col items-center justify-center">
            Eat healthy and track your progress
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          <button
            onClick={handleOnClick}
            className="flex flex-col items-center justify-center outline-4 outline-black"
          >
            <img
              src={EatButton}
              alt="Play Eat The Rainbow Game"
              className="h-20 h-40 md:h-40 md:h-60 rounded-lg"
            />
          </button>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="/game" element={<Game />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
