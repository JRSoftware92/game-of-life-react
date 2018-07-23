import React, { Component } from "react";

import Tile from "./Tile";
import gridUtils from "../utils/GridUtils";

import "../../css/grid.css";

class Grid extends Component {
    render() {
        console.log("Rendering Grid");
        const numRows = this.props.height;
        const numColumns = this.props.width;
        const dataGrid = this.props.grid || !this.props.grid.length ? this.props.grid : gridUtils.emptyGrid(numRows, numColumns);
        
        var rows = [];

        var row;
        var tile;
        for(var i = 0; i < numRows; i++){
            row = [];
            for(var j = 0; j < numColumns; j++){
                tile = <Tile key={31 * i + j } filled={dataGrid[i][j] ? true : false} />;
                row.push(tile);
            }
            rows.push(<div key={i} className="grid-row">{row}</div>);
        }

        return <div className="grid">{rows}</div>;
    }
  }

export default Grid;