import React, {Component} from 'react';

class Tile extends Component {
    constructor(props){
        super(props);

        this.state = {
            filled: props.filled ? true : false
        }
    }

    render() {
        return (
            <div className={'tile ' + (this.state.filled ? 'black' : 'white')}>
            </div>
        );
    }
}

export default Tile;