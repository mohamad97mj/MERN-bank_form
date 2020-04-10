import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {

    error: null,
    loading: false,
    loaded: false,
    counter: 0,
    data: [
        {
            date: "init",
            username: "",
            data: {
                moneyRequired: "",
                customerContents: [
                    {
                        cType: "",
                        amount: "",
                    },
                ],
                remittanceContents: [
                    {
                        originCountry: "",
                        originConnectionCheck: true,
                        originBanks: [
                            {
                                nameCheck: false,
                                name: "",
                                minimumAmount: "",
                                minInDollar: "",
                                maximumAmount: "",
                                maxInDollar: "",
                                negotiationLevel: ""
                            }
                        ],
                        originPartners: [
                            {
                                name: "",
                                countries: [
                                    {
                                        name: "",
                                        amount: "",
                                    }
                                ]
                            }
                        ],

                        destinationCountry: "",
                        destinationConnectionCheck: true,
                        destinationBanks: [
                            {
                                nameCheck: false,
                                name: "",
                                minimumAmount: "",
                                minInDollar: "",
                                maximumAmount: "",
                                maxInDollar: "",
                                negotiationLevel: ""

                            }
                        ],
                        destinationPartners: [
                            {
                                name: "",
                                countries: [
                                    {
                                        name: "",
                                        amount: "",
                                    }
                                ]
                            }
                        ],
                    },
                ],
                others: "",
            }
        },
    ]
};


const clone = require('rfdc')();

const getFormStart = (state, action) => {
    return updateObject(state, {error: null, loading: true});
};

const getFormSuccess = (state, action) => {

    return updateObject(state, {
        data: state.data.concat(action.payload),
        error: null,
        loading: false,
        loaded: true,
    });
};

const getFormFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_FORM_START:
            return getFormStart(state, action);
        case actionTypes.GET_FORM_SUCCESS:
            return getFormSuccess(state, action);
        case actionTypes.GET_FORM_FAIL:
            return getFormFail(state, action);
        // case actionTypes.POST_FORM_START:
        //     return postFormStart(state, action);
        // case actionTypes.POST_FORM_SUCCESS:
        //     return postFormSuccess(state, action);
        // case actionTypes.POST_FORM_FAIL:
        //     return postFormFail(state, action);
        case actionTypes.ON_CHANGE_HANDLER:
            return onChangeHandler(state, action);
        case actionTypes.ADD_CONTENT_HANDLER:
            return addContentHandler(state, action);
        case actionTypes.REMOVE_CONTENT_HANDLER:
            return removeContentHandler(state, action);
        case actionTypes.CONTENT_LEVEL1_ON_CHANGE_HANDLER:
            return contentLevel1onChangeHandler(state, action);
        case actionTypes.ADD_CONTENT_LEVEL1_HANDLER:
            return addContentLevel1Handler(state, action);
        case actionTypes.REMOVE_CONTENT_LEVEL1_HANDLER:
            return removeContentLevel1Handler(state, action);
        case actionTypes.CONTENT_LEVEL2_ON_CHANGE_HANDLER:
            return contentLevel2onChangeHandler(state, action);
        case actionTypes.ADD_CONTENT_LEVEL2_HANDLER:
            return addContentLevel2Handler(state, action);
        case actionTypes.REMOVE_CONTENT_LEVEL2_HANDLER:
            return removeContentLevel2Handler(state, action);
        case actionTypes.CONTENT_LEVEL3_ON_CHANGE_HANDLER:
            return contentLevel3onChangeHandler(state, action);
        case actionTypes.DISABLE_REMITTANCE_BANKS_NAME_HANDLER:
            return disableRemittanceBanksNameHandler(state, action);
        case actionTypes.DISABLE_REMITTANCE_BANKS_HANDLER:
            return disableRemittanceBanksHandler(state, action);

        default:
            return state;
    }
};


const onChangeHandler = (state, action) => {
    const stateDataCopy = clone(state.data);
    stateDataCopy[stateDataCopy.length - 1].data[action.control] = action.event.target.value;

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });
};

const addContentHandler = (state, action) => {
    const stateDataCopy = clone(state.data);
    let toAddContent = null;
    switch (action.control) {
        case "remittanceContents" :
            toAddContent =
                {
                    originCountry: "",
                    originConnectionCheck: true,
                    originBanks: [
                        {
                            nameCheck: false,
                            name: "",
                            minimumAmount: "",
                            minInDollar: "",
                            maximumAmount: "",
                            maxInDollar: "",
                            negotiationLevel: ""

                        }
                    ],
                    originPartners: [
                        {
                            name: "",
                            countries: [
                                {
                                    name: "",
                                    amount: "",
                                    amountInDollar: "",
                                }
                            ]
                        }
                    ],

                    destinationCountry: "",
                    destinationConnectionCheck: true,
                    destinationBanks: [
                        {
                            nameCheck: false,
                            name: "",
                            minimumAmount: "",
                            minInDollar: "",
                            maximumAmount: "",
                            maxInDollar: "",
                            negotiationLevel: ""

                        }
                    ],
                    destinationPartners: [
                        {
                            name: "",
                            countries: [
                                {
                                    name: "",
                                    amount: "",
                                    amountInDollar: "",

                                }
                            ]
                        }
                    ],
                };
            break;

        case "customerContents":
            toAddContent =
                {
                    type: "",
                    amount: "",
                };
            break;

        default:
            break;
    }

    stateDataCopy[stateDataCopy.length - 1].data[action.control].push(toAddContent);

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });

};

