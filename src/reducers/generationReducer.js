import * as actions from '../constants';

const GenerationReducer = (state = 0, action) => {
    switch(action.type){
        case actions.NEXT:
            return state + 1;
        case actions.RANDOM:
            return 0;
        case actions.RESET:
            return 0;    
        default:
            return state;
    }
}

export default GenerationReducer;