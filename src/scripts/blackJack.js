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

        let winningResult = "";
        let losingResult = "";
        let scoresResult = "";
        let points = "";
        let gameOver = "Game Over";

        let losers = this.players.filter((x => x.constructor.name == "Player" &&
                x.score <= this.dealer.score) ||
            (x.constructor.name == "Player" && x.out == true));

        console.log("Losers");
        console.log(losers);

        let winners = this.players.filter((x => x.constructor.name == "Player" &&
            x.score >= this.dealer.score && x.out == false));

        if (winners !== undefined || winners.length > 0) {

            for (let i = 0; i < winners.length; i++) {
                let player = winners[i];
                let playerNo = this.players.indexOf(player) + 1;
                let playerDetail = "Player" + playerNo + " is a winner ";
                winningResult += playerDetail;
            }

            for (let i = 0; i < losers.length; i++) {
                let player = losers[i];
                let playerNo = this.players.indexOf(player) + 1;
                let playerDetail = "Player" + playerNo + " is a loser ";
                losingResult += playerDetail;
            }

        } else {
            winningResult += "The dealer is the winner";

            for (i = 0; i < losers.length; i++) {


                for (let i = 0; i < losers.length; i++) {
                    let player = losers[i];
                    let playerNo = this.players.indexOf(player) + 1;
                    let playerDetail = "Player" + playerNo + " is a loser ";
                    losingResult += playerDetail;
                }
            }
        }

        this.players.forEach(x => points += x.constructor.name + " has " + x.score + " ");

        return gameOver + " " + winningResult + " " + losingResult + points;

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