
var gridReducer = function(state, action){
    if (state === undefined) {
        return { 
            rows: 0,
            columns: 0,
            grid: []
        };
    }
     
    switch (action.type) {
        case "RESET":
          return { 
              rows: action.rows,
              columns: action.columns,
              grid: emptyGrid()
          };
        default:
          return state;
    }
}

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
}

export default gridReducer;