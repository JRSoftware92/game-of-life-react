import React, { Component } from "react";

import Tile from "./Tile";
import gridUtils from "../utils/GridUtils";

import "../../css/grid.css";

class Grid extends Component {
    constructor(props){
        super(props);

        if(props.height !== undefined && props.width !== undefined){ 
            this.state = {
                width: props.width,
                height: props.height,
                grid: props.grid ? props.grid : gridUtils.emptyGrid(props.height, props.width)
            }
        }
    }

    render() {
        console.log("Rendering Grid");
        const numheight = this.state.height;
        const numwidth = this.state.width;
        const dataGrid = this.state.grid || !this.state.grid.length ? this.state.grid : gridUtils.emptyGrid(numheight, numwidth);
        
        var rows = [];

        var row;
        var tile;
        for(var i = 0; i < numheight; i++){
            row = [];
            for(var j = 0; j < numwidth; j++){
                tile = <Tile key={31 * i + j } filled={dataGrid[i][j] ? true : false} />;
                row.push(tile);
            }
            rows.push(<div key={i} className="grid-row">{row}</div>);
        }

        return <div className="grid">{rows}</div>;
    }
  }

export default Grid;