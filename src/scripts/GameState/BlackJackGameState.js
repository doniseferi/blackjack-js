"use strict";

class BlackJackGameState {
    state(blackJack) {

        let gameOver = blackJack.players.some(x => x.hit) ? "Game Being Played" : "Game Over";

        let winners = blackJack.players.filter(x => !x.out); //.forEach(x => win.set(this.playerName(x), x.score));
        let losers = blackJack.players.filter(x => !winners.includes(x)); //.forEach(x => lose.set(this.playerName(x), x.score));

        let win = new Map();
        let lose = new Map();

        winners.forEach(x => win.set(this.playerName(x, blackJack.players), x.score));
        losers.forEach(x => lose.set(this.playerName(x, blackJack.players), x.score));

        let isDealerWinner = win.has("Dealer");

        let winRes = "";
        let loseRes = "";

        if (isDealerWinner) {
            winRes += "The dealer is the winner";
        } else {
            winners.forEach(x => winRes += this.playerName(x, blackJack.players) + " is a winner ")
        }

        losers.forEach(x => loseRes += this.playerName(x, blackJack.players) + " is a loser ");

        var partialResult = winRes + loseRes;

        return gameOver == "Game Over" ?
            gameOver + " " + partialResult :
            gameOver + partialResult;
    }

    playerName(player, players) {
        let playerNo = players.indexOf(player) + 1;
        return player.constructor.name == "Player" ? "Player" + playerNo : "Dealer";
    }
}