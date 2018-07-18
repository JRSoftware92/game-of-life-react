import React, { Component } from "react";

import "../../css/grid.css";

class GridControls extends Component {
    constructor(props){
        super(props);

        this.state = {
            gridWidth: props.gridHeight,
            gridHeight: props.gridWidth,
        }

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.onRandomizeClick = props.onRandomizeClick;
        this.onClearClick = props.onClearClick;
    }

    handleHeightChange(e){
        this.setState({
            gridHeight: e.target.value,
            gridWidth: this.state.gridWidth
        })
    }

    handleWidthChange(e){
        this.setState({
            gridHeight: this.state.gridHeight,
            gridWidth: e.target.value
        })
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
                    <button id="random" onClick={this.onRandomizeClick}>Randomize</button>
                    <button id="clear" onClick={this.onClearClick}>Clear</button>
                </div>
            </div>
        );
    }
  }

export default GridControls;