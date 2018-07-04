"use strict";

class SingleCardDistribution {

    distribute(dealer) {
        let playersToHit = dealer.players.filter(player => player.hit && !player.out);
        playersToHit.forEach(player => player.cards.push(dealer.dealCard()));
    }
}