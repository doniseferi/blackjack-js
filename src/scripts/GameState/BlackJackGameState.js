"use strict";

class BlackJackGameState {

    constructor(stateFormatter = new StateFormatter()) {
        this.stateFormatter = stateFormatter;
    }

    state(blackJack) {

        let isGameOver = this.gameOver(blackJack);
        let winners = this.winners(blackJack)
        let losers = this.losers(blackJack)

        return this.stateFormatter.format(isGameOver, winners, losers);
    }

    gameOver(blackJack) {
        return !blackJack.players.some(x => x.hit)
    }

    winners(blackJack) {
        let winners = blackJack.players.filter(x => !x.out)

        return this.gameOver ? winners : [];
    }

    losers(blackJack) {
        return this.winners(blackJack).length > 0 ?
            blackJack.players.filter(x => !this.winners(blackJack).includes(x)) : [];
    }
}