"use strict";

class CalulateHitStrategy {
    constructor(strategies) {
        this.strategies = strategies;
    }

    hit(player) {
        let strategy = this.strategies.find(x => x.canHandle(player));

        if (strategy === null || strategy === 'undefined') {
            throw 'Cannot find proper strategy for the type provided.';
        }

        return strategy.hit(player);
    }
}