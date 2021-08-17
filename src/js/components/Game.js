import React from 'react';

import GridContainer from '../../containers/GridContainer/GridContainer'
import GridControlsContainer from '../../containers/GridControlsContainer/GridControlsContainer'
import RuleControlsContainer from '../../containers/RuleControlsContainer/RuleControlsContainer'

import './GamePage.css';

const GamePage = () => (
    <div className="game-content">
        <div className="grid-controls-section">
            <RuleControlsContainer/>
            <GridControlsContainer/>
        </div>
        <div className="grid-section">
            <GridContainer/>
        </div>
    </div>
);

export default GamePage;