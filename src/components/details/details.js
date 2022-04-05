import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import classes from './details.module.css'
import {Paper} from '@mui/material';
import Videos from './videos/videos';

const Details = (props) => {
  const [arr, setArr] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    if(props.candidates.data && id){
      const res = props.candidates.data.filter(e => e.id == id)
      if(res[0].applicationId) {
        props.onGetApplication(res[0].applicationId);
      }else {
        props.onClearApplication();
      }
    }
  }, [id])

  useEffect(() => {
    let app = props.application;
    if(app){
      app.data.videos.forEach(vid => {
        const question = props.questions.data.filter(e => e.id === vid.questionId)
        const application = {
          question: question[0].question,
          ...vid
        }
        setArr(arr => [
          ...arr,
          application
        ])
      })
    }else {
      setArr([])
    }
  }, [props.application])
  
  // const renderNone = () => {
  //   return(
      
  //   )
  // }

  return (
    <div className={classes.paper}>
      {arr.length 
      ? <>{arr.map(e => <Videos data={e} />)}</>
      : 'no'}
    </div>
  )
}

const mapStateToProps = state => {
  return {
      candidates: state.candidates,
      questions: state.questions,
      application: state.application
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetApplication: (appId) => dispatch(actions.getApplication(appId)),
    onClearApplication: () => dispatch(actions.clearApplication())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
