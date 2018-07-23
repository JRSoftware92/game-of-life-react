import {
    RUN,
    RANDOM,
    CLEAR,
    TOGGLE_TILE
} from "../actions/GridActions";

import gridUtils from "../utils/GridUtils";
import LifeEngine from "../engine/LifeEngine"
import LifeRules from "../engine/LifeRules";

const gridReducer = function(state, action){
    if (state === undefined) {
        return { 
            height: 0,
            width: 0,
            density: 50,
            grid: [],
            rules: new LifeRules()
        };
    }
     
    var newGrid;
    switch (action.type) {
        case RANDOM:
          return { 
              height: action.height,
              width: action.width,
              density: action.density,
              grid: gridUtils.randomGrid(action.height, action.width, action.density),
              rules: state.rules
          };
        case CLEAR:
          return {
            height: action.height,
            width: action.width,
            density: state.density,
            grid: gridUtils.emptyGrid(action.height, action.width),
            rules: state.rules
          };
        case TOGGLE_TILE:
          newGrid = state.grid.slice();
          newGrid[action.y][action.x] = state.grid[action.y][action.x] ? 0 : 1;

          return {
            height: state.height,
            width: state.width, 
            density: state.density,
            grid: newGrid,
            rules: state.rules
          };
          case RUN:
          newGrid = LifeEngine.run(state.grid, state.rules);

          return {
            height: state.height,
            width: state.width,
            density: state.density,
            grid: newGrid,
            rules: state.rules
          };
        default:
          return state;
    }
}

export default gridReducer;