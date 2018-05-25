"use strict";

const blackJack = 21;
const minimumDealerPoint = 17;

class Dealer extends Player {
    constructor(players, deck, cardDitributor, pointsCalcualtor) {
        super();
        this.players = players;
        this.players.push(this);
        this.deck = deck;
        this.cardDitributor = cardDitributor;
        this.pointsCalcualtor = pointsCalcualtor;
    }

    deal() {
        this.cardDitributor.distribute(this);
    }

    dealCard() {
        return this.deck.pop();
    }

    getHit() {

        let players = this.players.filter(player => player.constructor.name == "Player");

        let closestToBlackJack = this.pointsCalcualtor.getHighestValidCard(players);

        return this.getScore() < minimumDealerPoint || this.getScore() <= closestToBlackJack;
    }
}