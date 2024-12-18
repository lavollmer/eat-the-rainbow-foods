import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Learn from "./assets/LearnBenefits";
import Play from "./assets/PlayTheGame";
import Scoreboard from "./assets/Scoreboard";
import About from "./assets/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
