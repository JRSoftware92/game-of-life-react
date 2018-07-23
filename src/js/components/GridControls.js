import React, { Component } from "react";

import "../../css/grid.css";

class GridControls extends Component {
    constructor(props){
        super(props);

        if(props.width !== undefined && props.height !== undefined){
            this.state = {
                width: props.width,
                height: props.height,
                grid: props.grid
            }
        }

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.onRandomizeClicked = this.onRandomizeClicked.bind(this);        
        this.onClearClicked = this.onClearClicked.bind(this);
    }

    handleHeightChange(e){
        this.setState({
            height: parseInt(e.target.value),
            width: this.state.width,
            grid: this.state.grid
        })
    }

    handleWidthChange(e){
        this.setState({
            height: this.state.height,
            width: parseInt(e.target.value),
            grid: this.state.grid
        })
    }

    onRandomizeClicked(e){
        this.props.actions.randomizeGrid(this.state.width, this.state.height)
    }

    onClearClicked(e){
        this.props.actions.clearGrid(this.state.width, this.state.height)
    }

    render() {
        return (
            <div className="grid-controls">
                <div className="grid-size">
                    <label>Height</label>
                    <input id="grid-height" type="text" size="2" value={this.state.height} onChange={ this.handleHeightChange }/>

                    <label>Width</label>
                    <input id="grid-width" type="text" size="2" value={this.state.width} onChange={ this.handleWidthChange }/>
                </div> 
                <div className="grid-buttons">
                    <button id="random" onClick={this.onRandomizeClicked}>Randomize</button>
                    <button id="clear" onClick={this.onClearClicked}>Clear</button>
                </div>
            </div>
        );
    }
  }

export default GridControls