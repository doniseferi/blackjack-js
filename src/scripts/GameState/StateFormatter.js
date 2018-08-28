"use strict";

class StateFormatter {
    format(isGameOver, winners, losers) {
        let content = `${this.gameOverFormat(isGameOver)} `;

        //TODO: this is where the white space between winner and losers should be
        //and it should not be for the winnersContent method.
        content += this.winnersContent(winners);

        content += this.losersContent(losers, content);

        return content;
    }

    gameOverFormat(isGameOver) {
        return isGameOver ?
            "Game Over" :
            "Game Being Played";
    }

    winnersContent(winners) {
        let content = "";
        winners.forEach(function (player, index) {
            content += `${player.name} is a winner`;
            if (index < winners.length - 1) {
                content += " ";
            }
        });
        return content + " ";
    }

    losersContent(losers) {
        let content = "";
        losers.forEach(function (loser, index) {
            content += `${loser.name} is a loser`;
            if (index < losers.length - 1) {
                content += " ";
            }
        });
        return content;
    }
}