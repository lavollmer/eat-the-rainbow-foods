import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-10 text-sm bg-blue">
      <div className="flex flex-col">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Support</p>
      </div>
      <div className="flex flex-col font-bold">
        <p>© 2024 Eat The Rainbow Foods Game</p>
      </div>
    </div>
  );
};

export default Footer;
