describe("Blackjack  ", function () {

    var blackJack;

    beforeEach(function () {
        let factory = new BlackJackFactory();
        blackJack = factory.create();
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
    it("every player thats in gets 1 card after the first round", function () {
        blackJack.players.forEach(x => x.cards = [new Card(1, 1), new Card(1, 1)]);
        blackJack.playRound();

        for (i = 0; i < blackJack.players.length; i++) {

            let player = blackJack.players[i];
            if (blackJack.isPlayerIn(player) && player.constructor.name == "Player") {
                let playersCardCount = blackJack.getCardsForPlayer(player).length;
                expect(playersCardCount).toBe(3);
            }
        }
    });

    it("tells you the game is not over", function () {
        blackJack.playRound();
        expect(blackJack.state).toContain("Game Being Played");
    });
    it("tells you the game is over", function () {
        blackJack.playRound();
        let players = blackJack.players.filter(x => x.constructor.name === "Player");
        players.forEach(p => blackJack.stand(p));
        blackJack.dealer.cards = [new Card(0, 0), new Card(0, 10)];
        expect(blackJack.state).toContain("Game Over");
    });
    it("the game is over if a round is played and no one has taken a card", function () {
        blackJack.playRound();
        let players = blackJack.players.filter(x => x.constructor.name === "Player");
        players.forEach(p => p.cards = [new Card(1, 4), new Card(1, 4)]);
        players.forEach(p => blackJack.stand(p));
        blackJack.dealer.cards = [new Card(0, 0), new Card(0, 10)];
        expect(blackJack.state).toContain("Game Over");
    });
    it("tells you if a player has won", function () {
        let player1 = blackJack.players[0];
        let player2 = blackJack.players[1];
        let dealer = blackJack.players[2];

        player1.cards = [new Card(0, 0), new Card(0, 10)];
        player2.cards = [new Card(0, 0), new Card(0, 8)];
        dealer.cards = [new Card(1, 10), new Card(1, 10), new Card(1, 11)];

        let expected = "Player" + (blackJack.players.indexOf(player1) + 1) + " is a winner";

        expect(blackJack.state).toContain(expected);
    });
    it("tells you if a player has lost", function () {
        let player1 = blackJack.players[0];
        let player2 = blackJack.players[1];
        let dealer = blackJack.players[2];

        player1.cards = [new Card(0, 0), new Card(0, 10)];
        player2.cards = [new Card(2, 10), new Card(0, 8), new Card(1, 8)];
        dealer.cards = [new Card(1, 10), new Card(1, 10), new Card(1, 11)];

        expect(blackJack.state).toContain("Player2 is a loser");
    });
    it("tells you if the dealer has won", function () {
        let player1 = blackJack.players[0];
        let player2 = blackJack.players[1];
        let dealer = blackJack.players[2];

        player1.cards = [new Card(1, 10), new Card(1, 10), new Card(1, 11)];
        player2.cards = [new Card(0, 10), new Card(0, 8), new Card(1, 11)];
        dealer.cards = [new Card(0, 0), new Card(0, 10)];

        expect(blackJack.state).toContain("Dealer is a winner");
    });

    it("state gives you the expected result", function () {
        let winner = blackJack.players[0];
        let loser = blackJack.players[1];
        let dealer = blackJack.players[2];

        winner.cards = [new Card(0, 0), new Card(0, 10)];
        loser.cards = [new Card(2, 10), new Card(0, 8), new Card(1, 8)];
        dealer.cards = [new Card(1, 9), new Card(2, 9), new Card(3, 4)];

        winner.hit = false;
        loser.hit = false;

        expect(blackJack.state).toEqual("Game Over Player1 is a winner Player2 is a loser Dealer is a loser");
    })

    it("Nothing happens when a round is attempted after a game is over", function () {
        let loser = blackJack.players[0];
        let winner = blackJack.players[1];
        let dealer = blackJack.players[2];

        loser.cards = [new Card(1, 10), new Card(1, 10), new Card(1, 11)];
        winner.cards = [new Card(0, 0), new Card(0, 8)];
        dealer.cards = [new Card(0, 0), new Card(0, 10)];

        loser.hit = false;
        winner.hit = false;

        let prePlayedRoundState = blackJack.state;
        blackJack.playRound();
        let postPlayedRoundState = blackJack.state;

        expect(postPlayedRoundState).toEqual(prePlayedRoundState);
    });
});