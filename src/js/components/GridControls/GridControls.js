import React, { useState } from 'react';
import { Button, ButtonGroup, Grid, Slider, TextField, Typography } from '@material-ui/core';
import { BlurOff, BlurOn } from '@material-ui/icons';

import './GridControls.css';

const GridControls = ({
    actions: {
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

    const handleDensityChange = (event, newValue) => setDensity(newValue);
    const handleHeightChange = (e) => setHeight(parseInt(e.target.value));
    const handleWidthChange = (e) => setWidth(parseInt(e.target.value));

    const onGenerateClicked = () => randomizeGrid(height, width, density);
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
                    <ButtonGroup className="grid-buttons" variant="contained">
                        <Button id="generate" color="primary" onClick={onGenerateClicked}>Generate</Button>
                        <Button id="clear" color="secondary" onClick={onClearClicked}>Clear</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="grid-control-row">
                <Typography gutterBottom>
                    Density
                </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <BlurOff />
                    </Grid>
                    <Grid item xs>
                        <Slider id="grid-density" aria-label="Density" value={density} onChange={handleDensityChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <BlurOn />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default GridControls;