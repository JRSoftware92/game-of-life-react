import React, { Component } from "react";
import Select from 'react-select';

import PresetRules from "../engine/PresetRules"

class RuleControls extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedRule: props.selectedRule
        }

        this.handleRuleSelection = this.handleRuleSelection.bind(this);
    }

    handleRuleSelection(rule){
        this.props.actions.selectRule(rule);
    }

    render(){
        return (
            <div id="rule-controls">
                <div className="rule-select-container">
                    <Select className="rule-selector"
                        value={this.props.selectedRule}
                        onChange={this.handleRuleSelection}
                        options={PresetRules}
                    />
                </div>
                <div>
                    <label>Survival</label>
                    <input id="rule-survival" type="text" value={this.state.selectedRule.survival} onChange={ this.handleSurvivalChange } disabled/>
                    <label>Birth</label>
                    <input id="rule-birth" type="text" value={this.state.selectedRule.birth} onChange={ this.handleBirthChange } disabled/>
                </div>
                <label>Tile Weights</label>
                <div id="rule-weights" className="grid">
                    <div className="grid-row">
                        <input id="top-left-weight" value={this.state.selectedRule.weights[0][0]} className="tile" type="text" size="1" disabled/>
                        <input id="top-center-weight" value={this.state.selectedRule.weights[0][1]} className="tile" type="text" size="1" disabled/>
                        <input id="top-right-weight" value={this.state.selectedRule.weights[0][2]} className="tile" type="text" size="1" disabled/>
                    </div>
                    <div className="grid-row">
                        <input id="left-weight" value={this.state.selectedRule.weights[1][0]} className="tile" type="text" size="1" disabled/>
                        <input id="center-weight" value={this.state.selectedRule.weights[1][1]} className="tile" type="text" size="1" disabled/>
                        <input id="right-weight" value={this.state.selectedRule.weights[1][2]} className="tile" type="text" size="1" disabled/>
                    </div>
                    <div className="grid-row">
                        <input id="bottom-left-weight" value={this.state.selectedRule.weights[2][0]} className="tile" type="text" size="1" disabled/>
                        <input id="bottom-center-weight" value={this.state.selectedRule.weights[2][1]} className="tile" type="text" size="1" disabled/>
                        <input id="bottom-right-weight" value={this.state.selectedRule.weights[2][2 ]} className="tile" type="text" size="1" disabled/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RuleControls;