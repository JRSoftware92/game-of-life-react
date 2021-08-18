import React, { useEffect, useState } from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';

import {
    Button, ButtonGroup, FormControlLabel, MenuItem, Select, Switch, TextField, Typography,
} from '@material-ui/core';

import PresetRules from '../../data/preset-rules.json';

import './RuleControls.css';

const WeightGridTile = ({
    x, y, value, disabled, onWeightValueChange,
}) => {
    const onChange = (event) => onWeightValueChange(x, y, event);
    return (
        <input
            className="tile"
            type="text"
            size="1"
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
    );
}

const WeightGridRow = ({
    y, weightGridRow, allowRuleCustomization, onWeightValueChange
}) => (
    <div className="grid-row">
        {
            weightGridRow.map((weightGridTile, x) => (
                <WeightGridTile
                    x={x} y={y}
                    value={weightGridTile}
                    disabled={!allowRuleCustomization}
                    onWeightValueChange={onWeightValueChange}
                />
            ))
        }
    </div>
)

const WeightGridDisplay = ({ weightGrid, allowRuleCustomization, onWeightValueChange }) => {
    return (
        <div className="rule-control-column">
            <Typography>Tile Weights</Typography>
            <div id="rule-weights" className="grid">
                {
                    weightGrid.map((weightGridRow, y) => (
                        <WeightGridRow
                            y={y}
                            weightGridRow={weightGridRow}
                            allowRuleCustomization={allowRuleCustomization}
                            onWeightValueChange={onWeightValueChange}
                        />
                    ))
                }
            </div>
        </div>
    );
};

const RuleControls = ({
    actions: { startRunningLife, stopRunningLife, runLifeIteration, selectRule, setUseCustomRule },
    selectedRule: initialRule,
    isGameRunning,
    useCustomRule,
}) => {
    const [selectedRule, setSelectedRule] = useState(initialRule);
    const [allowRuleCustomization, setAllowRuleCustomization] = useState(false);
    const weightGrid = get(selectedRule, 'weights', []);
    
    useEffect(() => setSelectedRule(initialRule), [initialRule]);

    const onPlayClicked = () => isGameRunning ? stopRunningLife() : startRunningLife();
    const onNextClicked = () => runLifeIteration();
    const onAllowCustomizationToggle = () => setAllowRuleCustomization(!allowRuleCustomization);

    const applyNewRuleset = (ruleset) => {
        setUseCustomRule(true);
        selectRule(ruleset);
    };

    const onBirthRuleUpdate = (event) => {
        const newBirth = parseInt(get(event, 'target.value'));
        applyNewRuleset({
            ...selectedRule,
            birth: newBirth,
        });
    };
    const onSurvivalRuleUpdate = (event) => {
        const newSurvival = parseInt(get(event, 'target.value'));
        applyNewRuleset({
            ...selectedRule,
            survival: newSurvival,
        });
    };
    const onWeightValueChange = (x, y, event) => {
        const newWeight = get(event, 'target.value');

        const newWeightGrid = cloneDeep(weightGrid);
        newWeightGrid[x][y] = parseInt(newWeight);

        applyNewRuleset({
            ...selectedRule,
            weights: newWeightGrid,
        });
    };
    const handleRuleSelection = (event) => {
        const selectedValue = get(event, 'target.value');
        const newRule = find(PresetRules, { value: selectedValue });

        selectRule(newRule);
    };
    return (
        <div className="rule-controls">
            <div className="rule-control-row">
                <Select
                    className="rule-selector"
                    value={selectedRule.value}
                    onChange={handleRuleSelection}
                    options={PresetRules}
                >
                    {
                        PresetRules.map(presetRule => (
                            <MenuItem key={presetRule.value} value={presetRule.value}>
                                {
                                    `${presetRule.label}${useCustomRule ? ' (Custom)' : '' }`
                                }
                            </MenuItem>
                        ))
                    }
                </Select>
                <ButtonGroup variant="contained" className="grid-buttons">
                    <Button id="play" color={isGameRunning ? 'secondary' : 'primary'} onClick={onPlayClicked}>{isGameRunning ? 'Pause' : 'Play'}</Button>
                    <Button id="next" onClick={onNextClicked}>Next</Button>
                </ButtonGroup>
                <div className="rule-customization-switch">
                    <FormControlLabel
                        label="Allow Customization"
                        control={
                            <Switch
                                name="Allow Customization"
                                checked={allowRuleCustomization}
                                onChange={onAllowCustomizationToggle}
                            />
                        }
                    />
                </div>
            </div>
            <div className="rule-control-row">
                <div className="rule-control-column">
                    <TextField
                        id="rule-survival"
                        type="text"
                        label="Survival"
                        size="small"
                        value={selectedRule.survival}
                        disabled={!allowRuleCustomization}
                        onChange={onSurvivalRuleUpdate}
                    />
                    <TextField
                        id="rule-birth"
                        type="text"
                        label="Birth"
                        size="small"
                        value={selectedRule.birth}
                        disabled={!allowRuleCustomization}
                        onChange={onBirthRuleUpdate}
                    />
                </div>
                <WeightGridDisplay
                    weightGrid={weightGrid}
                    allowRuleCustomization={allowRuleCustomization}
                    onWeightValueChange={onWeightValueChange}
                />
            </div>
        </div>
    );
};

export default RuleControls;