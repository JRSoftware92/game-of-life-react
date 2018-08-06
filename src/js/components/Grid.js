import React, { Component } from "react";

import gridUtils from "../utils/GridUtils";
import Tile from "../components/Tile"

import "../../css/grid.css";

class Grid extends Component {
    constructor(props){
        super(props);

        this.handleTileClick = this.handleTileClick.bind(this);
    }

    handleTileClick(x, y){
        this.props.actions.toggleTile(x, y)
    }

    render() {
        var numRows = this.props.height;
        var numColumns = this.props.width;
        var dataGrid = this.props.grid || !this.props.grid.length ? this.props.grid : gridUtils.emptyGrid(numRows, numColumns);
        
        var rows = [];

        var row;
        var tile;
        for(var i = 0; i < numRows; i++){
            row = [];
            for(var j = 0; j < numColumns; j++){
                tile = <Tile key={31 * j + i} x={j} y={i}
                            filled={dataGrid[i][j] ? true : false}
                            onTileClicked={this.handleTileClick}/>
                row.push(tile);
            }
            rows.push(<div key={i} className="grid-row">{row}</div>);
        }

        return <div className="grid">{rows}</div>;
    }
  }

export default Grid;