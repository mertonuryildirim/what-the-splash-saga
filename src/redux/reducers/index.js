import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import loadReducer from './loadReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    errorReducer,
    imageReducer,
    loadReducer,
    pageReducer,
    statsReducer,
});

export default rootReducer;
