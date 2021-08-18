import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleTile } from '../../actions/GridActions';
import Grid from '../../components/Grid/Grid';

const mapStateToProps = ({ width, height, grid }) => ({ width, height, grid });

const mapDispatchToProps = (dispatch) => ({ toggleTile: bindActionCreators(toggleTile, dispatch) });

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export default connectedComponent;