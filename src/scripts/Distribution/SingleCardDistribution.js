"use strict";

class SingleCardDistribution {

    distribute(dealer) {
        let playersToHit = dealer.players.filter(player => player.getHit() && player.notOut());
        playersToHit.forEach(player => player.cards.push(dealer.dealCard()));
    }
}