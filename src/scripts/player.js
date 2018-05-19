"use strict";

class Player {

    constructor() {
        this.cards = [];
        this.hit = false;
    }

    getScore() {
        let score = 0;
        this.cards.forEach(x => score += x);
        return score;
    }

    getCards() {
        return this.cards;
    }

    hit(value) {
        this.hit = value;
    }
}