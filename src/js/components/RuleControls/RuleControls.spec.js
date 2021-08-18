import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

import PresetRules from '../../../data/preset-rules.json';
import RuleControls from './RuleControls';

const getJSX = (props = {}) => <RuleControls {...props} />;
const renderControls = (props = {}) => render(getJSX(props));

describe('Game Rule Controls Component', () => {
    afterEach(cleanup);

    const props = {
        actions: {
            startRunningLife: jest.fn(),
            stopRunningLife: jest.fn(),
            runLifeIteration: jest.fn(),
            selectRule: jest.fn(),
        },
        selectedRule: PresetRules[0],
        isGameRunning: false,
    };

    describe('displays the following controls: ', () => {
        test('Rule Selection Dropdown', () => {
            renderControls(props);
            expect(screen.getByText('Conway')).toBeTruthy();
        })

        test('Survival Rule Input Field', () => {
            renderControls(props);
            expect(screen.getByLabelText('Survival')).toBeTruthy();
        })

        test('Birth Rule Input Field', () => {
            renderControls(props);
            expect(screen.getByLabelText('Birth')).toBeTruthy();
        })

        test('Play Simulation Button', () => {
            renderControls(props);
            expect(screen.getByText('Play')).toBeTruthy();
        })

        test('Next Iteration Button', () => {
            renderControls(props);
            expect(screen.getByText('Next')).toBeTruthy();
        })
    });

    test('Clicking the next button triggers a runLifeIteration action', () => {
        const runLifeIteration = jest.fn();
        renderControls({
            ...props,
            actions: { runLifeIteration },
        });

        fireEvent.click(screen.getByText('Next'));
        expect(runLifeIteration).toHaveBeenCalled();
    });

    test('Clicking the play button when the game is not running triggers a startRunningLife action', () => {
        const startRunningLife = jest.fn();
        renderControls({
            ...props,
            actions: { startRunningLife },
        });
        fireEvent.click(screen.getByText('Play'));
        expect(startRunningLife).toHaveBeenCalled();
    });

    test('Clicking the pause button when the game is running triggers a stopRunningLife action', () => {
        const stopRunningLife = jest.fn();
        renderControls({
            ...props,
            isGameRunning: true,
            actions: { stopRunningLife },
        });
        fireEvent.click(screen.getByText('Pause'));
        expect(stopRunningLife).toHaveBeenCalled();
    });
});
