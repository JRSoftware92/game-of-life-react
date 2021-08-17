import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../../components/Grid/Grid';
import * as GridActions from '../../actions/GridActions';

// Map Redux state to component props
const mapStateToProps = (state) => ({
    width: state.width,
    height: state.height,
    grid: state.grid,
})

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(GridActions, dispatch)
})

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export default connectedComponent;