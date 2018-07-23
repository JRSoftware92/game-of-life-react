import React, {Component} from 'react';

class Tile extends Component {
    render() {
        return (
            <div className={'tile ' + (this.props.filled ? 'black' : 'white')}>
            </div>
        );
    }
}

export default Tile;