import * as actionTypes from './actionTypes';
import axios from '../../my-axios';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";


export const getFormStart = () => {
    return {
        type: actionTypes.GET_FORM_START
    };
};

export const getFormSuccess = (form) => {

    return {
        type: actionTypes.GET_FORM_SUCCESS,
        payload: form
    };
};

export const getFormFail = (error) => {
    return {
        type: actionTypes.GET_FORM_FAIL,
        error: error
    };
};

export const getForm = (userData) => dispatch => {

    dispatch(getFormStart());

    axios.post(`/form`, userData)
        // ;
        .then(res => {
            const forms = res.data.data;

            dispatch(getFormSuccess(forms));
        })
        .catch(err => {
            dispatch(getFormFail(err));
        });
};

//......................................................................................................................

// export const postFormStart = () => {
//     return {
//         type: actionTypes.POST_FORM_START
//     };
// };
//
// export const postFormSuccess = (postData) => {
//     return {
//         type: actionTypes.POST_FORM_SUCCESS,
//         payload: postData
//     };
// };
//
// export const postFormFail = (error) => {
//     return {
//         type: actionTypes.POST_FORM_FAIL,
//         error: error
//     };
// };


export const postForm = (userData, userForm) => dispatch => {


    const d = new Date();
    const date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();

    // dispatch(postFormStart());


    const tempPostData =
        {
            ...userData,
            date: date,
            data: {...userForm},
        };

    axios.post(`/forms`, tempPostData)
        // ;
        .then(res => {
            console.log("res");

            // dispatch(postFormSuccess(userForm));
        })
        .catch(err => {
            // dispatch(postFormFail(err));
        });

};


export const onChangeHandler = (event, control) => {

    return {
        type: actionTypes.ON_CHANGE_HANDLER,
        event: event,
        control: control,
    };

};

export const addContentHandler = (control) => {

    return {
        type: actionTypes.ADD_CONTENT_HANDLER,
        control: control,
    };

};

export const removeContentHandler = (control, index) => {
    return {
        type: actionTypes.REMOVE_CONTENT_HANDLER,
        control: control,
        index: index,
    };
};

export const contentLevel1onChangeHandler = (event, control, index, control2) => {

    return {
        type: actionTypes.CONTENT_LEVEL1_ON_CHANGE_HANDLER,
        event: event,
        control: control,
        index: index,
        control2: control2
    };
};

export const addContentLevel1Handler = (control, index, control2) => {

    return {
        type: actionTypes.ADD_CONTENT_LEVEL1_HANDLER,
        control: control,
        index: index,
        control2: control2,
    };

};

export const removeContentLevel1Handler = (control, index, control2, index2) => {

    return {
        type: actionTypes.REMOVE_CONTENT_LEVEL1_HANDLER,
        control: control,
        index: index,
        control2: control2,
        index2: index2
    };
};

export const contentLevel2onChangeHandler = (event, control, index, control2, index2, control3) => {

    return {
        type: actionTypes.CONTENT_LEVEL2_ON_CHANGE_HANDLER,
        event: event,
        control: control,
        index: index,
        control2: control2,
        index2: index2,
        control3: control3,

    };
};

export const addContentLevel2Handler = (control, index, control2, index2, control3) => {

    return {
        type: actionTypes.ADD_CONTENT_LEVEL2_HANDLER,
        control: control,
        index: index,
        control2: control2,
        index2: index2,
        control3: control3,
    };
};

export const removeContentLevel2Handler = (control, index, control2, index2, control3, index3) => {

    return {
        type: actionTypes.REMOVE_CONTENT_LEVEL2_HANDLER,
        control: control,
        index: index,
        control2: control2,
        index2: index2,
        control3: control3,
        index3: index3,

    };
};

export const contentLevel3onChangeHandler = (event, control, index, control2, index2, control3, index3, control4) => {

    return {
        type: actionTypes.CONTENT_LEVEL3_ON_CHANGE_HANDLER,
        event: event,
        control: control,
        index: index,
        control2: control2,
        index2: index2,
        control3: control3,
        index3: index3,
        control4: control4,
    };
};

export const disableRemittanceBanksNameHandler = (event, index, control, index2) => {

    return {
        type: actionTypes.DISABLE_REMITTANCE_BANKS_NAME_HANDLER,
        event: event,
        index: index,
        control: control,
        index2: index2,

    };
};

export const disableRemittanceBanksHandler = (event, index, control, control2) => {

    return {
        type: actionTypes.DISABLE_REMITTANCE_BANKS_HANDLER,
        event: event,
        index: index,
        control: control,
        control2: control2,

    };

};
