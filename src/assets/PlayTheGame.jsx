import React from "react";

const PlayTheGame = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-20">
      <h1 className="font-bold">How to Play</h1>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Game Instructions</h1>
        <ul className="flex flex-col ">
          <li>Step 1: Select the Color of Food you Ate </li>
          <li>Step 2: Document for the day</li>
          <li>Step 3: Win the game by eating every color during the day</li>
          <li>Step 4: If you want to challenge yourself, there are different options</li>
        </ul>
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
