"use strict";

class BlackJack {

    constructor(numberOfPlayers) {
        var deck = new DeckFactory().create();
        let players = this.initalizePlayers(numberOfPlayers);
        players[0].setHit(true);
        this.dealer = new Dealer(players, deck);
    };

    initalizePlayers(numberOfPlayers) {
        let players = [];
        for (let i = 0; i < numberOfPlayers; i++) {
            players.push(new Player());
        }
        return players;
    }
}