import {
    randomizeGrid,
    clearGrid,
    toggleTile,
    startRunningLife,
    stopRunningLife,
    runLifeIteration,
    selectRule,
} from './GridActions';

describe('Grid Action Creator Functions', () => {
   describe('Action Shapes', () => {
      test('Randomize Grid Action', () => {
          expect(randomizeGrid(2, 2, 50)).toMatchSnapshot();
      });

       test('Clear Grid Action', () => {
           expect(clearGrid(2, 2)).toMatchSnapshot();
       });

       test('Toggle Tile Action', () => {
           expect(toggleTile(2, 2)).toMatchSnapshot();
       });

       test('Start Life Simulation Action', () => {
           expect(startRunningLife()).toMatchSnapshot();
       });

       test('Stop Life Simulation Action', () => {
           expect(stopRunningLife()).toMatchSnapshot();
       });

       test('Run Single Life Simlation Iteration Action', () => {
           expect(runLifeIteration()).toMatchSnapshot();
       });

       test('Select Simulation Rule Action', () => {
           expect(selectRule({ value: 'selectedRule' })).toMatchSnapshot();
       });
   });
});
