import * as actionTypes from './actionTypes';
import axios from '../../my-axios';


export const getProfileStart = () => {
    return {
        type: actionTypes.GET_PROFILE_START
    };
};

export const getProfileSuccess = (profiles) => {
    return {
        type: actionTypes.GET_PROFILE_SUCCESS,
        payload: profiles
    };
};

export const getProfileFail = (error) => {
    return {
        type: actionTypes.GET_PROFILE_FAIL,
        error: error
    };
};

export const getProfile = (userData) => dispatch => {

    dispatch(getProfileStart());


    axios.post(`/profile`, userData)
        // ;
        .then(res => {
            const profiles = res.data.data;
            // console.log(profiles);
            dispatch(getProfileSuccess(profiles));
        })
        .catch(err => {
            dispatch(getProfileFail(err));
        });
};


// export const postProfileStart = () => {
//     return {
//         type: actionTypes.POST_PROFILE_START
//     };
// };
//
// export const postProfileSuccess = (postData) => {
//     return {
//         type: actionTypes.POST_PROFILE_SUCCESS,
//         payload: postData
//     };
// };
//
// export const postProfileFail = (error) => {
//     return {
//         type: actionTypes.GET_PROFILE_FAIL,
//         error: error
//     };
// };


export const postProfile = (userProfile) => dispatch => {


    const d = new Date();

    userProfile.date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();

    const tempPostData =
        {
            ...userProfile,
        };


    axios.post(`/profiles`, tempPostData)
        // ;
        .then(res => {
            // console.log("data posted success fully");
            // alert("not here");
            // dispatch(postProfileSuccess(userProfile));
        })
        .catch(err => {
            // alert("but here");
            // dispatch(postProfileFail(err));
        });

};

export const profileOnChangeHandlerStart = (state) => {
    return {
        type: actionTypes.PROFILE_ON_CHANGE_HANDLER,
        payload: state
    };
};


export const profileOnChangeHandler = (state) => dispatch => {

    dispatch(profileOnChangeHandlerStart(state));
};
