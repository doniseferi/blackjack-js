"use strict";

class Player {

    constructor() {
        this.cards = [];
        this.hit = false;
        this.out = false;
    }

    getScore() {
        let score = 0;
        this.cards.forEach(card => score += card.getPoint());
        return score;
    }

    hit(value) {
        this.hit = value;
    }

    out() {
        return this.getScore() > blackJack;
    }
}