import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Grid from './Grid';

const getJSX = (props = {}) => <Grid {...props} />;
const renderGrid = (props = {}) => render(getJSX(props));

describe('Grid Component', () => {
    afterEach(cleanup);

    const props = {
        grid: [],
        height: 2,
        width: 2,
        actions: { toggleTile: jest.fn() },
    };

    test('renders an empty grid sized to the provided height and width values', () => {
        const { container } = renderGrid(props);
        expect(container.getElementsByClassName('grid-row').length).toBe(2);
        expect(container.getElementsByClassName('tile').length).toBe(4);
    });

    test('renders a grid corresponding to the grid provided via props', () => {
        const { container } = renderGrid({
            ...props,
            grid: [
                [1, 0],
                [0, 1],
            ]
        });
        expect(container.getElementsByClassName('grid-row').length).toBe(2);
        expect(container.getElementsByClassName('tile black').length).toBe(2);
    });
});
