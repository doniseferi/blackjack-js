"use strict";

class Player {

    constructor(pointsCalculator) {
        this.pointsCalculator = pointsCalculator;
        this.cards = [];
        this._hit = false;
    }

    get score() {
        return this.pointsCalculator.calculateHand(this.cards)
    }

    set hit(value) {
        this._hit = value;
    }

    get hit() {
        return this._hit && this.score < blackJack;
    }

    get out() {
        return this.score > blackJack;
    }
}