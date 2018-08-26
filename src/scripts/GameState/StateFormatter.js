"use strict";

class StateFormatter {
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