import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/main.scss';
import GameBoard from "./GameBoard";
import GameSettings from "./GameSettings";
import GameControls from "./GameControls";

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    };

  }


  render() {
    return (

      <>

        <GameBoard></GameBoard>
        <GameControls></GameControls>
        <GameSettings></GameSettings>

      </>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
                            <Provider store={store}>
                              <App />
                            </Provider>, wrapper) : false;