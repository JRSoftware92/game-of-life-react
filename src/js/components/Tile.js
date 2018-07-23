import React, { Component } from "react";

import "../../css/grid.css";

class Tile extends Component {
    constructor(props){
        super(props);

        this.handleTileClick = this.handleTileClick.bind(this);
    }

    handleTileClick(x, y){
        this.props.onTileClicked(x, y);
    }

    render(){
        return (<div 
                    className={'tile ' + (this.props.filled ? 'black' : 'white')}
                    onClick={() => this.handleTileClick(this.props.x, this.props.y)}>
                </div>
        );
    }
}

export default Tile;