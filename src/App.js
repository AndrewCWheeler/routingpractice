import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import WordNum from "./components/WordNum";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <WordNum path="/:wordnum" />
        <Color path="/:word/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
