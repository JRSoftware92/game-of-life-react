import React, { Component } from "react";

import GridContainer from "./grid/GridContainer";

class Game extends Component {
    render() {
      return (
        <div id="game-content">
          <GridContainer></GridContainer>
        </div>
      );
    }
  }

export default Game;