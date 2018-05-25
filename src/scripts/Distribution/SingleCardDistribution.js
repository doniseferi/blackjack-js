"use strict";

class SingleCardDistribution {

    distribute(dealer) {
        var playersToHit = dealer.players.filter(player => player.getHit() == true);
        playersToHit.forEach(player => player.cards.push(dealer.dealCard()));
    }
}