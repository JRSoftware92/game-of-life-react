import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RuleControls from '../../components/RuleControls/RuleControls';
import * as GridActions from '../../actions/GridActions';

// Map Redux state to component props
const mapStateToProps = (state) => ({
    selectedRule: state.selectedRule
})

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(GridActions, dispatch)
})

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(RuleControls);

export default connectedComponent;