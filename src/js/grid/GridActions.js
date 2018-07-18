
const randomizeGrid = function(numRows, numColumns){
    return {
        type: "RANDOM",
        width: numRows,
        height: numColumns
    }
}

const clearGrid = function(numRows, numColumns){
    return {
        type: "CLEAR",
        width: numRows,
        height: numColumns
    }
}

const gridActions = {
    randomizeGrid: randomizeGrid,
    clearGrid: clearGrid
}

export default gridActions;