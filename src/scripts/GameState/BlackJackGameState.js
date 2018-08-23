"use strict";

class BlackJackGameState {
    state(blackJack) {

        let gameState = this.gameState(blackJack);
        let winners = this.winnersContent(blackJack);
        let losers = this.losersContent(blackJack);

        return gameState + winners + losers;
    }

    //TODO:
    //this needs to move out of here so this class that returns a list of winners and this creates a string
    winnersContent(blackJack) {
        let winners = blackJack.players.filter(x => !x.out);

        let winRes = "";

        //determining if the dealer is the winner
        let isDealerWinner = winners.some(x => x.constructor.name == "Dealer");

        //creating the winning result string
        if (isDealerWinner) {
            winRes += "The dealer is the winner";
        } else {
            winners.forEach(x => winRes += this.playerName(x, blackJack.players) + " is a winner ")
        }

        return winRes;
    }

    //this needs to be moved out of here into a class that determines if a game is over
    gameState(blackJack) {
        return blackJack.players.some(x => x.hit) ? "Game Being Played" : "Game Over"
    }

    //this needs to move out of here so this class that returns a list of losers and this creates a string
    losersContent(blackJack) {
        let losers = blackJack.players.filter(x => !blackJack.players.filter(x => !x.out).includes(x));

        let loseRes = "";

        losers.forEach(x => loseRes += this.playerName(x, blackJack.players) + " is a loser ");

        return loseRes;
    }

    //formating the string
    playerName(player, players) {
        let playerNo = players.indexOf(player) + 1;
        return player.constructor.name == "Player" ? "Player" + playerNo : "Dealer";
    }
}