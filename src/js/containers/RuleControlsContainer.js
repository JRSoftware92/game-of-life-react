import { connect } from "react-redux";
import {bindActionCreators} from 'redux';   

import RuleControls from "../components/RuleControls";
import * as GridActions from "../actions/GridActions";

// Map Redux state to component props
const mapStateToProps = function mapStateToProps(state) {
    return {
        width: state.width,
        height: state.height,
        density: state.density,
        grid: state.grid,
        selectedRule: state.selectedRule
    };
}

// Map Redux actions to component props
const mapDispatchToProps = function(dispatch){
    return {
        actions: bindActionCreators(GridActions, dispatch)
    }
};

// The HOC (Higher Order Component)
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(RuleControls);

export default connectedComponent;