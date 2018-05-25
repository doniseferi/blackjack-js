"use strict";

class BlackJack {

    constructor(numberOfPlayers) {
        let deck = this.initalizeDeck(numberOfPlayers);
        let players = this.initalizePlayers(numberOfPlayers);
        let distributor = this.initalizeDistributor();
        this.dealer = new Dealer(players, deck, distributor, new PointsCalcualtor());
    };

    initalizeDeck(numberOfPlayers) {
        let deckFactory = new DeckFactory();
        let deck = deckFactory.create(numberOfPlayers);
        let shuffler = new Shuffler()
        shuffler.shuffle(deck);
        return deck;
    }

    initalizePlayers(numberOfPlayers) {
        let players = [];
        for (let i = 0; i < numberOfPlayers; i++) {
            players.push(new Player());
        }
        return players;
    }

    initalizeDistributor() {
        let distributorFactory = new DistributionFactory();
        return distributorFactory.create();
    }
}