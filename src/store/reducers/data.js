import * as actionTypes from '../actions/actionTypes';

const initialState = {
    status: null,
    candidates: null,
    questions: null,
    // application: {
    //     data: {
    //         videos: []
    //     }
    // },
    application: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA_CANDIDATES:       
            return{
                ...state,
                candidates: action.data,
                status: 200
            };
        case actionTypes.SET_DATA_QUESTIONS:
            return{
                ...state,
                questions: action.data,
                status: 200
            };
        case actionTypes.SET_DATA_APPLICATION:
            return{
                ...state,
                application: action.data,
                status: 200
            };
        case actionTypes.CLEAR_DATA_APPLICATION:
            return{
                ...state,
                application: null,
                status: 200
            };
        case actionTypes.SERVICE_DOWN:
            return {
                ...state,
                status: 503
            };
        default:
            return state;
    }
};

export default reducer;