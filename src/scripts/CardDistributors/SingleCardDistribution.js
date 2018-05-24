"use strict";

class SingleCardDistribution {
    constructor(successor) {
        this.successor = successor;
    }

    distribute(dealer) {
        let playersToHit = dealer.players.find(player => player.getHit() == true);
        console.log(playersToHit);
    }

    hitMoi(player){
        return player.getHit() == true;
    }
}