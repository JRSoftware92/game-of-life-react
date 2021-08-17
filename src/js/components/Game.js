import React from 'react';

import GridContainer from '../containers/GridContainer'
import GridControlsContainer from '../containers/GridControlsContainer'
import RuleControlsContainer from '../containers/RuleControlsContainer'

const Game = () => (
    <div id="game-content">
        <GridContainer/>
        <GridControlsContainer/>
        <RuleControlsContainer/>
    </div>
);

export default Game;