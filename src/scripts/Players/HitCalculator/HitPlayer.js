"use strict";

class HitPlayer {
    canHandle(participant) {
        return (participant.constructor.name === 'Player')
    }

    hit(player) {
        if (!this.canHandle(player)) {
            throw 'Cannot handle type of participant passed in';
        }

        return playter.hit && this.score < blackJack;
    }
}