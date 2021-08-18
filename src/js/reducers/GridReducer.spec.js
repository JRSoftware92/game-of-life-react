import gridReducer, { initialState } from './GridReducer';
import {
    START, STOP, CLEAR, RANDOM, NEXT, SELECT_RULE, TOGGLE_TILE,
} from '../actions/GridActions';

import gridUtils from '../utils/GridUtils/GridUtils';
import lifeEngine from '../engine/LifeEngine';

jest.mock('../utils/GridUtils/GridUtils');
jest.mock('../engine/LifeEngine');

describe('Grid State Reducer Function', () => {
    const initialGrid = [
        [1, 1],
        [1, 1],
    ];
    const clearedGrid = [
        [0, 0],
        [0, 0],
    ];
    const randomizedGrid = [
        [0, 1],
        [1, 0],
    ];

    const progressedGrid = [
        [1, 0],
        [0, 1],
    ];

    beforeEach(() => {
        lifeEngine.run.mockImplementation(() => progressedGrid);
        gridUtils.emptyGrid.mockImplementation(() => clearedGrid);
        gridUtils.randomGrid.mockImplementation(() => randomizedGrid);
    });

    test('when a START action is received, the isRunning flag will be set to true', () => {
        const action = { type: START };
        const updatedStore = gridReducer(initialState, action);
        expect(updatedStore.isRunning).toBe(true);
    });

    test('when a STOP action is received, the isRunning flag will be set to false', () => {
        const action = { type: STOP };
        const updatedStore = gridReducer({
            ...initialState,
            height: 2,
            width: 2,
            grid: initialGrid,
        }, action);
        expect(updatedStore.isRunning).toBe(false);
    });

    test('when a RANDOM action is received, the grid will be randomized based on the parameters provided by the action', () => {
        const action = {
            type: RANDOM,
            height: 2,
            width: 2,
            density: 50,
        };
        const updatedStore = gridReducer({
            ...initialState,
            height: 2,
            width: 2,
            density: 25,
            grid: initialGrid,
        }, action);

        expect(updatedStore).toEqual({
            ...initialState,
            density: 50,
            height: 2,
            width: 2,
            grid: randomizedGrid,
        });
    });

    test('when a CLEAR action is received, the grid will be cleared and sized based on the provided height and width', () => {
        const action = {
            type: CLEAR,
            height: 2,
            width: 2,
        };
        const updatedStore = gridReducer({
            ...initialState,
            grid: initialGrid,
        }, action);

        expect(updatedStore).toEqual({
            ...initialState,
            height: 2,
            width: 2,
            grid: clearedGrid,
        });
    });

    test('when a NEXT action is received, the grid will be updated via the Life Engine rule simulator', () => {
        const action = {
            type: NEXT,
        };
        const updatedStore = gridReducer({
            ...initialState,
            grid: initialGrid,
        }, action);

        expect(updatedStore).toEqual({
            ...initialState,
            grid: progressedGrid,
        });
    });

    test('when a TOGGLE_TILE action is received, the state of the tile at the selected (x,y) coordinates on the grid will be updated', () => {
        const action = {
            type: TOGGLE_TILE,
            x: 1,
            y: 1,
        };
        const updatedStore = gridReducer({
            ...initialState,
            grid: initialGrid,
        }, action);

        const expectedGrid = [
            [1, 1],
            [1, 0],
        ];

        expect(updatedStore).toEqual({
            ...initialState,
            grid: expectedGrid,
        });
    });

    test('when a SELECT_RULE action is received, a new simulation ruleset will be selected for the grid', () => {
        const action = {
            type: SELECT_RULE,
            selectedRule: 'newRule',
        };
        const updatedStore = gridReducer(initialState, action);

        expect(updatedStore).toEqual({
            ...initialState,
            selectedRule: 'newRule',
        });
    });
});
