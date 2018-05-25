"use strict";

class SingleCardDistribution {

    distribute(dealer) {
        var playersToHit = dealer.players.filter(player => player.hit() == true);
        playersToHit.forEach(player => player.cards.push(dealer.dealCard()));
    }
}