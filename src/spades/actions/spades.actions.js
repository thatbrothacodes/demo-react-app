export const PLAY_CARD = "PLAY_CARD";
export const PLAYER2_PLAY = "PLAYER2_PLAY";
export const PLAYER3_PLAY = "PLAYER3_PLAY";
export const PLAYER4_PLAY = "PLAYER4_PLAY";
export const NEW_GAME = "NEW_GAME";
export const NEW_HAND = "NEW_HAND";
export const NEXT_PLAY = "NEXT_PLAY";
export const CONTINUE_GAME = "CONTINUE_GAME";

export const newHand = () => ({ 
    type: NEW_HAND
});

export const newGame = () => ({ 
    type: NEW_GAME
});

export const nextPlay = () => ({
    type: NEXT_PLAY,
});

export const playCard = (card) => ({
    type: PLAY_CARD,
    card
});
