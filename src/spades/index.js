import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { newGame, newHand, nextPlay, playCard } from './actions/spades.actions';
import CardBack from '../images/back02.svg';
import {
    onPlayerCardChanged
} from './services/game.service';

const styles = theme => ({
    buttonContainer: {
        height: '60px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        marginLeft: '-89px',
        '&:first-of-type': {
            marginLeft: '0px'
        }
    },
    contentMain: {
        flex: '1 0 auto',
        height: '100%',
        margin: '0px auto',
        alignItems: 'center',
        flexDirection: 'column',
        width: '960px'
    },
    topSideCard: {
        marginLeft: '-89px',
        transform: 'rotate(-180deg)',
        '&:first-of-type': {
            marginLeft: '0px'
        }
    },
    rightSideCard: {
        marginTop: '-129px',
        transform: 'rotate(90deg)',
        '&:first-of-type': {
            marginTop: '0px'
        }
    },
    leftSideCard: {
        marginTop: '-129px',
        transform: 'rotate(90deg)',
        '&:first-of-type': {
            marginTop: '0px'
        }
    },
    flex: {
        display: 'flex'
    },
    row: {
        flex: '1 0 auto'
    }
});

class Spades extends React.Component {
    constructor(props) {
        super(props);
        this.props.newGame();
        this.onCardClick = this.onCardClick.bind(this);
        onPlayerCardChanged.subscribe(value => {
            if (value !== 0) {
                setTimeout(() => this.props.nextPlay(), 1000);
            }
        });
    }

    renderCurrentCard(card) {
        if(card) {
            return (
                <img 
                    src={require(`../images/bordered_${card.suit}_${card.value}.svg`)}
                    className={this.props.classes.card} 
                    height='160' 
                    alt={`${card.value.toUpperCase()} of ${card.suit.toUpperCase()}`} 
                />
            );
        }
    }

    onCardClick(e) {
        e.preventDefault();
        let card = JSON.parse(e.target.dataset["value"]);
        this.props.playCard(card);
    }
    
    render() {
        return <Grid container className={this.props.classes.contentMain} spacing={0}>
                <Grid container spacing={0}>
                    <Grid item
                        className={this.props.classes.flex}
                        justify="center"
                        alignItems="center"
                        xs={2} />
                    <Grid item
                        className={this.props.classes.flex}
                        justify="center"
                        alignItems="center"
                        xs={6}>
                        {
                            this.props.player3.cards.map(i => {
                                return (
                                    <img 
                                        src={CardBack} 
                                        className={this.props.classes.topSideCard} 
                                        height='160' 
                                        alt="Back of Card" 
                                    />
                                );
                            })
                        }
                    </Grid>
                </Grid>
                <Grid container className={this.props.classes.row} spacing={0}>
                    <Grid
                        item
                        className={this.props.classes.flex}
                        justify="center"
                        alignItems="center"
                        direction="column"
                        xs={2}>
                        {
                            this.props.player2.cards.map(i => {
                                return (
                                    <img 
                                        src={CardBack} 
                                        className={this.props.classes.leftSideCard} 
                                        height='160' 
                                        alt="Back of Card" 
                                    />
                                );
                            })
                        }
                    </Grid>
                    <Grid
                        item
                        className={this.props.classes.flex}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        xs={6}>
                        <Grid container className={this.props.classes.row} spacing={0}>
                            <Grid
                                item
                                className={this.props.classes.flex}
                                justify="center"
                                alignItems="center"
                                xs={12}>
                                { this.renderCurrentCard(this.props.player2.currentCard) }
                            </Grid>
                        </Grid>
                        <Grid container className={this.props.classes.row} spacing={0}>
                            <Grid
                                item
                                className={this.props.classes.flex}
                                justify="center"
                                alignItems="center"
                                xs={6}>
                                { this.renderCurrentCard(this.props.player3.currentCard) }
                            </Grid>
                            <Grid
                                item
                                className={this.props.classes.flex}
                                justify="center"
                                alignItems="center"
                                xs={6}>
                                { this.renderCurrentCard(this.props.player4.currentCard) }
                            </Grid>
                        </Grid>
                        <Grid container className={this.props.classes.row} spacing={0}>
                            <Grid
                                item
                                className={this.props.classes.flex}
                                justify="center"
                                alignItems="center"
                                xs={12}>
                                { this.renderCurrentCard(this.props.player1.currentCard) }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        className={this.props.classes.flex}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        xs={2}>
                        {
                            this.props.player4.cards.map(i => {
                                return (
                                    <img 
                                        src={CardBack} 
                                        className={this.props.classes.rightSideCard} 
                                        height='160' 
                                        alt="Back of Card" 
                                    />
                                );
                            })
                        }
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid
                        item
                        className={this.props.classes.flex}
                        justify="flex-start"
                        alignItems="flex-end"
                        xs={2} />
                    <Grid
                        item
                        className={this.props.classes.flex}
                        justify="center"
                        alignItems="center"
                        xs={6}>
                        {
                            this.props.player1.cards.map(i => {
                                return (
                                    <img 
                                        src={require(`../images/bordered_${i.suit}_${i.value}.svg`)}
                                        onClick={this.onCardClick}
                                        data-value={JSON.stringify(i)} 
                                        className={this.props.classes.card} 
                                        height='160' 
                                        alt={`${i.value.toUpperCase()} of ${i.suit.toUpperCase()}`} 
                                    />
                                );
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
    }
}

Spades.propTypes = {
    classes: PropTypes.object.isRequired,
    newGame: PropTypes.func.isRequired,
    newHand: PropTypes.func.isRequired,
    playCard: PropTypes.func.isRequired,
    nextPlay: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    player1: state.spades.players[0],
    player2: state.spades.players[1],
    player3: state.spades.players[2],
    player4: state.spades.players[3]
});

export default connect(
    mapStateToProps, 
    {
        newGame,
        newHand,
        nextPlay,
        playCard
    }
)(withStyles(styles)(Spades));
