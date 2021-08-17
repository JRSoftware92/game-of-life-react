import { connect } from 'react-redux';

import GridControls from '../../components/GridControls/GridControls';
import * as GridActions from '../../actions/GridActions';

let timer = null;

// Map Redux state to component props
const mapStateToProps = (state) => ({
    width: state.width,
    height: state.height,
    density: state.density,
})

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
    actions: {
        randomizeGrid: (numRows, numColumns, density) => {
            dispatch(GridActions.randomizeGrid(numRows, numColumns, density))
        },
        clearGrid: (numRows, numColumns) => {
            dispatch(GridActions.clearGrid(numRows, numColumns))
        },
        runLifeIteration: () => {
            dispatch(GridActions.runLifeIteration())
        },
        startRunningLife: () => {
            clearInterval(timer);
            timer = setInterval(() => dispatch(GridActions.runLifeIteration()), 500);
            dispatch(GridActions.startRunningLife());
            dispatch(GridActions.runLifeIteration());
        },
        stopRunningLife: () => {
            clearInterval(timer);
        }
    }
})

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridControls);

export default connectedComponent;