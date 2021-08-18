import { emptyGrid, randomGrid } from './GridUtils';

describe('Grid Utility Functions', () => {
    test('emptyGrid - returns an empty grid sized based on the provided number of rows and columns', () => {
        const grid = emptyGrid(2, 2);
        const dimens = { width: grid.length, height: grid[0].length };

        expect(dimens).toEqual({ width: 2, height: 2 });
    });

    test('randomGrid - returns a randomly populated grid sized based on the provided number of rows and columns, as well as the density', () => {
        const grid = randomGrid(2, 2, 100);
        const dimens = { width: grid.length, height: grid[0].length, tilePopulated: grid[0][0] };

        expect(dimens).toEqual({ width: 2, height: 2, tilePopulated: 1 });
    });
});
