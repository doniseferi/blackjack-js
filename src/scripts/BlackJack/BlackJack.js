"use strict";

class BlackJack {

    constructor(blackJackGameState, dealer) {
        this.blackJackGameState = blackJackGameState;
        this.dealer = dealer;
        this.players = this.dealer.players;
    }

    getCardsForPlayer(player) {
        this.assertPlayerBelongsToGame(player);

        return player.cards;
    }

    assertPlayerBelongsToGame(player) {
        if (!this.players.includes(player))
            throw new Error('The player does not belong to this game of blacj jack.');
    };

    getDealersCards() {
        return this.getCardsForPlayer(this.dealer);
    }

    isPlayerOut(player) {
        this.assertPlayerBelongsToGame(player);

        return player.out;
    }

    isPlayerIn(player) {
        return !this.isPlayerOut(player);
    }

    playRound() {
        this.dealer.deal();
    }

    stand(player) {
        this.assertPlayerBelongsToGame(player);
        player.hit = false;
    }

    get state() {
        return this.blackJackGameState.state(this);
    }
}