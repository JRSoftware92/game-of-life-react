import { connect } from 'react-redux';

import GridButtons from '../../components/GridButtons/GridButtons';
import bindDispatchToActions from '../../actions/GridActions';

const mapStateToProps = ({ isRunning: isGameRunning }) => ({ isGameRunning });

const mapDispatchToProps = (dispatch) => bindDispatchToActions(dispatch);

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridButtons);

export default connectedComponent;