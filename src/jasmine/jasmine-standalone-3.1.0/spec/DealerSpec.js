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

        let deckGreaterOrEqualTo52 = deck.length >= 52

        expect(deckGreaterOrEqualTo52).toBe(true);
    });

    it("has a deck and a deck has every suite and value", function () {

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

    it("deals a card from the top of the deck", function () {
        let expectedCard = deck[deck.length - 1];
        let actualCard = dealer.dealCard();

        expect(expectedCard).toEqual(actualCard);
    });

    it("deals a card then the card is not in the deck", function () {

        let dealtCard = dealer.dealCard();
        let actual = deck.includes(dealtCard);
        expect(actual).toBe(false);
    });

    it("has no cards before dealing", function () {
        let cardCount = dealer.cards.length;
        expect(cardCount).toEqual(0);
    });

    it("has 2 cards after it deals the first hand", function () {
        dealer.deal();
        let cardCount = dealer.cards.length;
        expect(cardCount).toEqual(2);
    });

    it("hits when it has less than 17", function () {
        dealer.deal();
        console.log(dealer.cards);
        dealer.cards = [new Card(1, 1), new Card(1, 1)];
        console.log(dealer.cards);
        let hit = dealer.hit;
        expect(hit).toBe(true);
    });
    it("does not hit when it has 21", function () {
        dealer.deal();
        dealer.cards = [new Card(0, 0), new Card(3, 10)];
        let hit = dealer.hit;
        expect(hit).toBe(false);
    })
});