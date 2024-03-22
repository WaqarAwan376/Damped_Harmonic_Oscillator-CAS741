import "./App.css";
import React from "react";

import { Header } from "./components/Header";
import { SimulatorScreen } from "./components/SimulatorScreen";

function App() {
  return (
    <div>
      <Header />

      <SimulatorScreen />
    </div>
  );
}

export default App;
