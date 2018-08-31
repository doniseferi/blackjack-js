"use strict";

class DealersHitStrategy {

    canHandle(participant) {
        return (participant.constructor.name === 'Dealer')
    }

    hit(dealer) {

        if (!this.canHandle(dealer)) {
            throw 'Cannot handle type of participant passed in';
        }

        let players = dealer.players.filter(player => player.constructor.name == "Player");

        let closestToBlackJack = dealer.pointsCalculator.getHighestValidCard(players);

        let points = dealer.score;

        return points < minimumDealerPoint || (points <= closestToBlackJack && points < blackJack);
    }
}