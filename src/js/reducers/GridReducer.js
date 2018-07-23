import {
    RUN,
    RANDOM,
    CLEAR,
    TOGGLE_TILE,
    SELECT_RULE
} from "../actions/GridActions";

import gridUtils from "../utils/GridUtils";
import LifeEngine from "../engine/LifeEngine"
import { Conway } from "../engine/PresetRules";

const gridReducer = function(state, action){
    if (state === undefined) {
        return { 
            height: 0,
            width: 0,
            density: 50,
            grid: [],
            selectedRule: Conway
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
              selectedRule: state.selectedRule
          };
        case CLEAR:
          return {
            height: action.height,
            width: action.width,
            density: state.density,
            grid: gridUtils.emptyGrid(action.height, action.width),
            selectedRule: state.selectedRule
          };
        case TOGGLE_TILE:
          newGrid = state.grid.slice();
          newGrid[action.y][action.x] = state.grid[action.y][action.x] ? 0 : 1;

          return {
            height: state.height,
            width: state.width, 
            density: state.density,
            grid: newGrid,
            selectedRule: state.selectedRule
          };
        case RUN:
          newGrid = LifeEngine.run(state.grid, state.selectedRule);

          return {
            height: state.height,
            width: state.width,
            density: state.density,
            grid: newGrid,
            selectedRule: state.selectedRule
          };
        case SELECT_RULE:
          return {
            height: state.height,
            width: state.width,
            density: state.density,
            grid: state.grid,
            selectedRule: action.selectedRule
          };
        default:
          return state;
    }
}

export default gridReducer;