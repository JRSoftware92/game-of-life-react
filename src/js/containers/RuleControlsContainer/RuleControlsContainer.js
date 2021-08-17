import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RuleControls from '../../components/RuleControls/RuleControls';
import * as GridActions from '../../actions/GridActions';

const mapStateToProps = ({ selectedRule }) => ({ selectedRule });

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(GridActions, dispatch)
})

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(RuleControls);

export default connectedComponent;