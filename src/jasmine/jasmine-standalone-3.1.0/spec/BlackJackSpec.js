describe("Blackjack  ", function () {

    var blackJack;

    beforeEach(function () {
        blackJack = new BlackJack(2);
    });

    it("should have a collection of players belonging to the game", function () {

        let expectedNumberOfPlayers = blackJack.players.length;

        expect(expectedNumberOfPlayers).toBe(3);
    });

    it("should have a dealer", function () {
        let dealerName = blackJack.dealer.constructor.name;

        expect(dealerName).toBe("Dealer");
    });

    it("can get the cards of a player beloning to the game", function () {

        let expectedCards = blackJack.players[1].cards = [new Card(1, 1), new Card(1, 1)];

        let actualCards = blackJack.getCardsForPlayer(blackJack.players[1]);

        expect(actualCards).toBe(expectedCards);
    });

    it("can get the cards of the dealer", function () {
        let expectedCards = blackJack.dealer.cards = [new Card(0, 1), new Card(1, 2)];
        let actualCards = blackJack.getDealersCards();

        expect(actualCards).toBe(expectedCards);

    })

    it("cannot get the cards of a player that doesnt exist", function () {

        let noneExistingPlayer = new Player(new PointsCalculator());

        expect(function () {
            blackJack.getCardsForPlayer(noneExistingPlayer)
        }).toThrow(new Error("The player does not belong to this game of blacj jack."))
    });
    it("tells you if a player is out", function () {
        let player = blackJack.players[0];
        player.cards = [new Card(0, 10), new Card(0, 10), new Card(0, 10)];

        let actual = blackJack.isPlayerOut(player);

        expect(actual).toBe(true);
    });
    it("tells you if a player is in", function () {
        let player = blackJack.players[0];
        player.cards = [new Card(0, 10), new Card(0, 10)];

        let actual = blackJack.isPlayerIn(player);

        expect(actual).toBe(true);
    });
    it("can play a round", function () {
        let player1CardsBeforeRoundPlayed = blackJack.getCardsForPlayer(blackJack.players[0]).length;
        blackJack.playRound();
        let player1CardsAfterRoundPlayed = blackJack.getCardsForPlayer(blackJack.players[0]).length;

        expect(player1CardsAfterRoundPlayed).toBeGreaterThan(player1CardsBeforeRoundPlayed);
    });
    it("everyone has no cards before a round is played", function () {
        for (i = 0; i < blackJack.players.length; i++) {
            let numberOfCards = blackJack.getCardsForPlayer(blackJack.players[i]).length;
            expect(numberOfCards).toBe(0);
        }
    });
    it("everyone gets 2 cards on the first round", function () {
        blackJack.playRound();
        for (i = 0; i < blackJack.players.length; i++) {
            let numberOfCards = blackJack.getCardsForPlayer(blackJack.players[i]).length;
            expect(numberOfCards).toBe(2);
        }
    });
    it("can allow for a player to hit", function () {
        let player = blackJack.players[1];
        blackJack.playRound();
        player.cards = [new Card(1, 1), new Card(1, 1)];
        blackJack.playRound();
        let cardCount = blackJack.getCardsForPlayer(player).length;
        expect(cardCount).toBe(3);
    });
    it("can allow for a player to stay", function () {
        let player = blackJack.players[1];
        blackJack.playRound();
        blackJack.stand(player);
        let cardCount = blackJack.getCardsForPlayer(player).length;
        expect(cardCount).toBe(2);
    });
    it("once a player is out he cannot hit", function () {
        let player = blackJack.players[1];
        let dealer = blackJack.dealer;
        while (blackJack.isPlayerIn(player)) {
            blackJack.playRound();
            dealer.cards = [new Card(0, 10), new Card(0, 0)];
        }

        let expectedCardCount = blackJack.getCardsForPlayer(player).length;
        blackJack.playRound();
        let actualCardCount = blackJack.getCardsForPlayer(player).length;

        expect(actualCardCount).toBe(expectedCardCount);
    })
    it("every player gets 1 card after the first round if theyre still in", function () {
        blackJack.playRound();
        blackJack.playRound();

        for (i = 0; i < blackJack.players.length; i++) {

            let player = blackJack.players[i];
            if (blackJack.isPlayerIn(player) && player.constructor.name == "Player") {
                let playersCardCount = blackJack.getCardsForPlayer(player).length;
                expect(playersCardCount).toBe(3);
            }
        }
    });
    it("the game is over if a round is played and no one has taken a card", function () {
        let players = blackJack.players.filter(x => x.constructor.name === "Player");
        players.forEach(p => blackJack.stand(p));
        blackJack.dealer.hit = false;
        blackJack.state;
        expect(blackJack.state).toContain("Game over");
    });
    it("tells you if the dealer has won", function () { expect(true).toBeFalsy(); });
    it("raises an event when the game is over", function () { expect(true).toBeFalsy(); });
    it("raises an error when a round is attempted after a game is over", function () { expect(true).toBeFalsy(); });
});