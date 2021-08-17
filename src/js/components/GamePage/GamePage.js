import React from 'react';

import GridContainer from '../../containers/GridContainer/GridContainer'
import GridControlsContainer from '../../containers/GridControlsContainer/GridControlsContainer'
import RuleControlsContainer from '../../containers/RuleControlsContainer/RuleControlsContainer'

const GamePage = () => (
    <div id="game-content">
        <GridContainer/>
        <GridControlsContainer/>
        <RuleControlsContainer/>
    </div>
);

export default GamePage;