import * as actionTypes from './actionTypes';
import axios from '../../my-axios';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";


export const getProfileStart = () => {
    return {
        type: actionTypes.GET_PROFILE_START
    };
};

export const getProfileSuccess = (profile) => {
    return {
        type: actionTypes.GET_PROFILE_SUCCESS,
        payload: profile
    };
};

export const getProfileFail = (error) => {
    return {
        type: actionTypes.GET_PROFILE_FAIL,
        error: error
    };
};

export const getProfile = (userData) => dispatch => {
    alert("entered getProfile");
    dispatch(getProfileStart);
    // const username = userData.username;
    // alert("username in getProfile is : " + username);
    axios.post(`/profile`, userData)
        // ;
        .then(res => {
            const profile = res.data.data;
            console.log("hereeeeeeee" +  res.data.data.nationalCode);
            dispatch(getProfileSuccess(profile));
        })
        .catch(err => {
            dispatch(getProfileFail(err));
        });
};
