import React from "react";

export const Header = () => {
  return (
    <header className="bg-userPrimary text-white flex items-center">
      <div>
        <img src="/Images/logo.png" alt="" width={75} height={75} />
      </div>
      <div className="font-bold">Harmonic Oscillator Simulator</div>
    </header>
  );
};