const removeContentHandler = (state, action) => {
    const stateDataCopy = clone(state.data);

    if (stateDataCopy[stateDataCopy.length - 1].data[action.control].length > 1) {

        stateDataCopy[stateDataCopy.length - 1].data[action.control].splice(action.index, 1);

    }

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });

};

const contentLevel1onChangeHandler = (state, action) => {

    let value = null;
    if (action.autoFlag){
        value = action.event;
    }
    else {
        value = action.event.target.value;
    }

    const stateDataCopy = clone(state.data);
    stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2] = value;

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });

};

const addContentLevel1Handler = (state, action) => {

    const stateDataCopy = clone(state.data);

    let toAddContent = null;
    switch (action.control) {
        case "remittanceContents" :
            switch (action.control2) {
                case "originBanks":
                case "destinationBanks":
                    toAddContent =
                        {
                            nameCheck: false,
                            name: "",
                            minimumAmount: "",
                            minInDollar: "",
                            maximumAmount: "",
                            maxInDollar: "",
                            negotiationLevel: ""
                        };
                    break;

                case "originPartners":
                case "destinationPartners":
                    toAddContent =
                        {
                            name: "",
                            countries: [
                                {
                                    name: "",
                                    amount: "",
                                    amountInDollar: "",
                                }
                            ]
                        };
                    break;
            }
            break;

        case "customerContents" :
            break;
        default:
            break;
    }

    stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2].push(toAddContent);

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });

};

const removeContentLevel1Handler = (state, action) => {

    const stateDataCopy = clone(state.data);

    if (stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2].length > 1) {
        stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2].splice(action.index2, 1);

    }

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });

};

const contentLevel2onChangeHandler = (state, action) => {

    let value = action.event.target.value;
    if (action.commaFlag) {
        value = removeCommas(value);
    }

    const stateDataCopy = clone(state.data);
    stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2][action.index2][action.control3] = value;

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });
};

const addContentLevel2Handler = (state, action) => {

    const stateDataCopy = clone(state.data);

    let toAddContent = null;
    switch (action.control) {
        case "remittanceContents":
            switch (action.control2) {
                case "originPartners":
                case "destinationPartners":
                    switch (action.control3) {
                        case "countries":
                            toAddContent =
                                {
                                    name: "",
                                    amount: "",
                                };
                            break;
                    }
                    break;
            }
            break;
    }


    stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2][action.index2][action.control3].push(toAddContent);

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });
};

const removeContentLevel2Handler = (state, action) => {
    const stateDataCopy = clone(state.data);

    if (stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2][action.index2][action.control3].length > 1) {

        stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2][action.index2][action.control3].splice(action.index3, 1);
    }

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });

};

const contentLevel3onChangeHandler = (state, action) => {
    const stateDataCopy = clone(state.data);
    let value = null;

    if (action.autoFlag) {
        value = action.event;
    }
    else {
        value = action.event.target.value;
        if (action.commaFlag) {
            value = removeCommas(value);
        }
    }

    stateDataCopy[stateDataCopy.length - 1].data[action.control][action.index][action.control2][action.index2][action.control3][action.index3][action.control4] = value;

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });
};

const disableRemittanceBanksNameHandler = (state, action) => {

    const stateDataCopy = clone(state.data);

    if (action.event.target.checked) {

        stateDataCopy[stateDataCopy.length - 1].data.remittanceContents[action.index][action.control][action.index2].name = "";
    }

    stateDataCopy[stateDataCopy.length - 1].data.remittanceContents[action.index][action.control][action.index2].nameCheck = action.event.target.checked;

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });
};

const disableRemittanceBanksHandler = (state, action) => {

    const stateDataCopy = clone(state.data);

    if (action.event.target.value === "false") {

        stateDataCopy[stateDataCopy.length - 1].data.remittanceContents[action.index][action.control] =
            [
                {
                    nameCheck: false,
                    name: "",
                    minimumAmount: "",
                    minInDollar: "",
                    maximumAmount: "",
                    maxInDollar: "",
                    negotiationLevel: ""

                }

            ];

        stateDataCopy[stateDataCopy.length - 1].data.remittanceContents[action.index][action.control2] = false;

    } else {
        stateDataCopy[stateDataCopy.length - 1].data.remittanceContents[action.index][action.control2] = true;
    }

    return updateObject(state, {
        counter: state.counter + 1,
        data: stateDataCopy,
    });
};

const removeCommas = (s) => {
    // alert("entered comma");
    s = s.replace(/,/g, '');
    return s;
};


export default reducer;
