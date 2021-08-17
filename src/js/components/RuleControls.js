import React, { useEffect, useState } from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import PresetRules from '../engine/PresetRules';

const RuleControls = ({ actions: { selectRule }, selectedRule: initialRule }) => {
    const [selectedRule, setSelectedRule] = useState(initialRule);

    useEffect(() => setSelectedRule(initialRule), [initialRule]);

    const handleRuleSelection = (event) => {
        const selectedValue = get(event, 'target.value');
        const newRule = find(PresetRules, { value: selectedValue });

        selectRule(newRule);
    }

    const weightGrid = get(selectedRule, 'weights', []);
    return (
        <div id="rule-controls">
            <div className="rule-select-container">
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
            </div>
            <div>
                <label>Survival</label>
                <input id="rule-survival" type="text" value={selectedRule.survival} disabled/>
                <label>Birth</label>
                <input id="rule-birth" type="text" value={selectedRule.birth} disabled/>
            </div>
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
    );
};

export default RuleControls;