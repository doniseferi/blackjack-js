"use strict";

class Player {

    constructor(pointsCalculator, name = "Player") {
        this._name = name;
        this.pointsCalculator = pointsCalculator;
        this.cards = [];
        this._hit = true;
    }

    get name() {
        return this._name;
    }

    get score() {
        return this.pointsCalculator.calculateHand(this.cards)
    }

    set hit(value) {
        this.score < blackJack ?
            this._hit = value : {};
    }

    get hit() {
        return this._hit && this.score < blackJack;
    }

    get out() {
        return this.score > blackJack;
    }
}