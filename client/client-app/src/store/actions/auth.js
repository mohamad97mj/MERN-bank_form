import * as actionTypes from './actionTypes';
import axios from '../../my-axios';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {getProfile} from "./profile";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (userData, history) => dispatch => {

    dispatch(authStart());
    axios
        .post("/login", userData)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem("jwtTokenTeams", JSON.stringify(token));
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            // dispatch(setCurrentUser(decoded));

            dispatch(authSuccess(decoded));

            const newUserData = {
                username : userData.username,
            };


            dispatch(getProfile(newUserData, history));

        })
        .catch(err =>
            dispatch(authFail(err))
        );
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};



export const register = (userData, history) => dispatch => {
    axios
        .post("/register", userData)
        .then(res => history.push("/"))
        .catch(err => console.log(err)
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            // })
        );
};


// Set logged in user
// export const setCurrentUser = decoded => {
//     return {
//         type: SET_CURRENT_USER,
//         payload: decoded
//     };
// };