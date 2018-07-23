export const RANDOM = 'RANDOM';
export const CLEAR = 'CLEAR';
export const TOGGLE_TILE = 'TOGGLE_TILE';
export const START = 'START';
export const STOP = 'STOP';
export const NEXT = 'NEXT';
export const SELECT_RULE = 'SELECT_RULE';

export const randomizeGrid = function(numRows, numColumns, density){
    return {
        type: RANDOM,
        height: numRows,
        width: numColumns,
        density: density
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

export const startRunningLife = function(){
    return {
        type: START
    }
}

export const stopRunningLife = function(){
    return {
        type: STOP
    }
}

export const runLifeIteration = function(){
    return {
        type: NEXT
    }
}

export const selectRule = function(rule){
    return {
        type: SELECT_RULE,
        selectedRule: rule
    }
}