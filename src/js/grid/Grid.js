import React, { Component } from "react";

import gridUtils from "./GridUtils";
import "../../css/grid.css";

class Grid extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: props.height,
            width: props.width,
            grid: props.grid ? props.grid : gridUtils.emptyGrid(props.width, props.height)
        }
    }

    render() {
        var dataGrid = this.state.grid;
        var numRows = this.state.rows;
        var numColumns = this.state.columns;

        if(!dataGrid){
            dataGrid = gridUtils.emptyGrid(numRows, numColumns);
        }

        var rows = [];

        var row;
        var tile;
        for(var i = 0; i < numRows; i++){
            row = [];
            for(var j = 0; j < numColumns; j++){
                tile = dataGrid[i][j] ? <div className="tile black"></div> : <div className="tile white"></div>;
                row.push(tile);
            }
            rows.push(<div className="grid-row">{row}</div>);
        }

        return <div className="grid">{rows}</div>;
    }
  }

export default Grid;