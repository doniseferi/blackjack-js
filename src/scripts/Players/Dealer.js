"use strict";

const blackJack = 21;
const minimumDealerPoint = 17;

class Dealer extends Player {
    constructor(players, deck, cardDitributor) {
        super();
        this.players = players;
        this.players.push(this);
        this.deck = deck;
        this.cardDitributor = cardDitributor;
    }

    deal() {
        this.cardDitributor.distribute(this);
    }

    dealCard() {
        return this.deck.pop();
    }

    getHit() {

        let closestToBlackJack = this.getOppositionsHighestValidCard();

        return this.getScore() < minimumDealerPoint || this.getScore() <= closestToBlackJack;
    }

    getOppositionsHighestValidCard() {

        let points = this.getOppositionsPoints(this.players)
        .sort(function orderByDescending(a, b) { 
            return a - b; 
        });

        return Math.max.apply(Math, points.filter(function (x) {
            return x <= blackJack;
        }));
    }

    getOppositionsPoints(players) {

        let points = [];

        players.forEach(player => points.push(player.getScore()));

        return points;
    }
}