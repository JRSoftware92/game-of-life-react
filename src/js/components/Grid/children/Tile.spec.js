import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Tile from './Tile';

const getJSX = (props = {}) => <Tile {...props} />;
const renderTile = (props = {}) => render(getJSX(props));

describe('Grid Tile Component', () => {
    afterEach(cleanup);

    const props = {
        filled: false,
        x: 0,
        y: 0,
        onTileClicked: jest.fn(),
    };

    test('renders black when filled', () => {
        const { container } = renderTile({
            ...props,
            filled: true,
        });
        expect(container.getElementsByClassName('black').length).toBe(1);
    });

    test('renders white when not', () => {
        const { container } = renderTile(props);
        expect(container.getElementsByClassName('white').length).toBe(1);
    });

    test('clicking a tile will trigger the attached callback', () => {
        const onTileClicked = jest.fn();
        const { getByTestId  } = renderTile({
            ...props, onTileClicked,
        });
        const tile = getByTestId('tile-0-0');
        fireEvent.click(tile);

        expect(onTileClicked).toHaveBeenCalledWith(0, 0);
    });
});
