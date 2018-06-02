"use strict";

const blackJack = 21;
const minimumDealerPoint = 17;

class Dealer extends Player {
    constructor(pointsCalcualtor, players, deck, cardDitributor) {
        super(pointsCalcualtor);
        this.pointsCalculator = pointsCalcualtor;
        this.players = players;
        this.players.push(this);
        this.deck = deck;
        this.cardDitributor = cardDitributor;
    }

    deal() {
        this.cardDitributor.distribute(this);
    }

    dealCard() {
        if (this.deck.length > 0) {
            return this.deck.pop();
        }
    }

    getHit() {

        let players = this.players.filter(player => player.constructor.name == "Player");

        let closestToBlackJack = this.pointsCalculator.getHighestValidCard(players);

        return this.getScore() < minimumDealerPoint || this.getScore() <= closestToBlackJack;
    }
}