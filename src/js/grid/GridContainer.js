import React, { Component } from "react";

import { connect } from "react-redux";

import Grid from "./Grid";
import GridControls from "./GridControls";
import gridUtils from "./GridUtils"

class GridContainer extends Component {
    render() {
      return (
        <div id="grid-container">
          <Grid rows="4" columns="4" grid={gridUtils.randomGrid(4, 4)}></Grid>
          <GridControls></GridControls>
        </div>
      );
    }
  }

export default GridContainer;