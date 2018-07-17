describe("A dealer ", function () {

    var dealer;
    var deck;

    beforeEach(function () {
        let blackJack = new BlackJack(1);
        dealer = blackJack.dealer;
        deck = dealer.deck;
    });

    it("has a deck of cards", function () {

        expect(deck).not.toBe(null);

        expect(deck).not.toBe('undefined');
    });

    it("has a deck with at least 52 cards", function () {

        var deckGreaterOrEqualTo52 = deck.length >= 52

        expect(deckGreaterOrEqualTo52).toBe(true);
    });

    it("has a deck and a deck has every suite and value", function () {

        var expectedDeck = [];

        for (rank = 0; rank < 13; rank++) {
            for (suite = 0; suite < 4; suite++) {
                expectedDeck.push(new Card(suite, rank));
            }
        }

        for (card = 0; card < expectedDeck.length; card++) {

            var card = expectedDeck[card];

            var cardFromDeck = deck.find(c => c.rank.value == card.rank.value && c.suit.value == card.suit.value);

            expect(card).toEqual(cardFromDeck);
        }
    });

    it("can deal a card", function () {
        var card = dealer.dealCard();

        expect(card.constructor.name).toEqual('Card');
    });

    it("deals a card from the top of the deck", function () {
        var expectedCard = deck[deck.length - 1];
        var actualCard = dealer.dealCard();

        expect(expectedCard).toEqual(actualCard);
    });

    it("then doesnt have the dealt card", function () {

        var dealtCard = dealer.dealCard();
        var actual = deck.includes(dealtCard);
        expect(actual).toBe(false);
    });
});