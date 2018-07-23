import React, { Component } from "react";

import gridUtils from "../utils/GridUtils";

import "../../css/grid.css";

class Grid extends Component {
    render() {
        var numRows = this.props.height;
        var numColumns = this.props.width;
        var dataGrid = this.props.grid || !this.props.grid.length ? this.props.grid : gridUtils.emptyGrid(numRows, numColumns);
        
        var rows = [];

        var row;
        var tile;
        var action;
        for(var i = 0; i < numRows; i++){
            row = [];
            for(var j = 0; j < numColumns; j++){
                tile = <div key={31 * j + i}
                            className={'tile ' + (dataGrid[i][j]? 'black' : 'white')}>
                       </div>
                row.push(tile);
            }
            rows.push(<div key={i} className="grid-row">{row}</div>);
        }

        return <div className="grid">{rows}</div>;
    }
  }

export default Grid;