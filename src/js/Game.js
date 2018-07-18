import React, { Component } from "react";

import Grid from "./grid/Grid";
import gridUtils from "./grid/GridUtils"

class Game extends Component {
    render() {
      return (
        <div id="game-content">
          <Grid rows="4" columns="4" grid={gridUtils.randomGrid(4, 4)}>
          </Grid>
        </div>
      );
    }
  }

  export default Game;