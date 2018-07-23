export const RANDOM = 'RANDOM';
export const CLEAR = 'CLEAR';
export const TOGGLE_TILE = 'TOGGLE_TILE'

export const randomizeGrid = function(numRows, numColumns){
    return {
        type: RANDOM,
        height: numRows,
        width: numColumns
    }
}

export const clearGrid = function(numRows, numColumns){
    return {
        type: CLEAR,
        height: numRows,
        width: numColumns
    }
}

export const toggleTile = function(x, y){
    return {
        type: TOGGLE_TILE,
        x: x,
        y: y
    }
}