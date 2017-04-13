import React, { Component } from 'react';

class Tile extends Component {
    render(){
        return (
            <td 
                onClick={this.props.onClick}
                className={`tile ${(this.props.isAlive)? 'alive':''}`} 
            />
        )
    }
}

export default Tile;