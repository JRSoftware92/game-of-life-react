import React from 'react';

import RuleControlsContainer from '../../containers/RuleControlsContainer/RuleControlsContainer';
import GridControlsContainer from '../../containers/GridControlsContainer/GridControlsContainer';

import './ControlSection.css';

export const ControlSection = () => (
    <div className="control-section">
        <RuleControlsContainer />
        <GridControlsContainer />
    </div>
);

export default ControlSection;
