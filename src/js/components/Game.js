import React, { Component } from "react";

import GridContainer from "../containers/GridContainer"
import GridControlsContainer from "../containers/GridControlsContainer"

class Game extends Component {
    render() {
      return (
        <div id="game-content">
          <GridContainer/>
          <GridControlsContainer/>
        </div>
      );
    }
  }

export default Game;