import { combineReducers } from 'redux';
import grid from './gridReducer';
import generation from './generationReducer';
import autoplay from './autoReducer';

const reducers = combineReducers({
    generation,
    autoplay,
    grid
});

export default reducers;