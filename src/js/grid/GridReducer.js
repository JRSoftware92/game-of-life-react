import gridUtils from "./GridUtils";

const gridReducer = function(state, action){
    if (state === undefined) {
        return { 
            rows: 0,
            columns: 0,
            grid: []
        };
    }
     
    switch (action.type) {
        case "RANDOM":
          return { 
              rows: action.rows,
              columns: action.columns,
              grid: gridUtils.randomGrid(action.rows, action.columns)
          };
        default:
          return state;
    }
}

export default gridReducer;