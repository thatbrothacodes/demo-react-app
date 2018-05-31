import { observable, Subject, Observable, of, create } from 'rxjs/';

export const initialModel = {
    score: {
        us: 0,
        them: 0,
    },
    players: [
        { id: 0, bid: 0, tricks: 0, cards: [] },
        { id: 1, bid: 0, tricks: 0, cards: [] },
        { id: 2, bid: 0, tricks: 0, cards: [] },
        { id: 3, bid: 0, tricks: 0, cards: [] }
    ],
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

const initialHand = {
    players: [
        { id: 0, bid: 0, tricks: 0, cards: [] },
        { id: 1, bid: 0, tricks: 0, cards: [] },
        { id: 2, bid: 0, tricks: 0, cards: [] },
        { id: 3, bid: 0, tricks: 0, cards: [] }
    ]
};

export const getNewGame = () => {
    setDeck();
    return {
        ...initialModel,
        players: [
            {
                ...initialModel.players[0],
                cards: cards1
            },
            {
                ...initialModel.players[1],
                cards: cards2
            },
            {
                ...initialModel.players[2],
                cards: cards3
            },
            {
                ...initialModel.players[3],
                cards: cards4
            }
        ]
    };
};

export const getNewHand = (state) => {
    return {
        ...state,
        initialHand,
        dealer: setPlayerOrder(state.dealer)
    };
};

export const playCard = (card, state) => {
    const newState = {
        ...state,
        players: [
            ...state.players.filter(i => i.id !== 0),
            {
                ...state.players[0],
                currentCard: card,
                cards: state.players[0].cards.filter(i => i.cardValue !== card.cardValue)
            }
        ],
        turn: setPlayerOrder(state.turn)
    };

    onPlayerCardChanged.next(newState.turn);

    return newState;
}

export const scoreHand = (state) => {

};

export const getNextPlay = (state) => {
    return {
        ...state,
        players: playBestHand(state.turn, state.players),
        turn: setPlayerOrder(state.turn)
    };
};

export const onPlayerCardChanged = new Subject(initialModel.turn);

export const onStartHand = () => {};
export const onEndHand = () => {};
export const onStartGame = new Subject();
export const onEndGame = new Subject();

const playBestHand = (turn, players) => {
    const playedCards = players.map(i => {
        return {
            id: i.id, 
            currentCard: i.currentCard
        }
    });

    const player = players.find(i => i.id === turn);
    const playedCard = player.cards[0];

    const currentPlayer = {
        ...player,
        currentCard: playedCard,
        cards: player.cards.filter(i => i.cardValue !== playedCard.cardValue)
    };


    return [
        ...players.filter(i => i.id !== turn), 
        currentPlayer
    ];
}

const setPlayerOrder = (order) => {
    const newOrder = order + 1;

    if(newOrder > 3) {
        return 0;
    }

    return newOrder;
}

let deck = [];
let cards1 = [], cards2 = [], cards3 = [], cards4 = [];

function setDeck() {
    shuffleCards();
    dealCards();
    sortCards();
}

const shuffleCards = () => {

    do {
        const currentCard = Math.floor(Math.random() * 52);
        const suitValue = Math.floor(currentCard / 13);
        const cardValue = currentCard % 13;
        let suit = '';
        let value = 2;

        if (suitValue === 3) {
            suit = 's';
        } else if (suitValue === 2) {
            suit = 'h';
        } else if (suitValue === 1) {
            suit = 'd';
        } else {
            suit = 'c';
        }

        if (cardValue === 9) {
            value = 'j';
        } else if (cardValue === 10) {
            value = 'q';
        } else if (cardValue === 11) {
            value = 'k';
        } else if (cardValue === 12) {
            value = 'a';
        } else {
            value = (cardValue + 2).toString();
        }

        const isCardFound = deck.find(c => c.cardValue === currentCard);

        if (!isCardFound) {
            deck.push({suit, value, cardValue: currentCard});
        }

    } while(deck.length < 52);
}

const dealCards = () => {
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

const sortCards = () => {
    cards1.sort((a,b) => a.cardValue - b.cardValue);
    cards2.sort((a,b) => a.cardValue - b.cardValue);
    cards3.sort((a,b) => a.cardValue - b.cardValue);
    cards4.sort((a,b) => a.cardValue - b.cardValue);
};