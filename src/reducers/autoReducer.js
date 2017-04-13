import * as actions from '../constants';

const INITIAL_STATE = {
    isRunning: false,
    frameId: null
};

const AutoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.PLAY:
            return {...state, 
                status: true, 
                frameId: action.payload
            };
        case actions.STOP:
            return {...state, 
                status: false, 
                frameId: null
            };
        default:
            return state;
    }
}

export default AutoReducer;