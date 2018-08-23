"use strict";

//TODO:
//this class should be responsible for 1 thing, returning the current state of the class
//however the class is doing 6 things which should be broken down
class BlackJackGameState {
    state(blackJack) {

        let gameOver = this.getGameOverContent(blackJack);
        let winners = this.getWinnersContent(blackJack);
        let losers = this.getLosersContent(blackJack);

        return gameOver + winners + losers;
    }

    //this needs to move out of here so this class that returns a list of winners and this creates a string
    getWinnersContent(blackJack) {
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
    getGameOverContent(blackJack) {
        return blackJack.players.some(x => x.hit) ? "Game Being Played" : "Game Over"
    }

    //this needs to move out of here so this class that returns a list of losers and this creates a string
    getLosersContent(blackJack) {
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