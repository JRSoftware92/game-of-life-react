import React, { useState } from 'react';

import '../../css/grid.css';

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
}) => {
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
    const [density, setDensity] = useState(initialDensity);

    const handleDensityChange = (e) => setDensity(parseInt(e.target.value));
    const handleHeightChange = (e) => setHeight(parseInt(e.target.value));
    const handleWidthChange = (e) => setWidth(parseInt(e.target.value));

    const onStartClicked = () => startRunningLife();
    const onStopClicked = () => stopRunningLife();
    const onNextClicked = () => runLifeIteration();
    const onRandomizeClicked = () => randomizeGrid(height, width, density);
    const onClearClicked = () => clearGrid(height, width);

    return (
        <div className="grid-controls">
            <div className="grid-buttons">
                <button id="start" onClick={onStartClicked}>Start</button>
                <button id="stop" onClick={onStopClicked}>Stop</button>
                <button id="next" onClick={onNextClicked}>Next</button>
                <button id="random" onClick={onRandomizeClicked}>Randomize</button>
                <button id="clear" onClick={onClearClicked}>Clear</button>
            </div>
            <div className="grid-size">
                <label>Height</label>
                <input id="grid-height" type="text" size="2" value={height} onChange={ handleHeightChange }/>
                <label>Width</label>
                <input id="grid-width" type="text" size="2" value={width} onChange={ handleWidthChange }/>
                <br/>
                <label>Random Density (%)</label>
                <input id="grid-density" type="text" size="3" value={density} onChange={ handleDensityChange }/>
            </div>
        </div>
    );
};

export default GridControls;