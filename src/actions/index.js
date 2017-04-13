import {createAction} from 'redux-actions';
import * as actions from '../constants/';

export const resetAction = createAction(actions.RESET);
export const randomAction = createAction(actions.RANDOMIZE);
export const nextAction = createAction(actions.NEXT);
export const playAction = createAction(actions.PLAY);
export const stopAction = createAction(actions.STOP);
export const toggleAction = createAction(actions.TOGGLE);