import React, { Component } from "react";

import GridContainer from "../containers/GridContainer"
import GridControlsContainer from "../containers/GridControlsContainer"
import RuleControlsContainer from "../containers/RuleControlsContainer"

class Game extends Component {
    render() {
      return (
        <div id="game-content">
          <GridContainer/>
          <GridControlsContainer/>
          <RuleControlsContainer/>
        </div>
      );
    }
  }

export default Game;