"use strict";

const blackJack = 21;
const minimumDealerPoint = 17;

class Dealer extends Player {
    constructor(players, deck) {
        this.players = players;
        this.deck = deck;
    }

    hit() {

        let points = this.getPoints(this.players);

        let closestToBlackJack = this.getOppositionsHighestValidCard(points);

        return points < minimumDealerPoint || this.getScore() <= closestToBlackJack;
    }

    getPoints(players) {

        return players.forEach(player => points += player.getScore());
    }

    getOppositionsHighestValidCard(points) {
       
        points.sort(function orderByDescending(a, b) {
            return a - b;
        });
        
        return Math.max.apply(Math, points.filter(function (x) { return x <= blackJack; }));
    }
}