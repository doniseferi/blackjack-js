describe("A dealer ", function () {

    var dealer;
    var deck;
    var player;

    beforeEach(function () {
        let factory = new BlackJackFactory();
        let blackJack = factory.create();
        dealer = blackJack.dealer;
        deck = dealer.deck;
        player = dealer.players[0];
    });

    it("should have a deck of cards", function () {

        expect(deck).not.toBe(null);

        expect(deck).not.toBe('undefined');
    });

    it("should have a deck with at least 52 cards", function () {

        let deckGreaterOrEqualTo52 = deck.length >= 52

        expect(deckGreaterOrEqualTo52).toBe(true);
    });

    it("should have a deck with every value for every suit", function () {

        let expectedDeck = [];

        for (rank = 0; rank < 13; rank++) {
            for (suite = 0; suite < 4; suite++) {
                expectedDeck.push(new Card(suite, rank));
            }
        }

        for (card = 0; card < expectedDeck.length; card++) {

            let expectedCard = expectedDeck[card];

            let actualCard = deck.find(c => c.rank.value == expectedCard.rank.value && c.suit.value == expectedCard.suit.value);

            expect(expectedCard).toEqual(actualCard);
        }
    });

    it("can deal a card", function () {

        let card = dealer.dealCard();

        expect(card.constructor.name).toEqual('Card');
    });

    it("should deal a card from the top of the deck", function () {

        let expectedCard = deck[deck.length - 1];

        let actualCard = dealer.dealCard();

        expect(expectedCard).toEqual(actualCard);
    });

    it("should deal a card then the dealt is not in the deck", function () {

        let dealtCard = dealer.dealCard();

        let actual = deck.includes(dealtCard);

        expect(actual).toBe(false);
    });

    it("should have no cards before dealing", function () {

        let cardCount = dealer.cards.length;

        expect(cardCount).toBe(0);
    });

    it("should have 2 cards after dealing the first hand", function () {

        dealer.deal();

        var dealerCardCount = dealer.cards.length;
        var playerCardCount = player.cards.length;

        expect(playerCardCount).toEqual(dealerCardCount);
        expect(playerCardCount).toBe(2);
    });

    it("should deal only 1 card after dealing the first hand", function () {

        dealer.deal();

        player.cards = [new Card(1, 1), new Card(1, 1)];
        player.hit = true;
        dealer.cards = [new Card(1, 1), new Card(1, 1)];

        dealer.deal();

        var dealerCardCount = dealer.cards.length;
        var playerCardCount = player.cards.length;

        expect(playerCardCount).toBe(3);
        expect(playerCardCount).toEqual(dealerCardCount);
    });

    it("should hit when the dealers cards are less than 17", function () {

        dealer.cards = [new Card(1, 1), new Card(1, 1)];

        let hit = dealer.hit;

        expect(hit).toBe(true);
    });

    it("shouldn't hit when the dealers cards are 21", function () {

        dealer.cards = [new Card(1, 0), new Card(1, 10)];

        let hit = dealer.hit;

        expect(hit).toBe(false);
    });

    it("should hit when the dealer has less that 17", function () {

        dealer.cards = [new Card(1, 5), new Card(1, 10)];

        let hit = dealer.hit;

        expect(hit).toBe(true);
    });

    it("should hit when the dealer has less than 21 and above 16 but less than a player thats not bust", function () {

        player.cards = [new Card(1, 10), new Card(1, 10)];
        player.cards = [new Card(1, 8), new Card(1, 10)];

        let hit = dealer.hit;

        expect(hit).toBe(true);
    });
});