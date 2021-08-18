import React from 'react';
import { Container } from '@material-ui/core';

import gridUtils from '../../utils/GridUtils/GridUtils';
import Tile from './children/Tile';

import './Grid.css';

const Grid = ({
    toggleTile,
    height: numRows,
    width: numColumns,
    grid,
}) => {
    const dataGrid = (!grid || !grid.length) ? gridUtils.emptyGrid(numRows, numColumns) : grid;

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
                    onTileClicked={toggleTile}
                />
            );
        }
        rows.push(<div key={i} className="grid-row">{row}</div>);
    }

    return (
        <Container className="grid-wrapper" maxWidth="md" disableGutters>
            <div className="grid">{rows}</div>
        </Container>
    );
};

export default Grid;