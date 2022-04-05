import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import classes from './details.module.css'
import { Container, Typography, CircularProgress } from '@mui/material';
import Videos from './videos/videos';

const Details = (props) => {
  const [arr, setArr] = useState([]);
  const [counter, setCounter] = useState(0);
  const { id } = useParams()
  useEffect(() => {
    props.onClearApplication();
    if (props.candidates.data && id) {
      const res = props.candidates.data.filter(e => e.id == id)
      if (res[0].applicationId) {
        props.onGetApplication(res[0].applicationId, id);
      }else {
        setCounter(1);
      }
    }
  }, [id])

  useEffect(() => {
    let app = props.application;
    if (app) {
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
    } else {
      setArr([])
    }
  }, [props.application])

  const renderDetails = () => {
    if(counter === 0){
      return (
        <Container className={classes.box}>
          <Typography variant="h4" className={classes.typography}><CircularProgress color="inherit" />please choose a candidate</Typography>
        </Container>
      )
    }else {
      return (
        <Container className={classes.box}>
          <Typography variant="h4" className={classes.typography}><CircularProgress color="inherit" />candidate has no application</Typography>
        </Container>
      )
    }
  }

  return (
    <div className={classes.container}>
      {arr.length
        ? <>{arr.map(e => <Videos data={e} id={id} />)}</>
        : renderDetails()}
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
    onGetApplication: (appId, id) => dispatch(actions.getApplication(appId, id)),
    onClearApplication: () => dispatch(actions.clearApplication())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);