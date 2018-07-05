"use strict";

const blackJack = 21;
const minimumDealerPoint = 17;

class Dealer extends Player {
    constructor(pointsCalcualtor, players, deck, cardDitributor, calulateHitStrategy) {
        super(pointsCalcualtor);
        this.players = players;
        this.players.push(this);
        this.deck = deck;
        this.cardDitributor = cardDitributor;
        this.calulateHitStrategy = calulateHitStrategy;
    }

    deal() {
        this.cardDitributor.distribute(this);
    }

    dealCard() {
        if (this.deck.length > 0) {
            return this.deck.pop();
        }
    }

    get hit() {
        return this.calulateHitStrategy.hit(this);
    }
}