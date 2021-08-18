import {
    START,
    STOP,
    NEXT,
    RANDOM,
    CLEAR,
    TOGGLE_TILE,
    SELECT_RULE
} from '../actions/GridActions';

import gridUtils from '../utils/GridUtils/GridUtils';
import LifeEngine from '../engine/LifeEngine';
import PresetRules from '../../data/preset-rules.json';

export const initialState = {
    height: 16,
    width: 48,
    density: 50,
    grid: gridUtils.emptyGrid(16, 48),
    selectedRule: PresetRules[0]
}

const gridReducer = function(state = initialState, action){
    let newGrid;
    switch (action.type) {
        case START:
            return {
                ...state,
                isRunning: true,
            };
        case STOP:
            return {
                ...state,
                isRunning: false,
            };
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
              ...state,
            height: action.height,
            width: action.width,
            grid: gridUtils.emptyGrid(action.height, action.width),
          };
        case TOGGLE_TILE:
          newGrid = state.grid.slice();
          newGrid[action.y][action.x] = state.grid[action.y][action.x] ? 0 : 1;

          return {
              ...state,
            grid: newGrid,
          };
        case NEXT:
          newGrid = LifeEngine.run(state.grid, state.selectedRule);

          return {
              ...state,
            grid: newGrid,
          };
        case SELECT_RULE:
          return {
              ...state,
            selectedRule: action.selectedRule
          };
        default:
          return state;
    }
}

export default gridReducer;