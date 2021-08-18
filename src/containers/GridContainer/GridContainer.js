import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../../components/Grid/Grid';
import * as GridActions from '../../actions/GridActions';

const mapStateToProps = ({ width, height, grid }) => ({width, height, grid });

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(GridActions, dispatch) });

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export default connectedComponent;