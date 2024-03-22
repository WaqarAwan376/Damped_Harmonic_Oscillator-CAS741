import "./App.css";
import React from "react";

import { Header } from "./components/Header";
import { UI } from "./components/SimulatorScreen";

function App() {
  return (
    <div>
      <Header />

      <UI></UI>
    </div>
  );
}

export default App;
