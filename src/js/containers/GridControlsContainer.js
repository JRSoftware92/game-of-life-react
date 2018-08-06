import { connect } from "react-redux";

import GridControls from "../components/GridControls";
import * as GridActions from "../actions/GridActions";

var timer = null;

// Map Redux state to component props
const mapStateToProps = function mapStateToProps(state) {
    return JSON.parse(JSON.stringify(state));
}

// Map Redux actions to component props
const mapDispatchToProps = function(dispatch){
    return {
        actions: {
            randomizeGrid: (numRows, numColumns, density) => {
                dispatch(GridActions.randomizeGrid(numRows, numColumns, density))
            },
            clearGrid: (numRows, numColumns) => {
                dispatch(GridActions.clearGrid(numRows, numColumns))
            },
            toggleTile: (x, y) => {
                dispatch(GridActions.toggleTile(x, y))
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
    }
};

// The HOC (Higher Order Component)
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridControls);

export default connectedComponent;