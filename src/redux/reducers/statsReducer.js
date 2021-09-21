import { STATS } from '../actions/actionTypes';
import initialState from './initialState';

const statsReducer = (state = initialState.stats, action) => {
    switch (action.type) {
        case STATS.LOAD:
            return {
                ...state,
                [action.id]: {
                    loads: true,
                    downloads: null,
                    error: false,
                },
            };
        case STATS.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    loads: false,
                    downloads: action.downloads,
                    error: false,
                },
            };
        case STATS.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    loads: false,
                    downloads: null,
                    error: true,
                },
            };
        default:
            return state;
    }
};

export default statsReducer;
