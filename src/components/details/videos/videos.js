import React from 'react';
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

const Videos = (props) => (
    <Card className={classes.card} variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div">
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
                defaultValue={props.data.comments}
            />
            <Button variant="outlined" className={classes.button}>Save</Button>
        </CardContent>
    </Card>
)

export default Videos;