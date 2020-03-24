import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    data: null,
    error: null,
    loading: false,
    loaded : false,
};

const getProfileStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const getProfileSuccess = (state, action) => {

    return updateObject( state, {
        data: action.payload,
        error: null,
        loading: false,
        loaded: true,
    } );
};

const getProfileFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PROFILE_START: return getProfileStart(state, action);
        case actionTypes.GET_PROFILE_SUCCESS: return getProfileSuccess(state, action);
        case actionTypes.GET_PROFILE_FAIL: return getProfileFail(state, action);
        default:
            return state;
    }
};

export default reducer;