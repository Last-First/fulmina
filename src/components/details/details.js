import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './details.css'
import * as actions from '../../store/actions/index';

const Details = (props) => {
  const { id } = useParams()
  useEffect(() => {
    if(props.candidates.data && id){
      const res = props.candidates.data.filter(e => e.id == id)
      if(res[0].applicationId) {
        props.onGetApplication(res[0].applicationId);
        console.log(props.questions)
        let arr = []
        props.application.data.videos.forEach(vid => {
          const question = props.questions.data.filter(e => e.id === vid.questionId)
          console.log(question)
          // arr.push(vid)
        })
      }
    }
  }, [props.candidates, id])

  return (
    <div className={classes.details}>test {id}</div>
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
    onGetApplication: (appId) => dispatch(actions.getApplication(appId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
