import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Rolodex from '../images/2881-illustration-of-a-rolodex-pv.png';
import Meter from '../images/satisfaction-meter-md.png';
import Poker from '../images/Poker-Chips-Main.png';
import logo from '../logo.svg';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginBottom: '40px'
    },
    paper: {
        height: '280px',
    },
    title: {
        display: 'flex',
        flex: '1',
        alignItems: 'flex-end'
    }

});

const Demos = props => (
    <div className={props.classes.root}>
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <Grid
                    className={props.classes.logo}
                    container
                    spacing={16}
                    direction="column"
                    alignItems="center"
                >
                    <h1>Welcome to React Code Demos</h1>
                    <img width="300" alt="react logo" src={logo} />
                    <h3>Runtime: {React.version}</h3>
                </Grid>
            </Grid>
        </Grid>
        <Grid container spacing={16}>
            <Grid item sm={4} xs={12}>
                <Grid
                    className={props.classes.paper}
                    container
                    spacing={16}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <a href="crm">
                        <img src={Rolodex} alt="crm logo" />
                    </a>
                    <div className={props.classes.title}>
                        <h3>CRM</h3>
                    </div>
                </Grid>
            </Grid>
            <Grid item alignItems="center" justify="center" sm={4} xs={12}>
                <Grid
                    className={props.classes.paper}
                    container
                    spacing={16}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <a href="performance">
                        <img src={Meter} alt="performance logo"/>
                    </a>
                    <div className={props.classes.title}>
                        <h3>Performance</h3>
                    </div>
                </Grid>
            </Grid>
            <Grid item alignItems="center" justify="center" sm={4} xs={12}>
                <Grid
                    className={props.classes.paper}
                    container
                    spacing={16}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <a href="poker">
                        <img src={Poker} alt="poker logo" />
                    </a>
                    <div className={props.classes.title}>
                        <h3>Poker</h3>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </div>
);

Demos.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Demos);