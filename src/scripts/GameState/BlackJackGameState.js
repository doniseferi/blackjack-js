"use strict";

class BlackJackGameState {

    constructor() {
        this.resultFormatter = new ResultFormatter();
    }

    state(blackJack) {

        let isGameOver = this.gameOver(blackJack);
        let winners = this.winners(blackJack)
        let losers = this.losers(blackJack)

        return this.resultFormatter.format(isGameOver, winners, losers);
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

class ResultFormatter {
    format(isGameOver, winners, losers) {
        let content = "";

        content += this.gameOverFormat(isGameOver) + " ";

        for (let w = 0; w < winners.length; w++) {

            content += `${winners[w].name} is a winner`;

            if (w < winners.length - 1) {
                content += " ";
            }
        }

        content += " ";

        for (let l = 0; l < losers.length; l++) {

            content += `${losers[l].name} is a loser`;

            if (l < losers.length - 1) {
                content += " ";
            }
        }
        return content;
    }

    gameOverFormat(isGameOver) {
        return isGameOver ?
            "Game Over" :
            "Game Being Played";
    }
}