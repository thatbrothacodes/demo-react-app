import { 
    PLAY_CARD,
    PLAYER2_PLAY,
    PLAYER3_PLAY,
    PLAYER4_PLAY,
    NEW_GAME,
    NEW_HAND,
    NEXT_TURN,
    CONTINUE_GAME
} from '../actions/spades.actions';

const initialState = {
    score: {
        us: 0,
        them: 0,
    },
    player1: { bid: 0, tricks: 0, cards: [] },
    player2: { bid: 0, tricks: 0, cards: [] },
    player3: { bid: 0, tricks: 0, cards: [] },
    player4: { bid: 0, tricks: 0, cards: [] },
    bags: {
        us: 0,
        them: 0
    },
    lastRound: {
        us: { bid: 0, tricks: 0, bags: 0 },
        them: { bid: 0, tricks: 0, bags: 0 }
    },
    lastWon: 0,
    dealer: 0,
    turn: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_GAME:
            return {
                ...state,
                player1: {
                    ...state.player1,
                    cards: [...cards1]
                },
                player2: {
                    ...state.player2,
                    cards: [...cards2]
                },
                player3: {
                    ...state.player3,
                    cards: [...cards3]
                },
                player4: {
                    ...state.player4,
                    cards: [...cards4]
                }
            };
        case NEW_HAND:
            setDeck();
            return {
                ...state,
                player1: {
                    bid: 0, 
                    tricks: 0,
                    cards: [...cards1]
                },
                player2: {
                    bid: 0, 
                    tricks: 0,
                    cards: [...cards2]
                },
                player3: {
                    bid: 0, 
                    tricks: 0,
                    cards: [...cards3]
                },
                player4: {
                    bid: 0, 
                    tricks: 0,
                    cards: [...cards4]
                }
            };
        case PLAY_CARD:
            return {
                ...state,
                player1: {
                    ...state.player1,
                    currentCard: action.card,
                    cards: state.player1.cards.filter(i => i.cardValue !== action.card.cardValue)
                },
                turn: ++state.turn
            };
        default:
            return state;
    };
};

let deck = [];
let cards1 = [], cards2 = [], cards3 = [], cards4 = [];
let currentCard2, currentCard3, currentCard4;
let partialState = {};

function setDeck() {
    shuffleCards();
    dealCards();
    sortCards();
}

function shuffleCards() {
    let count = 52;

    do {
        const currentCard = Math.floor(Math.random() * 52);
        const suitValue = Math.floor(currentCard / 13);
        const cardValue = currentCard % 13;
        let suit = '';
        let value = 2;

        if (suitValue == 3) {
            suit = 's';
        } else if (suitValue == 2) {
            suit = 'h';
        } else if (suitValue == 1) {
            suit = 'd';
        } else {
            suit = 'c';
        }

        if (cardValue == 9) {
            value = 'j';
        } else if (cardValue == 10) {
            value = 'q';
        } else if (cardValue == 11) {
            value = 'k';
        } else if (cardValue == 12) {
            value = 'a';
        } else {
            value = (cardValue + 2).toString();
        }

        const isCardFound = deck.find(c => c.cardValue === currentCard);

        if (!isCardFound) {
            deck.push({suit, value, cardValue: currentCard});
            count++;
        }

    } while(deck.length < 52);
}

function dealCards() {
    for(let y = 0; y < 13; y++) {
        for (let x = 0; x < 4; x++) {
            if (x === 3) {
                cards1.push(deck.pop());
            } else if (x === 2) {
                cards2.push(deck.pop());
            } else if (x === 1) {
                cards3.push(deck.pop());
            } else {
                cards4.push(deck.pop());
            }
        }
    }
};

function playBestCards() {
}

function sortCards() {
    cards1.sort((a,b) => a.cardValue - b.cardValue);
    cards2.sort((a,b) => a.cardValue - b.cardValue);
    cards3.sort((a,b) => a.cardValue - b.cardValue);
    cards4.sort((a,b) => a.cardValue - b.cardValue);
}

function assignPlayerCards() {
    partialState = {
        us: {
            players: [
                {
                    currentCard: '',
                    lastWon: false,
                    cards: cards1
                },
                {
                    currentCard: '',
                    lastWon: false,
                    cards: cards3
                }
            ]
        },
        them : {
            players: [
                {
                    currentCard: '',
                    lastWon: false,
                    cards: cards2
                },
                {
                    currentCard: '',
                    lastWon: false,
                    cards: cards4
                }
            ]
        }
    };
}

function updatePlayerCards() {
    
};
