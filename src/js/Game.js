import React, { Component } from "react";

import GridContainer from "./grid/GridContainer";

class Game extends Component {
    render() {
      return (
        <div id="game-content">
          <GridContainer gridWidth="4" gridHeight="4" />
        </div>
      );
    }
  }

export default Game;