
const emptyGrid = function(numRows, numColumns){
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

const randomGrid = function(numRows, numColumns, density){
    var grid = [];
    var row;
  
    var value;
    for(var i = 0; i < numRows; i++){
      row = [];
      for(var j = 0; j < numColumns; j++){
        value = Math.random() * 100 <= density ? 1 : 0;
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