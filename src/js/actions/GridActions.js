export const RANDOM = 'RANDOM';
export const CLEAR = 'CLEAR';
export const TOGGLE_TILE = 'TOGGLE_TILE';
export const START = 'START';
export const STOP = 'STOP';
export const NEXT = 'NEXT';
export const SELECT_RULE = 'SELECT_RULE';

export const randomizeGrid = (numRows, numColumns, density) => ({
    type: RANDOM,
    height: numRows,
    width: numColumns,
    density: density,
});

export const clearGrid = (numRows, numColumns) => ({
    type: CLEAR,
    height: numRows,
    width: numColumns,
});

export const toggleTile = (x, y) => ({
    type: TOGGLE_TILE,
    x: x,
    y: y
});

export const startRunningLife = () => ({ type: START });

export const stopRunningLife = () => ({ type: STOP });

export const runLifeIteration = () => ({ type: NEXT });

export const selectRule = (selectedRule) => ({type: SELECT_RULE, selectedRule });