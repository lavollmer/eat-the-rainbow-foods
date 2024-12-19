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

function App() {
  return (
    <>
      <div className="bg-mint-cream min-h-screen font-roboto">
        <div className="flex flex-row justify-center items-center space-x-4">
          <img src={Logo} alt="logo" className="h-80 w-80" />
        </div>
        {/* <BrowserRouter>
          <nav className="flex flex-row justify-center items-center space-x-4">
            <div>
              <img src={Logo} alt="logo" className="h-20" />
            </div>
            <div className="flex flex-row space-x-4 font-bold">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/play">Play</Link>
              <Link to="/game">Game</Link>
              <Link to="/learn">Learn</Link>
              <Link to="/scoreboard">Scoreboard</Link>
              <Link to="/support">Support</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="/game" element={<Game />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/support" element={<Support />} />
          </Routes>
          <div className="m-10">
            <Footer />
          </div>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
