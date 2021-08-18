import React from 'react';

import { Button, ButtonGroup } from '@material-ui/core';

export const GridButtons = ({
    actions: {
        startRunningLife,
        stopRunningLife,
        runLifeIteration,
        randomizeGrid,
        clearGrid,
    },
    height,
    width,
    density,
    isGameRunning,
}) => {
    const onPlayClicked = () => isGameRunning ? stopRunningLife() : startRunningLife();
    const onNextClicked = () => runLifeIteration();
    const onGenerateClicked = () => randomizeGrid(height, width, density);
    const onClearClicked = () => clearGrid(height, width);
    return (
        <ButtonGroup variant="contained">
            <Button id="play" color={isGameRunning ? 'secondary' : 'primary'} onClick={onPlayClicked}>{isGameRunning ? 'Pause' : 'Play'}</Button>
            <Button id="next" onClick={onNextClicked}>Next</Button>
            <Button id="generate" color="primary" onClick={onGenerateClicked}>Generate</Button>
            <Button id="clear" color="secondary" onClick={onClearClicked}>Clear</Button>
        </ButtonGroup>
    )
};

export default GridButtons;
