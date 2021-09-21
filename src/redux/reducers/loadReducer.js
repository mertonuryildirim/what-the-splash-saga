import { IMAGES } from '../actions/actionTypes';
import initialState from './initialState';

const loadReducer = (state = initialState.loads, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_SUCCESS:
            return false;
        case IMAGES.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadReducer;
