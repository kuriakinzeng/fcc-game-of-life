import React, { Component } from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { toggleAction } from '../actions'

class Grid extends Component {
    renderTiles() {
        return (row, y) => (
            <tr key={y}>
                {
                    row.map(
                        (isAlive, x) => (
                            <Tile
                                key={x}
                                isAlive={isAlive}
                                onClick={() => this.props.toggleAction({'x':x,'y':y})}
                            />
                        )
                    )
                }
            </tr>
        )
    }

    // NOTE: array.map(function(currentValue, index, arr), thisValue)
    render() {
        return (
            <table>
                <tbody>
                    {this.props.grid.map(this.renderTiles())}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { grid: state.grid };
}

export default connect(mapStateToProps, { toggleAction })(Grid);