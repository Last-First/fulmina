import React from 'react';
import { connect } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    Hidden,
    Box,
    List,
    ListItem,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import classes from './list.module.css';

const ListCandidate = (props) => {
    const mobile = ['xs', 'sm'];
    const laptop = ['md', 'lg', 'xl'];

    let candidates = null
    if (props.candidates) {
        candidates = props.candidates.data.map(e => {
            return(
            <ListItem>
                <NavLink
                    to={'/' + e.id}
                    className={({isActive})=>{
                        const linkClasses = [classes.Link];
                        if (isActive) linkClasses.push(classes.active);
                        return linkClasses.join(" ");
                    }}
                    tabIndex="0" aria-label={e.name}>
                    {e.name}
                </NavLink>
            </ListItem>
            )
        })
    }

    return (
        <>
            {/* <Hidden only={laptop}>
                <AppBar position="relative">
                    <Toolbar>
                        <AccountBoxIcon />
                        <Typography variant="h6" noWrap>Candidates</Typography>
                    </Toolbar>
                </AppBar>
            </Hidden> */}
            {/* <Hidden only={mobile}> */}
                <Drawer
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap>Knockri Candidates</Typography>
                    </Toolbar>
                    <Divider />
                    <Box
                        role="presentation">
                        <List>
                            {candidates}
                        </List>
                    </Box>
                </Drawer>
            {/* </Hidden> */}
            <main>
                {props.children}
            </main>
        </>
    )
};

const mapStateToProps = state => {
    return {
        candidates: state.candidates
    };
}

export default connect(mapStateToProps, null)(ListCandidate);