import * as actions from '../constants';
// import { handleActions } from 'redux-actions';
import { makeGrid, updateGridByToggleCell, nextGrid } from '../lib/grid'

const GRID_SIZE = 20;
const BLANK = true;
const INITIAL_STATE = makeGrid(GRID_SIZE);

const GridReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.TOGGLE:
            return [...updateGridByToggleCell(state,action.payload)]
        case actions.RESET:
            return makeGrid(GRID_SIZE,BLANK)
        case actions.RANDOMIZE:
            return makeGrid(GRID_SIZE)
        case actions.NEXT:
            return nextGrid(state)
        default:
            return state;
    }
}

export default GridReducer;