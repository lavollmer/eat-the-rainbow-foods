import React from "react";
import Header from "./Header";

const PlayTheGame = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-20">
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Game Instructions</h1>
        <p>Instructions</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Game Interface</h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Watch How to Play</h1>
      </div>
    </div>
  );
};

export default PlayTheGame;
