import "./App.css";
import React from "react";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Learn from "./assets/LearnBenefits"

function App() {
  return (
    <>
      <div>
        <h1>Eat the Rainbow Foods Game</h1>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Learn/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
