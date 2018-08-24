"use strict";

class BlackJackGameState {
    state(blackJack) {

        let gameState = this.gameState(blackJack);
        let winners = this.winnersContent(blackJack);
        let losers = this.losersContent(blackJack);

        return gameState + " " + winners + " " + losers;
    }

    gameOver(blackJack) {
        return !blackJack.players.some(x => x.hit)
    }

    winners(blackJack) {
        let winners = blackJack.players.filter(x => !x.out)

        return this.gameOver ? winners : [];
    }


    losers(blackJack) {
        // return blackJack.players.filter(x => !this.winners(blackJack).includes(x));
        return blackJack.players;
    }


    winnersContent(blackJack) {
        let content;

        this.winners(blackJack)
            .forEach(x =>
                content += this.playerName(x, blackJack.players) + " is a winner")

        return content;
    }

    gameState(blackJack) {
        return this.gameOver(blackJack)
            ? "Game Over"
            : "Game Being Played";
    }

    //this needs to move out of here so this class that returns a list of losers and this creates a string
    losersContent(blackJack) {
        let loseRes = "";

        this.losers(blackJack).forEach(x => loseRes += this.playerName(x, blackJack.players) + " is a loser ");

        return loseRes;
    }

    //formating the string
    playerName(player, players) {
        let playerNo = players.indexOf(player) + 1;
        return player.constructor.name == "Player" ? "Player" + playerNo : "Dealer";
    }
}