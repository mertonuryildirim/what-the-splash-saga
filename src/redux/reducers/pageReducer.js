import { IMAGES } from '../actions/actionTypes';
import initialState from './initialState';

const pageReducer = (state = initialState.page, action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return state + 1;
        default:
            return state;
    }
};

export default pageReducer;
