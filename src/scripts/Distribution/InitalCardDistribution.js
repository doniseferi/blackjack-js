"use strict";

class InitalCardDistribution {
    constructor(successor) {
        this.successor = successor;
    }

    distribute(dealer) {
        if (dealer.cards.length > 2) {
            successor.distribute(dealer);
        }
        else {

            for (let i = 0; i < 2; i++) {
                dealer.players.forEach(x => x.cards.push(dealer.dealCard()));
            }
        }
    }
}