import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

import GridControls from './GridControls';

const getJSX = (props = {}) => <GridControls {...props} />;
const renderControls = (props = {}) => render(getJSX(props));

describe('Grid Controls Component', () => {
    afterEach(cleanup);

    const props = {
        actions: {
            randomizeGrid: jest.fn(),
            clearGrid: jest.fn(),
        },
        height: 2,
        width: 2,
        density: 50,
    };

    describe('displays the following controls: ', () => {
        test('Grid Height Field', () => {
            renderControls(props);
            expect(screen.getByLabelText('Height')).toBeTruthy();
        })

        test('Grid Width Field', () => {
            renderControls(props);
            expect(screen.getByLabelText('Width')).toBeTruthy();
        })

        test('Grid Density Field', () => {
            renderControls(props);
            expect(screen.getByLabelText('Density')).toBeTruthy();
        })

        test('Grid Generate Button', () => {
            renderControls(props);
            expect(screen.getByText('Generate')).toBeTruthy();
        })

        test('Grid Clear Button', () => {
            renderControls(props);
            expect(screen.getByText('Clear')).toBeTruthy();
        })
    });

    test('Updating the height field will trigger a setHeight action', () => {
        const clearGrid = jest.fn();
        renderControls({
            ...props,
            actions: { clearGrid },
        });
        fireEvent.click(screen.getByText('Clear'));
        expect(clearGrid).toHaveBeenCalledWith(2, 2);
    });

    test('Clicking the clear button triggers a clearGrid action', () => {
        const clearGrid = jest.fn();
        renderControls({
            ...props,
            actions: { clearGrid },
        });
        fireEvent.click(screen.getByText('Clear'));
        expect(clearGrid).toHaveBeenCalledWith(2, 2);
    });

    test('Clicking the generate button triggers a randomizeGrid action with the values provided from the input fields', () => {
        const randomizeGrid = jest.fn();
        renderControls({
            ...props,
            actions: { randomizeGrid },
        });

        const densityInput = screen.getByLabelText('Density');
        densityInput.getBoundingClientRect = jest.fn(() => {
            return {
                height: 4,
                width: 4,
                top: 4,
                bottom: 1,
                left: 1,
                right: 4,
                x: 2,
                y: 2,
            }
        })
        fireEvent.change(screen.getByLabelText('Height'), { target: { value: 4 }});
        fireEvent.change(screen.getByLabelText('Width'), { target: { value: 4 }});
        fireEvent.mouseDown(screen.getByLabelText('Density'), { clientX: 160, clientY: 302 });
        fireEvent.click(screen.getByText('Generate'));
        expect(randomizeGrid).toHaveBeenCalledWith(4, 4, 100);
    });
});
