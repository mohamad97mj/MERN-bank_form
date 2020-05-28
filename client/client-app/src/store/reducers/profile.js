import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter: 0,
    data: [],
    error: null,
    loading: false,
    loaded: false,
};

const clone = (items) => items.map(item => Array.isArray(item) ? this.clone(item) : item);


const getProfileStart = (state, action) => {

    return updateObject(state, {error: null, loading: true});
};

const getProfileSuccess = (state, action) => {

    return updateObject(state, {
        data: state.data.concat(action.payload),
        error: null,
        loading: false,
        loaded: true,
    });

};

const getProfileFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const profileOnChangeHandler = (state, action) => {

    const dataCopy = [...clone(state.data)];
    dataCopy[dataCopy.length - 1][action.payload.control] = action.payload.value;

    return updateObject(state, {
        counter: state.counter + 1,
        data: dataCopy,
    })
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROFILE_START:
            return getProfileStart(state, action);
        case actionTypes.GET_PROFILE_SUCCESS:
            return getProfileSuccess(state, action);
        case actionTypes.GET_PROFILE_FAIL:
            return getProfileFail(state, action);
        case actionTypes.PROFILE_ON_CHANGE_HANDLER:
            return profileOnChangeHandler(state, action);
        default:
            return state;
    }
};

export default reducer;