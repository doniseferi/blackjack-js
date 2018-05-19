"use strict";

const blackJack = 21;
const minimumDealerPoint = 17;

class Dealer extends Player {
    constructor(players, deck) {
        this.players = players;
        this.deck = deck;
    }

    hit() {

        let closestToBlackJack = this.getOppositionsHighestValidCard();

        return points < minimumDealerPoint || this.getScore() <= closestToBlackJack;
    }

    getOppositionsHighestValidCard() {

        let points = this.getOppositionsPoints(this.players);

        points.sort(function orderByDescending(a, b) {
            return a - b;
        });
        
        return Math.max.apply(Math, points.filter(function (x) { return x <= blackJack; }));
    }

    getOppositionsPoints(players) {

        return players.forEach(player => points += player.getScore());
    }
}