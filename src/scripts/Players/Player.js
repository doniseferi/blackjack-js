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

    setHit(value) {
        this.hit = value;
    }

    getHit() {
        return this.hit;
    }

    out() {
        return this.getScore() > blackJack;
    }
}