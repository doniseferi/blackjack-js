"use strict";

class BlackJackFactory {

    create(numberOfPlayers = 2) {

        this.pointsCalculator = new PointsCalculator();
        let players = this.initalizePlayers(numberOfPlayers);
        let deck = this.initalizeDeck(numberOfPlayers);
        let distributor = this.initalizeDistributor();
        let calculateHitStrategies = this.initalizeHitStrategies();

        let dealer = new Dealer(this.pointsCalculator, players, deck, distributor, calculateHitStrategies);

        let blackJackGameState = new BlackJackGameState(new StateFormatter());

        return new BlackJack(blackJackGameState, dealer);
    }

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
            players.push(new Player(this.pointsCalculator, `Player${i + 1}`));
        }
        return players;
    }

    initalizeDistributor() {
        let distributorFactory = new DistributionFactory();
        return distributorFactory.create();
    }

    initalizeHitStrategies() {
        let factory = new CalulateHitStrategyFactory(this.pointsCalculator);
        return factory.create();
    }
}