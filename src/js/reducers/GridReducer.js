import {
    RANDOM,
    CLEAR,
    TOGGLE_TILE
} from "../actions/GridActions";

import gridUtils from "../utils/GridUtils";

const gridReducer = function(state, action){
  console.log("Grid Reducer taking place: " + action.type);
    if (state === undefined) {
        return { 
            height: 0,
            width: 0,
            grid: []
        };
    }
     
    switch (action.type) {
        case RANDOM:
          return { 
              height: action.height,
              width: action.width,
              grid: gridUtils.randomGrid(action.height, action.width)
          };
        case CLEAR:
          return {
            height: action.height,
            width: action.width,
            grid: gridUtils.emptyGrid(action.height, action.width)
          };
        case TOGGLE_TILE:
          var newGrid = state.grid.slice();
          newGrid[action.x][action.y] = state.grid[action.x][action.y] ? 0 : 1;

          return {
            height: state.height,
            width: state.width, 
            grid: newGrid
          };
        default:
          return state;
    }
}

export default gridReducer;