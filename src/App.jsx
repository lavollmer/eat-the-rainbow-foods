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
        <h1 className="text-blue">Eat the Rainbow Foods Game</h1>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Learn />
      </div>
      <div>
        <Play />
      </div>
      <div>
        <Scoreboard />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
