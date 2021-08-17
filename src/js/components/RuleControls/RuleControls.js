import React, { useEffect, useState } from 'react';
import find from 'lodash/find';
import get from 'lodash/get';

import {Button, ButtonGroup, MenuItem, Select, TextField} from '@material-ui/core';

import PresetRules from '../../engine/PresetRules';

import './RuleControls.css';

const RuleControls = ({
    actions: { startRunningLife, stopRunningLife, runLifeIteration, selectRule },
    selectedRule: initialRule,
    isGameRunning,
}) => {
    const [selectedRule, setSelectedRule] = useState(initialRule);

    useEffect(() => setSelectedRule(initialRule), [initialRule]);

    const onPlayClicked = () => isGameRunning ? stopRunningLife() : startRunningLife();
    const onNextClicked = () => runLifeIteration();
    const handleRuleSelection = (event) => {
        const selectedValue = get(event, 'target.value');
        const newRule = find(PresetRules, { value: selectedValue });

        selectRule(newRule);
    }
    const weightGrid = get(selectedRule, 'weights', []);
    return (
        <div className="rule-controls">
            <div className="rule-control-row">
                <Select className="rule-selector"
                        value={selectedRule.value}
                        onChange={handleRuleSelection}
                        options={PresetRules}
                >
                    {
                        PresetRules.map(presetRule => (
                            <MenuItem value={presetRule.value}>{presetRule.label}</MenuItem>
                        ))
                    }
                </Select>
                <ButtonGroup variant="contained" className="grid-buttons">
                    <Button id="play" color={isGameRunning ? 'secondary' : 'primary'} onClick={onPlayClicked}>{isGameRunning ? 'Pause' : 'Play'}</Button>
                    <Button id="next" onClick={onNextClicked}>Next</Button>
                </ButtonGroup>
            </div>
            <div className="rule-control-row">
                <div className="rule-control-column">
                    <TextField id="rule-survival" type="text" label="Survival" size="small" value={selectedRule.survival} disabled/>
                    <TextField id="rule-birth" type="text" label="Birth" size="small" value={selectedRule.birth} disabled/>
                </div>
                <div className="rule-control-column">
                    <label>Tile Weights</label>
                    <div id="rule-weights" className="grid">
                        <div className="grid-row">
                            <input id="top-left-weight" value={weightGrid[0][0]} className="tile" type="text" size="1" disabled/>
                            <input id="top-center-weight" value={weightGrid[0][1]} className="tile" type="text" size="1" disabled/>
                            <input id="top-right-weight" value={weightGrid[0][2]} className="tile" type="text" size="1" disabled/>
                        </div>
                        <div className="grid-row">
                            <input id="left-weight" value={weightGrid[1][0]} className="tile" type="text" size="1" disabled/>
                            <input id="center-weight" value={weightGrid[1][1]} className="tile" type="text" size="1" disabled/>
                            <input id="right-weight" value={weightGrid[1][2]} className="tile" type="text" size="1" disabled/>
                        </div>
                        <div className="grid-row">
                            <input id="bottom-left-weight" value={weightGrid[2][0]} className="tile" type="text" size="1" disabled/>
                            <input id="bottom-center-weight" value={weightGrid[2][1]} className="tile" type="text" size="1" disabled/>
                            <input id="bottom-right-weight" value={weightGrid[2][2 ]} className="tile" type="text" size="1" disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RuleControls;