import React from 'react';

import gridUtils from '../../utils/GridUtils';
import Tile from './children/Tile';

import './Grid.css';

const Grid = ({
    actions: { toggleTile },
    height: numRows,
    width: numColumns,
    grid,
              }) => {
    const dataGrid = grid || !grid.length ? grid : gridUtils.emptyGrid(numRows, numColumns);

    const rows = [];
    for(let i = 0; i < numRows; i++){
        const row = [];
        for(let j = 0; j < numColumns; j++){
            row.push(
                <Tile
                    key={`tile-${i}-${j}`}
                    x={j}
                    y={i}
                    filled={dataGrid[i][j]}
                    onTileClicked={(x, y) => toggleTile(x, y)}
                />
            );
        }
        rows.push(<div key={i} className="grid-row">{row}</div>);
    }

    return (
        <div className="grid-wrapper">
            <div className="grid">{rows}</div>
        </div>
    );
};

export default Grid;