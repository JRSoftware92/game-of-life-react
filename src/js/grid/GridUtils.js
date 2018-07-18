
var emptyGrid = function(numRows, numColumns){
    var grid = [];
    var row;
  
    for(var i = 0; i < numRows; i++){
      row = [];
      for(var j = 0; j < numColumns; j++){
        row.push(0);
      }
      grid.push(row);
    }

    return grid;
}

const gridUtils = {
    emptyGrid: emptyGrid
}

export default gridUtils;