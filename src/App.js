import React from "react";

import Header from "./components/Header/Header";
import Estado from './containers/Estado/Estado';
import Capital from './containers/Capital/Capital';
import Clima from './containers/Clima/Clima';

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Estado />
      <Capital />
      <Clima />
    </div>
  );
}

export default App;
