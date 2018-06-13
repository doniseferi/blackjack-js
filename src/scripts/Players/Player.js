"use strict";

class Player {

    constructor(pointsCalculator) {
        this.pointsCalculator = pointsCalculator;
        this.cards = [];
        this.hit = false;
        this.out = false;
    }

    getScore() {
        return this.pointsCalculator.calculateHand(this.cards)
    }

    setHit(value) {
        this.hit = value;
    }

    getHit() {
        return this.hit;
    }

    notOut() {
        return this.getScore() <= blackJack;
    }
}