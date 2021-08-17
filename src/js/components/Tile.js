import React from 'react';
import '../../css/grid.css';

const Tile = ({ filled, x, y, onTileClicked }) => (
    <div
        className={'tile ' + (filled ? 'black' : 'white')}
        onClick={() => onTileClicked(x, y)}>
    </div>
);

export default Tile;
