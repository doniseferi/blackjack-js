"use strict";

class BlackJack {

    constructor(numberOfPlayers) {
        this.pointsCalculator = new PointsCalculator();
        let deck = this.initalizeDeck(numberOfPlayers);
        this.players = this.initalizePlayers(numberOfPlayers);
        let distributor = this.initalizeDistributor();
        let calculateHitStrategies = this.initalizeHitStrategies();
        this.dealer = new Dealer(this.pointsCalculator, this.players, deck, distributor, calculateHitStrategies);
        this.blackJackGameState = new BlackJackGameState();
    };

    getCardsForPlayer(player) {
        this.assertPlayerBelongsToGame(player);

        return player.cards;
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

        return this.blackJackGameState.state(this);
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

class BlackJackGameState {
    state(blackJack) {

        let gameOver = blackJack.players.some(x => x.hit) ? "Game Being Played" : "Game Over";

        let winners = blackJack.players.filter(x => !x.out); //.forEach(x => win.set(this.playerName(x), x.score));
        let losers = blackJack.players.filter(x => !winners.includes(x)); //.forEach(x => lose.set(this.playerName(x), x.score));

        let win = new Map();
        let lose = new Map();

        winners.forEach(x => win.set(this.playerName(x, blackJack.players), x.score));
        losers.forEach(x => lose.set(this.playerName(x, blackJack.players), x.score));

        let isDealerWinner = win.has("Dealer");

        let winRes = "";
        let loseRes = "";

        if (isDealerWinner) {
            winRes += "The dealer is the winner";
        } else {
            winners.forEach(x => winRes += this.playerName(x, blackJack.players) + " is a winner ")
        }

        losers.forEach(x => loseRes += this.playerName(x, blackJack.players) + " is a loser ");

        var partialResult = winRes + loseRes;

        return gameOver == "Game Over" ?
            gameOver + " " + partialResult :
            gameOver + partialResult;
    }

    playerName(player, players) {
        let playerNo = players.indexOf(player) + 1;
        return player.constructor.name == "Player" ? "Player" + playerNo : "Dealer";
    }
}