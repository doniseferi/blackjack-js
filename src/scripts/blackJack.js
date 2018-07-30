"use strict";

class BlackJack {

    constructor(numberOfPlayers) {
        this.pointsCalculator = new PointsCalculator();
        let deck = this.initalizeDeck(numberOfPlayers);
        this.players = this.initalizePlayers(numberOfPlayers);
        let distributor = this.initalizeDistributor();
        let calculateHitStrategies = this.initalizeHitStrategies();
        this.dealer = new Dealer(this.pointsCalculator, this.players, deck, distributor, calculateHitStrategies);
    };

    getCardsForPlayer(player) {
        this.assertPlayerBelongsToGame(player);

        return this.players.find(x => x === player).cards;
    }

    assertPlayerBelongsToGame(player) {
        if (!this.players.includes(player))
            throw new Error('The player does not belong to this game of blacj jack.');
    };

    getDealersCards() {
        return this.getCardsForPlayer(this.dealer);
    }

    isPlayerOut(player) {
        this.assertPlayerBelongsToGame(player);
        return player.out;
    }

    isPlayerIn(player) {
        return !this.isPlayerOut(player);
    }

    playRound() {
        this.dealer.deal();
    }

    stand(player) {
        this.assertPlayerBelongsToGame(player);
        player.hit = false;
    }

    get state() {
        let any = this.players.includes(x => x.out === false);

        return any ? "Game Not Over" : "Game Over";
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
            players.push(new Player(this.pointsCalculator));
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