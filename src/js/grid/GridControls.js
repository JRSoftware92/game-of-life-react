import React, { Component } from "react";

import gridActions from "./GridActions";
import "../../css/grid.css";

class GridControls extends Component {
    constructor(){
        super();

        this.state = {
            gridWidth: 4,
            gridHeight: 4
        }
    }

    handleHeightChange(e){
        this.setState({
            height: e.target.value,
            width: this.state.gridWidth
        })
    }

    handleWidthChange(e){
        this.setState({
            height: this.state.gridHeight,
            width: e.target.value
        })
    }

    randomize(){
        var action = gridActions.randomizeGrid(this.state.gridHeight, this.state.gridWidth);
    }

    render() {
        return (
            <div className="grid-controls">
                <div className="grid-size">
                    <label>Height</label>
                    <input id="grid-height" type="text" size="2" value={this.state.gridHeight} onChange={ this.handleHeightChange }/>

                    <label>Width</label>
                    <input id="grid-width" type="text" size="2" value={this.state.gridWidth} onChange={ this.handleWidthChange }/>
                </div> 
                <div className="grid-buttons">
                    <button id="random">Randomize</button>
                </div>
            </div>
        );
    }
  }

export default GridControls;