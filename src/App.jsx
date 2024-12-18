import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Learn from "./assets/LearnBenefits";
import Play from "./assets/PlayTheGame";
import Scoreboard from "./assets/Scoreboard";
import About from "./assets/About";
import GameLevels from "./assets/GameLevels";
import Support from "./assets/Support";
import Home from "./assets/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex flex-row justify-center items-center space-x-4 m-10">
          <div>
            <h1>Eat the Rainbow Game</h1>
          </div>
          <div className="flex flex-row space-x-4 font-bold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/play">Play</Link>
            <Link to="/gamelevels">Game Levels</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/scoreboard">Scoreboard</Link>
            <Link to="/support">Support</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/gamelevels" element={<GameLevels />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <div className="m-10">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
