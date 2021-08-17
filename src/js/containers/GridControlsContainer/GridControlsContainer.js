import { connect } from 'react-redux';

import GridControls from '../../components/GridControls/GridControls';
import * as GridActions from '../../actions/GridActions';

let timer = null;

const mapStateToProps = ({
  width, height, density, selectedRule, isRunning: isGameRunning
}) => ({
    width,
    height,
    density,
    selectedRule,
    isGameRunning,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        selectRule: (selectedRule) => {
            dispatch(GridActions.selectRule(selectedRule));
        },
        randomizeGrid: (numRows, numColumns, density) => {
            clearInterval(timer);
            dispatch(GridActions.stopRunningLife());
            dispatch(GridActions.randomizeGrid(numRows, numColumns, density))
        },
        clearGrid: (numRows, numColumns) => {
            clearInterval(timer);
            dispatch(GridActions.stopRunningLife());
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
            dispatch(GridActions.stopRunningLife());
        }
    }
})

// The HOC (Higher Order Component)
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridControls);

export default connectedComponent;