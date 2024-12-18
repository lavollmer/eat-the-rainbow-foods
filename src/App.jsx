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

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/play">Play</Link>
          <Link to="/gamelevels">Game Levels</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/scoreboard">Scoreboard</Link>
          <Link to="/support">Support</Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/gamelevels" element={<GameLevels />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
      <div className="flex flex-col p-6">
        <div>
          <h1 className="flex flex-row items-center justify-center text-lg pt-10">
            Eat the Rainbow Foods Game
          </h1>
        </div>
        <div className="flex flex-row">
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
      </div>
    </>
  );
}

export default App;
