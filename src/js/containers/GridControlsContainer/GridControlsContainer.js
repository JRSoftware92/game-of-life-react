import { connect } from 'react-redux';

import GridControls from '../../components/GridControls/GridControls';
import bindDispatchToActions from "../../actions/GridActions";

const mapStateToProps = ({
  width, height, density, selectedRule, isRunning: isGameRunning
}) => ({
    width,
    height,
    density,
})

const mapDispatchToProps = (dispatch) => bindDispatchToActions(dispatch);

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridControls);

export default connectedComponent;