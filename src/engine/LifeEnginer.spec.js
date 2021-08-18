import LifeEngine from './LifeEngine';

import PresetRules from '../data/preset-rules.json';

describe('Life Rules Engine', () => {
    test('single iteration test (Conway)', () => {
        const initialGrid = [
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [1, 0, 0, 1],
        ];

        const expectedGrid = [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
        ];

        expect(LifeEngine.run(initialGrid, PresetRules[0])).toEqual(expectedGrid);
    });
});
