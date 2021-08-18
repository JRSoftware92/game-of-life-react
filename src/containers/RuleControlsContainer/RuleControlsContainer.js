import { connect } from 'react-redux';

import RuleControls from '../../components/RuleControls/RuleControls';
import bindDispatchToActions from '../../actions/GridActions';

const mapStateToProps = ({
  height, width, density, selectedRule, isRunning: isGameRunning, useCustomRule,
}) => ({
  height, width, density, selectedRule, isGameRunning, useCustomRule,
});

const mapDispatchToProps = (dispatch) => bindDispatchToActions(dispatch);

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(RuleControls);

export default connectedComponent;