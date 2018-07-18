import React, { Component } from "react";

import gridUtils from "./GridUtils";
import "../../css/grid.css";

class Grid extends Component {
    render() {
        var dataGrid = this.props.grid;
        var numRows = this.props.rows;
        var numColumns = this.props.columns;

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