import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { connect } from 'react-redux';
import Error from '../error/error';
import * as actions from '../../store/actions/index';
import LinearProgress from '@mui/material/LinearProgress';
import List from '../../hoc/list/list';
import Details from '../../components/details/details';

const Library = (props) => {
    useEffect(() => {
        props.onInitCandidates();
        props.onInitQuestions();
    }, [])
    let dataRender = () => {
        switch (props.status) {
            case 200:
                return (
                    <>
                        <List />
                        <Details />
                    </>
                )
            case 503:
                return <Error errorcode={"[503] Service Unavailable!"}
                    info={"Server is down, kindly refresh the page"} />
            case 204:
                return <Error errorcode={"[204] No Response!"}
                    info={"Data cannot find in the server, check URL or contact the administrator"} />
            default:
                return <LinearProgress />
        }
    }
    return dataRender();
}

const mapStateToProps = state => {
    return {
        status: state.status
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCandidates: () => dispatch(actions.initCandidates()),
        onInitQuestions: () => dispatch(actions.initQuestions()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);