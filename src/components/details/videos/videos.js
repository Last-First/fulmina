import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Container,
    TextField,
    Button
} from '@mui/material';
import classes from './videos.module.css';

const Videos = (props) => {
    const [comment, setComment] = useState('');
    useEffect(()=>{
        getComment();
    }, [])

    const commentHandler = (qId, comment) => {
        props.onAddComment(props.id, qId, comment);
    }

    const getComment = () => {
        if(props.id in props.comments){
            console.log(props.data.questionId)
            if(props.data.questionId in props.comments[props.id]){
                console.log(props.comments[props.id][props.data.questionId])
                setComment(props.comments[props.id][props.data.questionId])
            }
        }
    }

    return(

    <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" mb={2} component="div">
                {props.data.question}
            </Typography>
            <Container className={classes.container}>
                <CardMedia
                    component="iframe"
                    className={classes.media}
                    image={props.data.src}
                    alt={props.data.question}
                />
            </Container>
            <TextField
                className={classes.textfield}
                id="standard-multiline-static"
                label="Comments"
                multiline
                rows={4}
                value={comment}
                margin="normal"
                onChange={(e) => setComment(e.target.value)}
            />
            <Button variant="outlined" mb={3} className={classes.button} onClick={() => commentHandler(props.data.questionId, comment)}>Save</Button>
        </CardContent>
    </Card>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: (appId, questionId, comment) => dispatch(actions.addComment(appId, questionId, comment))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);