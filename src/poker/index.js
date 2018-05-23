import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardBack from '../images/back02.svg';

const styles = theme => ({
    buttonContainer: {
        height: '60px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    contentMain: {
        flex: '1 0 auto',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    flex: {
        display: 'flex'
    },
    row: {
        flex: '1 0 auto'
    }
});

const Poker = props => (
    <Grid container className={props.classes.contentMain} spacing={0}>
        <Grid container spacing={0}>
            <Grid container spacing={0}>
                <Grid 
                item
                className={props.classes.flex}
                justify="center"
                xs={12}
                >
                    <h3>Dealer</h3>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={5}/>
                <Grid
                    item
                    className={props.classes.flex}
                    justify="flex-end"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
                <Grid
                    item
                    className={props.classes.flex}
                    justify="flex-start"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={props.classes.row} spacing={0}>
            <Grid 
                container 
                justify="center" 
                className={props.classes.row} 
                spacing={0}
            >
                <Grid
                    item
                    className={props.classes.flex}
                    justify="center"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
                <Grid
                    item
                    className={props.classes.flex}
                    justify="center"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
                <Grid
                    item
                    className={props.classes.flex}
                    justify="center"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid container spacing={0}>
                <Grid 
                item
                className={props.classes.flex}
                justify="center"
                xs={12}
                >
                    <h3>Player</h3>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={5}/>
                <Grid
                    item
                    className={props.classes.flex}
                    justify="flex-end"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
                <Grid
                    item
                    className={props.classes.flex}
                    justify="flex-start"
                    alignItems="center"
                    xs={1}
                >
                    <img src={CardBack} alt="Back of Card" />
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={props.classes.buttonContainer} spacing={0}>
            <Grid
                item
                className={props.classes.flex}
                direction="row"
                justify="center"
                alignItems="flex-end"
                xs={12}
            >
                <Button 
                    variant="raised" 
                    color="primary" 
                    className={props.classes.button}
                >
                    Fold
                </Button>
                <Button 
                    variant="raised" 
                    color="primary" 
                    className={props.classes.button}
                >
                    Call
                </Button>
                <Button 
                    variant="raised" 
                    color="primary" 
                    className={props.classes.button}
                >
                    Raise
                </Button>
            </Grid>
        </Grid>
    </Grid>
);

Poker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Poker);
