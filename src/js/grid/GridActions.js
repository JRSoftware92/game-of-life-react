
var randomizeGrid = function(numRows, numColumns){
    return {
        type: "RANDOM",
        width: numRows,
        height: numColumns
    }
}

const gridActions = {
    randomizeGrid: randomizeGrid
}

export default gridActions;