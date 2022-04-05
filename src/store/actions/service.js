import * as actionTypes from './actionTypes';
import axios from '../../hoc/axios/axios';

export const setData = (data, response) => {
    switch(response){
        case 'candidates':
            return{
                type: actionTypes.SET_DATA_CANDIDATES,
                data: data
            };
        case 'questions':
            return{
                type: actionTypes.SET_DATA_QUESTIONS,
                data: data
            }
        case 'application':
            return{
                type: actionTypes.SET_DATA_APPLICATION,
                data: data
            }
        case 'clear':
            return{
                type: actionTypes.CLEAR_DATA_APPLICATION
            }
        case 'comments':
            console.log(data)
            return{
                type: actionTypes.ADD_COMMENTS,
                data: data,
            }
        default:
            return{
                type: actionTypes.SERVICE_DOWN
            };
    }   
}

export const serviceFailure = () => {
    return {
        type: actionTypes.SERVICE_DOWN
    };
};

export const initCandidates = () => {
    return dispatch => {
        axios.get('/candidates')
        .then(response => {
            dispatch(setData(response, 'candidates'))
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    };
};

export const initQuestions = () => {
    return dispatch => {
        axios.get('/questions')
        .then(response => {
            dispatch(setData(response, 'questions'))
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    };
};

export const getApplication = (appId, id) => {
    return dispatch => {
        axios.get('/applications/' + appId)
        .then(response => {
            dispatch(setData(response, 'application'))
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    };
};

export const clearApplication = () => {
    return dispatch => {
        dispatch(setData(null, 'clear'))
    }
}

export const addComment = (appId, qId, comments) => {
    return dispatch => {
        let obj = {
            appId: appId,
            qId: qId,
            comments: comments
        }
        dispatch(setData(obj, 'comments'))
    }
}