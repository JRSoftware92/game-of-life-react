import gridUtils from "./GridUtils";

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
              grid: gridUtils.emptyGrid(action.rows, action.columns)
          };
        default:
          return state;
    }
}

export default gridReducer;