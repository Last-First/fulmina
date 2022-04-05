import * as actionTypes from '../actions/actionTypes';

const initialState = {
    status: null,
    candidates: null,
    questions: null,
    application: null,
    comments: {}
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
        case actionTypes.ADD_COMMENTS:
            console.log(action.data, state.application)
            if(state.comments[action.data.appId]){
                state.comments[action.data.appId][action.data.qId] = action.data.comments
            }else{
                state.comments[action.data.appId] = {}
                state.comments[action.data.appId][action.data.qId] = action.data.comments
            }
            return{
                ...state,
            }
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