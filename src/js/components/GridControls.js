import React, { Component } from "react";

import "../../css/grid.css";

class GridControls extends Component {
    constructor(props){
        super(props);

        if(props.width !== undefined && props.height !== undefined){
            this.state = {
                width: props.width,
                height: props.height,
                density: props.density,
                grid: props.grid,
                rules: props.rules
            }
        }

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleDensityChange = this.handleDensityChange.bind(this);

        this.onRunClicked = this.onRunClicked.bind(this);
        this.onRandomizeClicked = this.onRandomizeClicked.bind(this);        
        this.onClearClicked = this.onClearClicked.bind(this);
    }

    handleDensityChange(e){
        this.setState({
            height: this.state.height,
            width: this.state.width,
            density: parseInt(e.target.value),
            grid: this.state.grid,
            rules: this.state.rules
        }) 
    }

    handleHeightChange(e){
        this.setState({
            height: parseInt(e.target.value),
            width: this.state.width,
            density: this.state.density,
            grid: this.state.grid,
            rules: this.state.rules
        })
    }

    handleWidthChange(e){
        this.setState({
            height: this.state.height,
            width: parseInt(e.target.value),
            density: this.state.density,
            grid: this.state.grid,
            rules: this.state.rules
        })
    }

    onRunClicked(e){
        this.props.actions.runLifeIteration()
    }

    onRandomizeClicked(e){
        this.props.actions.randomizeGrid(this.state.height, this.state.width, this.state.density)
    }

    onClearClicked(e){
        this.props.actions.clearGrid(this.state.height, this.state.width)
    }

    render() {
        return (
            <div className="grid-controls">
                <div className="grid-size">
                    <label>Height</label>
                    <input id="grid-height" type="text" size="2" value={this.state.height} onChange={ this.handleHeightChange }/>
                    <label>Width</label>
                    <input id="grid-width" type="text" size="2" value={this.state.width} onChange={ this.handleWidthChange }/>
                    <label>Random Density (%)</label>
                    <input id="grid-density" type="text" size="3" value={this.state.density} onChange={ this.handleDensityChange }/>
                </div> 
                <div className="grid-buttons">
                    <button id="run" onClick={this.onRunClicked}>Run</button>
                    <button id="random" onClick={this.onRandomizeClicked}>Randomize</button>
                    <button id="clear" onClick={this.onClearClicked}>Clear</button>
                </div>
            </div>
        );
    }
  }

export default GridControls;