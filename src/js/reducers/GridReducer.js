import {
    RANDOM,
    CLEAR,
    TOGGLE_TILE
} from "../actions/GridActions";

import gridUtils from "../utils/GridUtils";

const gridReducer = function(state, action){
    if (state === undefined) {
        return { 
            rows: 0,
            columns: 0,
            grid: []
        };
    }
     
    switch (action.type) {
        case RANDOM:
          return { 
              rows: action.rows,
              columns: action.columns,
              grid: gridUtils.randomGrid(action.rows, action.columns)
          };
        case CLEAR:
          return {
            rows: action.rows,
            columns: action.columns,
            grid: gridUtils.emptyGrid(action.rows, action.columns)
          };
        case TOGGLE_TILE:
          var newGrid = state.grid.slice();
          newGrid[action.x][action.y] = state.grid[action.x][action.y] ? 0 : 1;

          return {
            rows: state.rows,
            columns: state.columns, 
            grid: newGrid
          };
        default:
          return state;
    }
}

export default gridReducer;