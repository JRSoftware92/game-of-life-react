import React, { Component } from "react";

import { connect } from "react-redux";

import Grid from "./Grid";
import GridControls from "./GridControls";
import gridUtils from "./GridUtils";
import gridActions from "./GridActions";

class GridContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            gridHeight: props.gridHeight,
            gridWidth: props.gridWidth,
            grid: props.grid ? props.grid : gridUtils.emptyGrid(props.gridWidth, props.gridHeight)
        }

        this.clearGrid = this.clearGrid.bind(this);
        this.randomizeGrid = this.randomizeGrid.bind(this);
    }

    clearGrid() {
        this.setState({
            gridHeight: this.state.gridHeight,
            gridWidth: this.state.gridWidth,
            grid: gridUtils.emptyGrid(this.state.gridHeight, this.state.gridWidth)
        });
    }

    randomizeGrid() {
        this.setState({
            gridHeight: this.state.gridHeight,
            gridWidth: this.state.gridWidth,
            grid: gridUtils.randomGrid(this.state.gridHeight, this.state.gridWidth)
        });
    }

    render() {
      return (
        <div id="grid-container">
          <Grid rows={this.state.gridWidth} columns={this.state.gridHeight} grid={this.state.grid} />
          <GridControls gridWidth={this.state.gridWidth} gridHeight={this.state.gridHeight} 
                        onRandomizeClick={this.randomizeGrid} onClearClick={this.clearGrid}/>
        </div>
      );
    }
}

// Map Redux state to component props
const mapStateToProps = function mapStateToProps(state) {
    return {
      height: state.gridHeight,
      width: state.gridWidth,
      grid: state.grid
    };
}

// Map Redux actions to component props
const mapDispatchToProps = function(dispatch) {
    return {
      randomizeGrid: function() {
        return dispatch(gridActions.randomizeGrid);
      },
      clearGrid: function() {
        return dispatch(gridActions.clearGrid);
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);