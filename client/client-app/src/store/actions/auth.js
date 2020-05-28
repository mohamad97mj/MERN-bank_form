import * as actionTypes from './actionTypes';
import axios from '../../my-axios';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {getProfile} from "./profile";
import {getForm} from "./main";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (user) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user,

    };
};

export const authFail = (error) => {
    alert("authentication Failed");

    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem("jwtTokenTeams");

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

export const auth = (userData) => dispatch => {

    dispatch(authStart());
    axios
        .post("/login", userData)
        .then(res => {
            console.log(res.status);
            // const {token} = res.data;
            // localStorage.setItem('token', token.idToken);
            // localStorage.setItem('userId', token.localId);
            // localStorage.setItem("jwtTokenTeams", JSON.stringify(token));
            // Set token to Auth header
            // setAuthToken(token);
            // Decode token to get user data
            // const decoded = jwt_decode(token);
            // Set current user
            // dispatch(setCurrentUser(decoded));

            // dispatch(authSuccess(decoded));
            dispatch(authSuccess(userData));

            const tempUserData = {
                username : userData.username,
            };

            dispatch(getProfile(tempUserData));
            dispatch(getForm(tempUserData));

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