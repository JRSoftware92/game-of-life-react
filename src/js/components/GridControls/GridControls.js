import React, { useState } from 'react';
import { Button, ButtonGroup, TextField } from '@material-ui/core';

import './GridControls.css';

const GridControls = ({
    actions: {
        startRunningLife,
        stopRunningLife,
        runLifeIteration,
        randomizeGrid,
        clearGrid,
    },
    width: initialWidth,
    height: initialHeight,
    density: initialDensity,
    isGameRunning,
}) => {
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
    const [density, setDensity] = useState(initialDensity);

    const handleDensityChange = (e) => setDensity(parseInt(e.target.value));
    const handleHeightChange = (e) => setHeight(parseInt(e.target.value));
    const handleWidthChange = (e) => setWidth(parseInt(e.target.value));

    const onPlayClicked = () => isGameRunning ? stopRunningLife() : startRunningLife();
    const onNextClicked = () => runLifeIteration();
    const onRandomizeClicked = () => randomizeGrid(height, width, density);
    const onClearClicked = () => clearGrid(height, width);

    return (
        <div className="grid-controls">
            <div className="grid-size">
                <div className="grid-control-row">
                    <TextField
                        id="grid-height"
                        type="text"
                        label="Height"
                        size="small"
                        variant="outlined"
                        value={height}
                        inputProps={{ maxLength: 2 }}
                        onChange={ handleHeightChange }
                    />
                    <TextField
                        id="grid-width"
                        type="text"
                        label="Width"
                        size="small"
                        variant="outlined"
                        value={width}
                        inputProps={{ maxLength: 2 }}
                        onChange={ handleWidthChange }
                    />
                    <TextField
                        id="grid-density"
                        type="text"
                        label="Density (%)"
                        size="small"
                        variant="outlined"
                        value={density}
                        inputProps={{ maxLength: 3 }}
                        onChange={ handleDensityChange }
                    />
                </div>
                <ButtonGroup variant="contained" color="secondary" className="grid-control-row">
                    <Button id="random" onClick={onRandomizeClicked}>Generate</Button>
                    <Button id="clear" onClick={onClearClicked}>Clear</Button>
                </ButtonGroup>
            </div>
            <ButtonGroup variant="contained" color="primary" className="grid-buttons">
                <Button id="play" onClick={onPlayClicked}>{isGameRunning ? 'Pause' : 'Play'}</Button>
                <Button id="next" onClick={onNextClicked}>Next</Button>
            </ButtonGroup>
        </div>
    );
};

export default GridControls;