import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playAction, stopAction, nextAction, resetAction, randomAction } from '../actions';

class GridControl extends Component {
    togglePlay(){
        if (this.props.autoplay.status){
            clearInterval(this.props.autoplay.frameId);
            this.props.stopAction()
        } else {
            let frameId = setInterval(this.props.nextAction,500);
            this.props.playAction(frameId);
        }
    }
    render() {
        return (
            <div>
                <div className="btn-group controls">
                    <button type="button" 
                    onClick={this.togglePlay.bind(this)}                   
                    className="btn btn-success">{`${this.props.autoplay.status ? 'Stop' : 'Play' }`}
                    </button>
                    <button type="button" onClick={() => this.props.nextAction()} className="btn btn-info">Forward</button>
                    <button type="button" onClick={() => this.props.randomAction()} className="btn btn-warning">Randomize</button>
                    <button type="button" onClick={() => this.props.resetAction()} className="btn btn-danger">Clear</button>
                </div>
                <div>Generation: {this.props.generation}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        generation: state.generation,
        autoplay: state.autoplay,
    }
}

export default connect(mapStateToProps, { playAction, stopAction, nextAction, resetAction, randomAction })(GridControl);