import { 
    NEW_GAME,
    NEW_HAND,
    NEXT_PLAY,
    PLAY_CARD
} from '../actions/spades.actions';

import {
    getNewGame, 
    getNewHand,
    getNextPlay,
    playCard,
    initialModel
} from '../services/game.service';

const initialState = initialModel;

export default (state = initialState, action) => {
    switch (action.type) {
        case PLAY_CARD:
            return playCard(action.card, state);
        case NEW_GAME:
            return getNewGame(state);
        case NEW_HAND:
            return getNewHand(state);
        case NEXT_PLAY:
            return getNextPlay(state);
        default:
            return state;
    }
}