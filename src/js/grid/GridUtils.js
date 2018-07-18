
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

var randomGrid = function(numRows, numColumns){
    var grid = [];
    var row;
  
    var value;
    for(var i = 0; i < numRows; i++){
      row = [];
      for(var j = 0; j < numColumns; j++){
        value = Math.floor(Math.random() * 2)       //Random Value (0 or 1)
        row.push(value);
      }
      grid.push(row);
    }

    return grid;
}

const gridUtils = {
    emptyGrid: emptyGrid,
    randomGrid: randomGrid
}

export default gridUtils;